import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Event } from './event';
import { Club } from './club';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private baseURL = "http://localhost:8085/pi/Event/getallEvent";
  constructor(private httpClient: HttpClient) { }
  getEventsList(): Observable<Event[]>{
    return this.httpClient.get<Event[]>(`${this.baseURL}`)
  }
  createEvent(event:Event): Observable<object>{
    return this.httpClient.post("http://localhost:8085/pi/Event/addevent",event);
  }
  getClubsList(): Observable<Club[]>{
    return this.httpClient.get<Club[]>("http://localhost:8085/pi/Club/getallClub");
  }
  deleteEvent(id: number): Observable<Object>{
    return this.httpClient.delete(`http://localhost:8085/pi/Event/delete/${id}`);
  }
  getEventById(id: number): Observable<Event>{
    return this.httpClient.get<Event>(`http://localhost:8085/pi/Event/getEvent/${id}`);
  }
  updateEvent(id: number, event: Event): Observable<object> {
    return this.httpClient.put(`http://localhost:8085/pi/Event/${id}`, event);
  }
  getRecentEvents(): Observable<Event[]> {
    return this.httpClient.get<Event[]>(`http://localhost:8085/pi/Event/recentEvents`);
  }

}
