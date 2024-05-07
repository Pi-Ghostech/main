
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Stage} from "../../Entity/Stage";
import {Entreprise} from "../../Entity/Entreprise";


@Injectable({
  providedIn: 'root'
})
export class StageService {

  private baseURL = 'http://localhost:8080/stage/getall'//apiUrl
  private actifsURL = 'http://localhost:8080/stage/status/Available'//apiUrl
  private inactifsURL = 'http://localhost:8080/stage/status/Unavailable'//apiUrl
  private addURL = "http://localhost:8080/stage/save"
  private entreprisesURL = "http://localhost:8080/entreprise/getall";
  private entrepURL = 'http://localhost:8080/stage/stages'//apiUrl

  constructor(private httpClient: HttpClient) { }
  getAllStages(): Observable<Stage[]>{
    return this.httpClient.get<Stage[]>(`${this.baseURL}`)
  }

  findByEntreprise(entrepriseId: number): Observable<Stage[]> {
    return this.httpClient.get<Stage[]>(`${this.entrepURL}/${entrepriseId}`);
  }

  findByActif(): Observable<Stage[]>{
    return this.httpClient.get<Stage[]>(`${this.actifsURL}`)
  }

  findByInactif(): Observable<Stage[]>{
    return this.httpClient.get<Stage[]>(`${this.inactifsURL}`)
  }

  createStage(stage: Stage): Observable<object>{
    return this.httpClient.post(`${this.addURL}`, stage);
  }


  getEntreprisesList(): Observable<Entreprise[]> {
    return this.httpClient.get<Entreprise[]>(this.entreprisesURL);
  }

  deleteStage(stageId: number): Observable<Object>{
    return this.httpClient.delete(`http://localhost:8080/stage/delete/${stageId}`);
  }

  updateStage(stageId: number, stage: Stage): Observable<object> {
    return this.httpClient.put(`http://localhost:8080/stage/update/${stageId}`, stage);
  }


  unavailableStage(stageId: number): Observable<Stage>{
    return this.httpClient.get<Stage>(`http://localhost:8080/stage/unavailable/${stageId}`);
  }

  availableStage(stageId: number): Observable<Stage>{
    return this.httpClient.get<Stage>(`http://localhost:8080/stage/available/${stageId}`);
  }

  getStageById(stageId: number): Observable<Stage>{
    return this.httpClient.get<Stage>(`http://localhost:8080/stage/getone/${stageId}`);
  }
}
