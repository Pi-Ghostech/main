import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseListComponent } from './course-list/course-list.component';
import { CreateCourseComponent } from './create-course/create-course.component';
import { CreateModuleComponent } from './create-module/create-module.component';
import { ModuleListComponent } from './module-list/module-list.component';
import { UpdateCourseComponent } from './update-course/update-course.component';
import { UpdateModuleComponent } from './update-module/update-module.component';
import {UsersComponent} from "./users/users.component";
import {RolesComponent} from "./roles/roles.component";
import {LoginComponent} from "./login/login.component";
import {SignUpComponent} from "./sign-up/sign-up.component";
import {BackTemplateComponent} from "./backoffice/back-template/back-template.component";

const routes: Routes = [
  {path: 'modules', component: ModuleListComponent},
  {path: 'courses', component: CourseListComponent},
  //{path: '', redirectTo: 'modules', pathMatch: 'full'},
  {path: 'create-module', component: CreateModuleComponent},
  {path: 'create-course', component: CreateCourseComponent},
  {path: 'update-module/:moduleId', component: UpdateModuleComponent},
  {path: 'update-course/:courseId', component: UpdateCourseComponent},
  {path: 'users', component: UsersComponent},
  {path: 'roles', component: RolesComponent},
  {path: 'login', component:LoginComponent},
  {path: 'signup',component:SignUpComponent},
  {path: 'backtemplate',component: BackTemplateComponent}
 /* {path: 'create-user', component: CreateModuleComponent},
  {path: 'create-role', component: CreateCourseComponent},
  {path: 'update-user/:moduleId', component: UpdateModuleComponent},
  {path: 'update-role/:updateId', component: UpdateCourseComponent},*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
