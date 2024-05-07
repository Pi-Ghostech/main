import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Module } from '../../Entity/module';

@Injectable({
  providedIn: 'root'
})
export class ModuleService {

  private baseURL = "http://localhost:8081/module/getAll"
  private addURL = "http://localhost:8081/module/add"

  constructor(private httpClient: HttpClient) { }
  getModulesList(): Observable<Module[]>{
    return this.httpClient.get<Module[]>(`${this.baseURL}`)
  }

  createModule(module: Module): Observable<object>{
    return this.httpClient.post(`${this.addURL}`, module);
  }

  getModuleById(moduleId: number): Observable<Module>{
    return this.httpClient.get<Module>(`http://localhost:8081/module/${moduleId}`);
  }

  updateModule(moduleId: number, module: Module): Observable<object> {
    return this.httpClient.put(`http://localhost:8081/module/${moduleId}`, module);
  }

  deleteModule(moduleId: number): Observable<Object>{
    return this.httpClient.delete(`http://localhost:8081/module/${moduleId}`);
  }
}
