import { Club } from './club';
export class Event {
    id!: number ;
    titre!: string
    date_event! : Date
    /*club_id_club! : number*/
    club: Club = new Club(); 




}
