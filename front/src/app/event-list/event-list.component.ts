import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { Event } from '../event';
import { Router } from '@angular/router';
import {MatDatepickerModule} from '@angular/material/datepicker';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css'],
  
})
export class EventListComponent implements OnInit {
  events!: Event[] ; 
  constructor(private eventservice:EventService,private router: Router){}
  ngOnInit(): void {
    this.getEvents();
  }
  private getEvents(){
    this.eventservice.getEventsList().subscribe(data => {
      this.events = data ;
    })
  }
  deleteEvent(id: number){
    this.eventservice.deleteEvent(id).subscribe( data => {
      console.log(data);
      this.getEvents();
    })
  }
  updateEvent(id: number){
    this.router.navigate(['/update-event',id]);
  }
  getRecentEvents() {
    this.eventservice.getRecentEvents().subscribe((data) => {
      this.events = data;
    });
  }

}
