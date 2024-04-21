import {Role} from "./Role";

export class User {
  id!: number;
  name!: string;
  password!: string;
  email!: string;
  roles!: Role[];

}


