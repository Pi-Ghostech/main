export class ChatMessage {


     id!:number;
     content! : String ;
      sender!: String ;
       type! :MessageType;


}
enum MessageType {
    JOIN = 'JOIN',
    LEAVE = 'LEAVE',
    CHAT = 'CHAT'
  }