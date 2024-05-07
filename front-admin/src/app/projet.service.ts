import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Projet } from './projet';
import { DetailProjet } from './detail-projet';

@Injectable({
  providedIn: 'root'
})
export class ProjetService {
  private baseUrl = "http://localhost:8095/Projet/GetAllProjet";
  private baseURL="http://localhost:8095/Projet/addProjet";
  private getURL="http://localhost:8095/Projet/";
  private updateUrl = "http://localhost:8095/Projet/update";
  private deleteUrl = "http://localhost:8095/Projet";
private detailUrl="http://localhost:8095/ProjetDetail/getProjetDetailById";
  constructor(private httpClient: HttpClient) {}

  getProjetList(): Observable<Projet[]> {
    return this.httpClient.get<Projet[]>(`${this.baseUrl}`);
  }
  
  createProjet(projets: Projet): Observable<object>{
    return this.httpClient.post(`${this.baseURL}`, projets);
  }


getProjetById(id: number): Observable<Projet> {
  return this.httpClient.get<Projet>(`${this.getURL}${id}`);
}


updateProjet(id: number, projet: Projet): Observable<object> {
  return this.httpClient.put(`${this.updateUrl}/${id}`, projet);
}

deleteProjet(id: number): Observable<object> {
  const url = `${this.deleteUrl}/${id}`;
  return this.httpClient.delete(url);
}


getdetailList(id: number): Observable<DetailProjet> {
  return this.httpClient.get<DetailProjet>(`${this.detailUrl}/${id}`);
}


}





 
  

  




