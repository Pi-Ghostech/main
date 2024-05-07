import { DetailProjet } from "./detail-projet";
import {User} from "./User";

export class Projet {
    projetID!: number;
    lienSiteWeb!: string;
    titre!: string;
    description!: string ;
    rating! : number;
    projetDetail: DetailProjet= new DetailProjet
    user:User=new User


}
