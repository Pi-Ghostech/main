import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../../Entity/course';
import { Module } from '../../Entity/module';
import {User} from "../../Entity/User";

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private baseURL = "http://localhost:8080/course/getAll";
  private addURL = "http://localhost:8080/course/add";
  private modulesURL = "http://localhost:8080/module/getAll";

  constructor(private httpClient: HttpClient) { }

  getCoursesList(): Observable<Course[]>{
    return this.httpClient.get<Course[]>(`${this.baseURL}`)
  }

  createCourse(course: FormData): Observable<object>{
    return this.httpClient.post(`${this.addURL}`, course);
  }

  getCourseById(courseId: number): Observable<Course>{
    return this.httpClient.get<Course>(`http://localhost:8080/course/${courseId}`);
  }

  getModulesList(): Observable<Module[]> {
    return this.httpClient.get<Module[]>(this.modulesURL);
  }

  updateCourse(courseId: number, course: Course): Observable<object> {
    return this.httpClient.put(`http://localhost:8080/course/${courseId}`, course);
  }

  deleteCourse(courseId: number): Observable<Object>{
    return this.httpClient.delete(`http://localhost:8080/course/${courseId}`);
  }

  getFileContent(fileName: string): Observable<string> {
    const url = `http://localhost:8080/course/files/${fileName}`;
    return this.httpClient.get(url, { responseType: 'text' });
  }


  affectercourseauser(course : number, iduser: number) {
    const url = `http://localhost:8080/module/affectercourseauser/${iduser}/${course}`;
    return this.httpClient.put(url,{});
  }




}
