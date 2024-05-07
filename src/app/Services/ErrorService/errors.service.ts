  import { Injectable } from '@angular/core';
  import { HttpClient, HttpResponse } from "@angular/common/http";
  import { Observable, catchError } from 'rxjs';
  import { Image } from '../../Entity/Image';
  import { Category, Error } from '../../Entity/Error';
  import { Comment } from '../../Entity/Comment';
import { PageJPAReleventData } from 'src/app/Entity/page-jparelevent-data';
import { User } from 'src/app/Entity/User';



  @Injectable({
    providedIn: 'root'
  })
  export class ErrorsService {

    constructor(private http: HttpClient) { }

    getErrors() {
      return this.http.get<Error[]>('http://localhost:8080/error/get');
    }
    getErrorsByCategory(cat : Category) {
      return this.http.get<Error[]>('http://localhost:8080/error/get-category/' + cat);
    }

    createError(error: Error): Observable<any> {

      return this.http.post('http://localhost:8080/error/add',error);
    }


    updateError(errorId: number, error: Error): Observable<any> {
      return this.http.put(`http://localhost:8080/error/update/${errorId}`, error);
    }


    getErrorById(id: number) {
      return this.http.get<Error>('http://localhost:8080/error/get-id/' + id);
    }

    getUserById(id: number) {
      return this.http.get<User>('http://localhost:8080/error/get-user/' + id);
    }

    deleteError(id: number) {
      return this.http.delete('http://localhost:8080/error/delete/' + id);
    }

    getCommentsForError(id: number): Observable<Comment[]> {
      return this.http.get<Comment[]>('http://localhost:8080/error/get-comments/' + id);
    }

    getCommentsPaginatedForError(pageNumber:number,sort:string,id: number):Observable<HttpResponse<PageJPAReleventData<Comment>>>{

      let url:string=`http://localhost:8080/error/get-comments/paginated/${id}?page=${pageNumber}${sort? '&sort='+sort:'' }`
      console.log(url);
      return this.http.get<PageJPAReleventData<Comment>>(url,{ observe: 'response' })
      .pipe(
        catchError(error => {
          console.error('Error:', error);
          throw error;
        }))
   }

    getImagesForError(id: number): Observable<Image[]> {
      return this.http.get<Image[]>('http://localhost:8080/image/get/imagesByError/' + id);
    }


    affectErrorToUser(iderror:number, iduser: number) {
      const url = `http://localhost:8080/error/affecterError/${iduser}/${iderror}`;
      return this.http.put(url,{});
    }

  }

