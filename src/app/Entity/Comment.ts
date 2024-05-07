import { Error } from './Error'
import {User} from "../../app/Entity/User";
export class Comment {

    idComment!: number;
    idUser?: number;
    reponse!: string;
    likes!:number;
    dateCreationCom: Date= new Date();
    error: Error = new Error();
    commentowner:User=new User;
    isOwner: boolean = false;
    constructor() {
      this.dateCreationCom = new Date();

    }
  }
