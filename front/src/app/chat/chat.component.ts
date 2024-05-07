import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { ChatService } from '../chat.service';
import { ActivatedRoute } from '@angular/router';
import { ChatMessage } from '../models/chat-message';
import { Stomp } from '@stomp/stompjs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit{

  messageInput: string = '';
  userId: string="";
  messageList: any[] = [];




  constructor(private chatService: ChatService,
    private route: ActivatedRoute


  ){}



  ngOnInit(): void {this.userId = this.route.snapshot.params["userId"];
  this.chatService.joinRoom("ABC");
  this.lisenerMessage();
  }

  sendMessage() {
    // Vérifiez si la connexion STOMP est active
  if (this.chatService.isStompConnected()) {
    const chatMessage = {
      message: this.messageInput,
      user: this.userId
    } as ChatMessage;
    this.chatService.sendMessage("ABC", chatMessage);
    this.messageInput = '';
  } else {
    console.error("STOMP connection is not active.");
    // Traitez le cas où la connexion STOMP n'est pas active
  }
  }
  lisenerMessage() {
    this.chatService.getMessageSubject().subscribe((messages: any) => {
      this.messageList = messages.map((item: any)=> ({
        ...item,
        message_side: item.user === this.userId ? 'sender': 'receiver'
      }))
    });
  }
}
