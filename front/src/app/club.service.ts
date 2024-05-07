import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Club } from './club';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClubService {

  private baseURL = "http://localhost:8085/pi/Club/getallClub";

  constructor(private httpClient: HttpClient) { }
  getClubsList(): Observable<Club[]>{
    return this.httpClient.get<Club[]>(`${this.baseURL}`);
  }

  createClub(club:Club): Observable<object>{
    return this.httpClient.post("http://localhost:8085/pi/Club/addclub",club);
  }

  deleteClub(id: number): Observable<Object>{
    return this.httpClient.delete(`http://localhost:8085/pi/Club/delete/${id}`);
  }
  getClubById(id: number): Observable<Club>{
    return this.httpClient.get<Club>(`http://localhost:8085/pi/Club/getClub/${id}`);
  }
  updateClub(id: number, club: Club): Observable<object> {
    return this.httpClient.put(`http://localhost:8085/pi/Club/${id}`, club);
  }

  getAllClubsSortedByNom(): Observable<Club[]> {
    return this.httpClient.get<Club[]>(`http://localhost:8085/pi/Club/getClubsSortedByNom`);
  }
  getClubsByName(nom: string): Observable<Club[]> {
    return this.httpClient.get<Club[]>(`http://localhost:8085/pi/Club/getClubByNom/${nom}`);
  }
}
