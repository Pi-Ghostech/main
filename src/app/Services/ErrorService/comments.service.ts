import { Injectable } from '@angular/core';
import { Comment } from '../../Entity/Comment';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { User } from 'src/app/Entity/User';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private http: HttpClient) { }

  deleteComment(id: number) {
    return this.http.delete('http://localhost:8080/comment/delete/' + id);
  }

  addComment(comment: Comment, errorId: number): Observable<any> {
    return this.http.post('http://localhost:8080/comment/add/' +errorId, comment );
  }

  updateComment(commentId: number, comment: Comment, errorId: number): Observable<any> {
    return this.http.put(`http://localhost:8080/comment/update/${commentId}/`+errorId, comment);
  }
  updateLikes(commentId: number): Observable<object> {
    return this.http.put(`http://localhost:8080/comment/update-likes/`+commentId,null);
  }

  getCommentById(id: number) {
    return this.http.get<Comment>('http://localhost:8080/comment/get-id/' + id);
  }
  affectCommentToUser(idcomment:number, iduser: number) {
    const url = `http://localhost:8080/comment/affecterComment/${iduser}/${idcomment}`;
    return this.http.put(url,{});
  }
  getUserById(id: number) {
    return this.http.get<User>('http://localhost:8080/comment/get-user/' + id);
  }

}
