import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseListComponent } from './course-list/course-list.component';
import { CreateCourseComponent } from './create-course/create-course.component';
import { CreateModuleComponent } from './create-module/create-module.component';
import { ModuleListComponent } from './module-list/module-list.component';
import { UpdateCourseComponent } from './update-course/update-course.component';
import { UpdateModuleComponent } from './update-module/update-module.component';
import {LoginComponent} from "./login/login.component";
import {SignUpComponent} from "./sign-up/sign-up.component";
import { ClubListComponent } from './club-list/club-list.component';
import { CreateClubComponent } from './create-club/create-club.component';
import { EventListComponent } from './event-list/event-list.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { UpdateClubComponent } from './update-club/update-club.component';
import { UpdateEventComponent } from './update-event/update-event.component';


const routes: Routes = [

  //{path: '', redirectTo: 'modules', pathMatch: 'full'},
  {path: 'create-module', component: CreateModuleComponent},
  {path: 'create-course', component: CreateCourseComponent},
  {path: 'update-module/:moduleId', component: UpdateModuleComponent},
  {path: 'update-course/:courseId', component: UpdateCourseComponent},
  {path: 'login', component:LoginComponent},
  {path: 'signup',component:SignUpComponent},
  {path: 'modules', component: ModuleListComponent},
  {path: 'courses', component: CourseListComponent},
  {path: 'clubs', component: ClubListComponent},
  {path: 'create-club', component:CreateClubComponent },
  {path: 'events', component: EventListComponent},
  {path: 'create-event', component:CreateEventComponent },
  {path: 'update-club/:id', component:UpdateClubComponent },
  {path: 'update-event/:id', component:UpdateEventComponent }


  /*{ path: '', redirectTo: 'clubs', pathMatch: 'full' }*/
/*  {
    path:"backtemplate",component:BackTemplateComponent , // Use DashboardLayoutComponent as the parent layout
    children: [
      { path: 'users', component: UsersComponent },
      { path: 'roles', component: RolesComponent },
      {path: 'modules', component: ModuleListComponent},
      {path: 'courses', component: CourseListComponent},

      { path: '', redirectTo: 'users', pathMatch: 'full' } // Default child route
    ]
  }*/
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
