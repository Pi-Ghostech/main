import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from '../course';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit{
  courses!: Course[];

  constructor(private courseService: CourseService,
    private router: Router){}

  ngOnInit(): void {
    this.getCourses();
  }

  private getCourses(){
    this.courseService.getCoursesList().subscribe(data => {
      this.courses = data;
    })
  }

  updateCourse(courseId: number){
    this.router.navigate(['update-course',courseId]);
  }

  deleteCourse(courseId: number){
    this.courseService.deleteCourse(courseId).subscribe( data => {
      console.log(data);
      this.getCourses();
    })
  }

}
