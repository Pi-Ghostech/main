export enum Category {
  Front_end = 'Front_end',
  Back_end = 'Back_end',
  DevOps = 'DevOps',
  Cloud_Computing = 'Cloud_Computing',
  Data_Science = 'Data_Science',
  Mobile_Development = 'Mobile_Development',
  Cybersecurity = 'Cybersecurity',
  AI_and_Machine_Learning = 'AI_and_Machine_Learning',
  Other = 'Other'
}
import {User} from "../../app/Entity/User";

export class Error {
  idErreur!: number;
  titre!: string;
  description!: string;
  dateCreationErr: Date = new Date();
  category: Category = Category.Other;
  errorowner:User=new User;
  constructor() {
    this.dateCreationErr = new Date();
    this.category = Category.Other;
  }
}
