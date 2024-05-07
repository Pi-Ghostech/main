import { DetailProjet } from "./detail-projet";

export class Projet {
    projetID!: number;
    lienSiteWeb!: string;
    titre!: string;
    description!: string ;
    rating! : number;
    projetDetail: DetailProjet= new DetailProjet

    
}
