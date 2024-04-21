import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {User} from "../Entity/User";
import {LoginRequest} from "../Entity/LoginRequest";
import {catchError, Observable, throwError} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class ServiceUsersService {

  constructor(private http: HttpClient) { }

  SignUp(a:User){
    return this.http.post('http://localhost:8080/signup',a);

  }

  Login(a:LoginRequest){

    return this.http.post('http://localhost:8080/login',a);

  }
  checkUserRole(): Observable<any> {
    // Assuming the backend endpoint to check user role is '/user/role'
    // Adjust the endpoint according to your backend implementation
    return this.http.get<any>('/user/role');
  }
  deleteUser(id:number){
    return this.http.delete('http://localhost:8080/user/delete/'+id) ;
  }
  updateUser(a:User){
    return this.http.put('http://localhost:8080/user/update',a);
  }
  ChangepassRequest(a:User){
    return this.http.patch('http://localhost:8080/change/pass',a);
  }
  getUsers(): Observable<User[]> {
    const token = localStorage.getItem('token'); // Retrieve token from storage

    if (!token) {
      throw new Error('No token found in local storage.');
    }

    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<User[]>('http://localhost:8080/user/get', { headers })
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError('Something bad happened; please try again later.');
  }
}
