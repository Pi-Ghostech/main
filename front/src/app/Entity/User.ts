import {Role} from "./Role";
import {ImageModel} from "./ImageModel";

export class User {
  id!: number;
  name!: string;
  password!: string;
  email!: string;
  image!:ImageModel;
  roles!: Role[];
}


