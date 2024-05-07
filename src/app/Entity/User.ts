import {Role} from "./Role";
import {ImageModel} from "./ImageModel";
import {Course} from "./course";
import {Module} from "./module";
import {Projet} from "./projet";

export class User {
  id!: number;
  name!: string;
  password!: string;
  email!: string;
  image!:ImageModel;
  roles!: Role[];
courses!: Course[];
module!: Module[];
  projets!: Projet[];
}


