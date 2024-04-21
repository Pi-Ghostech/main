import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from './course';
import { Module } from './module';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private baseURL = "http://localhost:8081/course/getAll";
  private addURL = "http://localhost:8081/course/add";
  private modulesURL = "http://localhost:8081/module/getAll";

  constructor(private httpClient: HttpClient) { }

  getCoursesList(): Observable<Course[]>{
    return this.httpClient.get<Course[]>(`${this.baseURL}`)
  }

  createCourse(course: Course): Observable<object>{
    return this.httpClient.post(`${this.addURL}`, course);
  }

  getCourseById(courseId: number): Observable<Course>{
    return this.httpClient.get<Course>(`http://localhost:8081/course/${courseId}`);
  }

  getModulesList(): Observable<Module[]> {
    return this.httpClient.get<Module[]>(this.modulesURL);
  }

  updateCourse(courseId: number, course: Course): Observable<object> {
    return this.httpClient.put(`http://localhost:8081/course/${courseId}`, course);
  }

  deleteCourse(courseId: number): Observable<Object>{
    return this.httpClient.delete(`http://localhost:8081/course/${courseId}`);
  }

}
