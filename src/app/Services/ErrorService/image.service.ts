import { HttpClient,HttpResponse} from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private http:HttpClient) { }

  deleteImage(id: number) {
    return this.http.delete('http://localhost:8080/image/delete/' + id);
  }


}
