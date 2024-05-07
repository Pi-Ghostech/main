import { AfterViewInit, Component } from '@angular/core';
import { Event } from '../event';
import { FormControl, FormGroup } from '@angular/forms';
import {EventService  } from '../event.service';
import { Club } from '../club';
import { Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements AfterViewInit {
  event:Event= new Event ();
  clubs: Club[] = [];
  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });
  constructor(private eventservice:EventService,    private router : Router){}
  
  /*ngOnInit(): void {
    $('#eventDate').datepicker({
      format: 'yyyy-mm-dd', // Format de date souhaité
      autoclose: true
    });
    this.eventservice.getClubsList().subscribe(clubs => {
      // Assign the retrieved clubs to a component property
      this.clubs = clubs;
    });
  
    
  }*/

  ngAfterViewInit(): void {
    $('#eventDate').datepicker({
      format: 'yyyy-mm-dd', // Format de date souhaité
      autoclose: true
    });
    this.eventservice.getClubsList().subscribe(clubs => {
      // Assign the retrieved clubs to a component property
      this.clubs = clubs;
    });
  }

  onSubmit(){
    console.log(this.event);
    this.saveEvent();

  }
  getClubsList(): void {
    this.eventservice.getClubsList().subscribe(
      (data: Club[]) => {
        this.clubs = data;
        console.log("Liste des médecins :", this.clubs);
      },
      () => {
        alert("Quelque chose s'est mal passé.");
      }
    );


}
saveEvent(){
  this.eventservice.createEvent(this.event).subscribe(data =>{
    console.log(data);
    this.goToEventList();
  }, 
error => console.log (error));
}

goToEventList(){
  this.router.navigate(['/events']);

}
}
