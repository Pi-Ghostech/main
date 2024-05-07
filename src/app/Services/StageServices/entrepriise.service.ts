
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Entreprise} from "../../Entity/Entreprise";

@Injectable({
  providedIn: 'root'
})
export class EntrepriiseService {

  private baseURL = 'http://localhost:8080/entreprise/getall'//apiUrl
  private addURL = "http://localhost:8080/entreprise/save"



  constructor(private httpClient: HttpClient) { }
  getAllEntreprises(): Observable<Entreprise[]>{
    return this.httpClient.get<Entreprise[]>(`${this.baseURL}`)
  }

  createEntreprise(entreprise: Entreprise): Observable<object>{
    return this.httpClient.post(`${this.addURL}`, entreprise);
  }

  deleteEntreprise(entrepriseId: number): Observable<Object>{
    return this.httpClient.delete(`http://localhost:8080/entreprise/delete/${entrepriseId}`);
  }

  updateEntreprise(entrepriseId: number, entreprise: Entreprise): Observable<object> {
    return this.httpClient.put(`http://localhost:8080/entreprise/update/${entrepriseId}`, entreprise);
  }

  getEntrepriseById(entrepriseId: number): Observable<Entreprise>{
    return this.httpClient.get<Entreprise>(`http://localhost:8080/entreprise/getone/${entrepriseId}`);
  }



}
