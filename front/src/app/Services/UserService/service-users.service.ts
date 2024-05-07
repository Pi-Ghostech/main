import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {User} from "../../Entity/User";
import {LoginRequest} from "../../Entity/LoginRequest";
import {catchError, map, Observable, tap, throwError} from "rxjs";
import {ChangePasswordRequest} from "../../Entity/ChangePasswordRequest";


@Injectable({
  providedIn: 'root'
})
export class ServiceUsersService {
  images: string[] = [];
  constructor(private http: HttpClient) { }




  SignUp(a:User){
    return this.http.post('http://localhost:8080/signup',a);

  }

  Login(a:LoginRequest){

    return this.http.post('http://localhost:8080/login',a);

  }
  checkUserRole(): Observable<any> {
    const token = localStorage.getItem('token'); // Retrieve token from storage

    if (!token) {
      throw new Error('No token found in local storage.');
    }

    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<any>('http://localhost:8080/login/role', { headers }).pipe(
      tap(response => console.log('Response from getUserRole:', response)));
  }
  deleteUser(id:number){
    const token = localStorage.getItem('token'); // Retrieve token from storage

    if (!token) {
      throw new Error('No token found in local storage.');
    }

    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.delete('http://localhost:8080/user/delete/'+id,{ headers }) ;
  }
  updateUser(a:User){
    const token = localStorage.getItem('token'); // Retrieve token from storage

    if (!token) {
      throw new Error('No token found in local storage.');
    }

    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.put('http://localhost:8080/user/update',a, { headers });
  }
  sendEmail(email: string) {
    // Check if the email address is in a valid format
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
      console.error('Invalid email address');
      return; // Don't send the request if the email address is invalid
    }

    const requestBody = { email };
    return this.http.post('http://localhost:8080/email/password-reset-request', requestBody);
  }


  getUserById(id:number){

      const token = localStorage.getItem('token'); // Retrieve token from storage

    if (!token) {
      throw new Error('No token found in local storage.');
    }

    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<User>('http://localhost:8080/user/get/'+id, { headers })

  }
  ChangepassRequest(a:ChangePasswordRequest){
    const urlParams = new URLSearchParams(window.location.search); // Get URL parameters
    const token = urlParams.get('token'); // Extract the 'token' parameter

    if (!token) {
      throw new Error('No token found in URL.');
    }

    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.patch('http://localhost:8080/change/pass',a, { headers });
  }
getConnectedUser(){

  const token = localStorage.getItem('token'); // Retrieve token from storage

  if (!token) {
    throw new Error('No token found in local storage.');
  }

  const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
  return this.http.get('http://localhost:8080/user/getconnecteduser', { headers });
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
