import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Event } from '../event';
import { EventService } from '../event.service';
import { Club } from '../club';
import { ClubService } from '../club.service';

@Component({
  selector: 'app-update-event',
  templateUrl: './update-event.component.html',
  styleUrls: ['./update-event.component.css']
})
export class UpdateEventComponent implements OnInit {
  event: Event = new Event();
  clubs: Club[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private eventService: EventService,
    private clubService: ClubService
  ) { }

  ngOnInit() {
    this.getEventDetails();
    this.getClubs();
  }

  getEventDetails() {
    const id = this.route.snapshot.params['id'];

    this.eventService.getEventById(id).subscribe((data: Event) => {
      this.event = data;
    });
  }

  getClubs() {
    this.clubService.getClubsList().subscribe((data: Club[]) => {
      this.clubs = data;
    });
  }

  onSubmit() {
    console.log('Submitting update for course:', this.event);
    this.eventService.updateEvent(this.event.id, this.event).subscribe(
      data => {
        console.log('Update successful:', data);
        this.goToCourseList();
      }, 
      error => console.error('Update failed:', error)
    );
  }

goToCourseList() {
  this.router.navigate(['/events']);
}
}