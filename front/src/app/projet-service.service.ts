import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Projet } from './projet';
import { DetailProjet } from './detail-projet';

@Injectable({
  providedIn: 'root'
})
export class ProjetServiceService {
  private baseUrl = "http://localhost:8095/Projet/GetAllProjet";
  private baseURL="http://localhost:8095/Projet/addProjet";
  private getURL="http://localhost:8095/Projet/";
  private updateUrl = "http://localhost:8095/Projet/update";
  private deleteUrl = "http://localhost:8095/Projet";
  private detailUrl="http://localhost:8095/ProjetDetail/getProjetDetailById";
private Url='http://localhost:8095/Projet/addRating';
private adddetailURL="http://localhost:8095/ProjetDetail/addProjetDeatil";
  constructor(private httpClient: HttpClient) {
  }
  createProjet(projets: Projet): Observable<object>{
    return this.httpClient.post(`${this.baseURL}`, projets);
  }

  getProjetList(): Observable<Projet[]> {
    return this.httpClient.get<Projet[]>(`${this.baseUrl}`);
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
 
  // getProjetByTitre(titre: String): Observable<Projet> {
  //   return this.httpClient.get<Projet>(`${this.filterUrl}${titre}`);
  // }
  rechercherProjets(titre: string)  {
    
    return this.httpClient.get<Projet[]>('http://localhost:8095/Projet/afficher/'+titre);
  }
  addRatingToProjet(projetId: number, rating: number): Observable<Projet> {
    return this.httpClient.post<Projet>(`${this.Url}/${projetId}`, rating);
  }

 
  createDetail(DetailProjet: DetailProjet): Observable<object>{
    return this.httpClient.post(`${this.adddetailURL}`, DetailProjet);
  }

}
