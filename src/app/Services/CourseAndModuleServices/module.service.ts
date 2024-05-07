import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Module } from '../../Entity/module';

@Injectable({
  providedIn: 'root'
})
export class ModuleService {

  private baseURL = "http://localhost:8080/module/getAll"
  private addURL = "http://localhost:8080/module/add"

  constructor(private httpClient: HttpClient) { }
  getModulesList(): Observable<Module[]>{
    const token = localStorage.getItem('token'); // Retrieve token from storage

    if (!token) {
      throw new Error('No token found in local storage.');
    }

    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.httpClient.get<Module[]>(`${this.baseURL}`,{headers})
  }

  createModule(module: Module): Observable<object>{
    const token = localStorage.getItem('token'); // Retrieve token from storage

    if (!token) {
      throw new Error('No token found in local storage.');
    }

    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.httpClient.post(`${this.addURL}`, module,{headers});
  }

  getModuleById(moduleId: number): Observable<Module>{
    const token = localStorage.getItem('token'); // Retrieve token from storage

    if (!token) {
      throw new Error('No token found in local storage.');
    }

    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.httpClient.get<Module>(`http://localhost:8080/module/${moduleId}`,{headers});
  }

  updateModule(moduleId: number, module: Module): Observable<object> {
    const token = localStorage.getItem('token'); // Retrieve token from storage

    if (!token) {
      throw new Error('No token found in local storage.');
    }

    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.httpClient.put(`http://localhost:8080/module/${moduleId}`, module,{headers});
  }

  deleteModule(moduleId: number): Observable<Object>{
    const token = localStorage.getItem('token'); // Retrieve token from storage

    if (!token) {
      throw new Error('No token found in local storage.');
    }

    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.httpClient.delete(`http://localhost:8080/module/${moduleId}`,{headers});
  }
}
