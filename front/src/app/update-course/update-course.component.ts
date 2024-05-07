import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from '../course';
import { CourseService } from '../course.service';
import { Module } from '../module';

@Component({
  selector: 'app-update-course',
  templateUrl: './update-course.component.html',
  styleUrls: ['./update-course.component.css']
})
export class UpdateCourseComponent implements OnInit{

  courseId!: number;
  course: Course = new Course();
  modules: Module[] = [];
  constructor(private courseService: CourseService,
    private route: ActivatedRoute,
    private router: Router){}

    ngOnInit(): void {
      this.courseId = this.route.snapshot.params["courseId"];
      
      this.courseService.getCourseById(this.courseId).subscribe(data => {
        this.course = data;
    
        this.courseService.getModulesList().subscribe(modules => {
          this.modules = modules;
          
          if (this.course.module) {
            const selectedModule = this.modules.find(module => module.moduleId === this.course.module.moduleId);
            if (selectedModule) {
              this.course.module = selectedModule;
            }
          }
        }, error => console.log(error));
      }, error => console.log(error));
    }

    onSubmit() {
      console.log('Submitting update for course:', this.course);
      this.courseService.updateCourse(this.courseId, this.course).subscribe(
        data => {
          console.log('Update successful:', data);
          this.goToCourseList();
        }, 
        error => console.error('Update failed:', error)
      );
    }

  goToCourseList() {
    this.router.navigate(['/courses']);
  }

}
