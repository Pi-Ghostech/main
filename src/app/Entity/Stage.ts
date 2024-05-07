 
import { Entreprise } from "./Entreprise";

export class Stage {
  id!: number;
  titre!: string;
  description!: string;
  duree!: string;
  payant!: string;
  status!: string;
  amount!: number;
  date!: Date; 
  location!: string;
  entreprise: Entreprise = new Entreprise();
 
}


