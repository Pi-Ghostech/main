import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {User} from "../Entity/User";
import {LoginRequest} from "../Entity/LoginRequest";
import {Role} from "../Entity/Role";

@Injectable({
  providedIn: 'root'
})
export class ServiceRolesService {

  constructor(private http:HttpClient) { }
  getRoles(){
    return this.http.get<Role[]>('http://localhost:8080/roles/get');
  }
  RoleADD(a:Role){
    return this.http.post('http://localhost:8080/add',a);

  }
  deleteRole(id:number){
    return this.http.delete('http://localhost:8080/delete/'+id) ;
  }
  updateRole(a:Role){
    return this.http.put('http://localhost:8080/roles/update',a);
  }
}
