import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModuleListComponent } from './module-list/module-list.component';
import { CreateModuleComponent } from './create-module/create-module.component';
import { FormsModule } from '@angular/forms';
import { UpdateModuleComponent } from './update-module/update-module.component';
import { CourseListComponent } from './course-list/course-list.component';
import { CreateCourseComponent } from './create-course/create-course.component';
import { UpdateCourseComponent } from './update-course/update-course.component';
import { SidebarComponent } from './backoffice/sidebar/sidebar.component';
import { HomeComponent } from './backoffice/home/home.component';
import { UsersComponent } from './users/users.component';
import { RolesComponent } from './roles/roles.component';



@NgModule({
  declarations: [
    AppComponent,
    ModuleListComponent,
    CreateModuleComponent,
    UpdateModuleComponent,
    CourseListComponent,
    CreateCourseComponent,
    UpdateCourseComponent,
    SidebarComponent,
    HomeComponent,
    UsersComponent,
    RolesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
