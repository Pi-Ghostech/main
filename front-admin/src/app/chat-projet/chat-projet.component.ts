import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { RxStompService } from '@stomp/ng2-stompjs';

@Component({
  selector: 'app-chat-projet',
  templateUrl: './chat-projet.component.html',
  styleUrls: ['./chat-projet.component.css']
})
export class ChatProjetComponent implements OnInit, OnDestroy {
  private username: string | null = null;
  connectingElement: HTMLElement | null = null; // Déclaration publique

  private colors: string[] = [
    '#2196F3', '#32c787', '#00BCD4', '#ff5652',
    '#ffc107', '#ff85af', '#FF9800', '#39bbb0'
  ];
  private messageArea: HTMLElement | null = null;
  private subscriptions: Subscription[] = [];

  constructor(private http: HttpClient, private rxStompService: RxStompService) { }

  ngOnInit(): void {
    this.messageArea = document.querySelector('#messageArea');
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  connect(form: NgForm): void {
    const username = form.value.name.trim();
    if (username) {
      this.username = username;
      this.subscriptions.push(
        this.http.get<string>('http://localhost:8095/websocket').subscribe((socketUrl: string) => {
          this.rxStompService.configure({
            brokerURL: socketUrl
          });
          this.rxStompService.activate();
          this.rxStompService.watch('/topic/public').subscribe((message: any) => {
            this.onMessageReceived(message.body);
          });
          const chatMessage = { sender: this.username, type: 'JOIN' };
          this.rxStompService.publish({
            destination: '/app/chat.addUser',
            body: JSON.stringify(chatMessage),
          });
          this.connectingElement?.classList.add('hidden');
        })
      );
    }
  }

  onError(error: any): void {
    if (this.connectingElement) {
      this.connectingElement.textContent = 'Could not connect to WebSocket server. Please refresh this page to try again!';
      this.connectingElement.style.color = 'red';
    }
  }

  sendMessage(form: NgForm): void {
    const messageContent = form.value.message.trim();
    if (messageContent) {
      const chatMessage = { sender: this.username, content: messageContent, type: 'CHAT' };
      this.rxStompService.publish({
        destination: '/app/chat.sendMessage',
        body: JSON.stringify(chatMessage),
      });
    }
  }

  onMessageReceived(payload: any): void {
    const message = JSON.parse(payload);
    const messageElement = document.createElement('li');

    if (message.type === 'JOIN' || message.type === 'LEAVE') {
      messageElement.classList.add('event-message');
      message.content = message.sender + (message.type === 'JOIN' ? ' joined!' : ' left!');
    } else {
      messageElement.classList.add('chat-message');
      const avatarElement = document.createElement('i');
      const avatarText = document.createTextNode(message.sender[0]);
      avatarElement.appendChild(avatarText);
      avatarElement.style.backgroundColor = this.getAvatarColor(message.sender);

      const usernameElement = document.createElement('span');
      const usernameText = document.createTextNode(message.sender);
      usernameElement.appendChild(usernameText);

      const textElement = document.createElement('p');
      const messageText = document.createTextNode(message.content);
      textElement.appendChild(messageText);

      messageElement.appendChild(avatarElement);
      messageElement.appendChild(usernameElement);
      messageElement.appendChild(textElement);
    }

    this.messageArea?.appendChild(messageElement);
    this.messageArea?.scrollTo(0, this.messageArea.scrollHeight);
  }

  getAvatarColor(messageSender: string): string {
    let hash = 0;
    for (let i = 0; i < messageSender.length; i++) {
      hash = 31 * hash + messageSender.charCodeAt(i);
    }
    const index = Math.abs(hash % this.colors.length);
    return this.colors[index];
  }
}