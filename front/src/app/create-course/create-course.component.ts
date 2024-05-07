import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from '../Entity/course';
import { CourseService } from '../Services/CourseAndModuleServices/course.service';
import { Module } from '../Entity/module';
import { ModuleService } from '../Services/CourseAndModuleServices/module.service';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.css']
})
export class CreateCourseComponent implements OnInit {

  course: Course = new Course();
  modules: Module[] = [];

  constructor(private moduleService: ModuleService,
              private courseService: CourseService,
              private router: Router) {}

  ngOnInit(): void {
    this.loadModules();
  }

  loadModules() {
    this.moduleService.getModulesList().subscribe(
      (data: Module[]) => {
        this.modules = data;
        // Initialize course with the first module
        if (this.modules.length > 0) {
          this.course.module = this.modules[0];
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }

  saveCourse() {
    this.courseService.createCourse(this.course).subscribe(data => {
        console.log(data);
        this.goToCourseList();
      },
      error => console.log(error));
  }

  goToCourseList() {
    this.router.navigate(['/courses']);
  }

  onSubmit() {
    console.log(this.course);
    this.saveCourse();
  }
}
