/*import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';*/
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
import { SignUpComponent } from './sign-up/sign-up.component';
import { BackTemplateComponent } from './backoffice/back-template/back-template.component';
import { LoginComponent } from './login/login.component';
import { ClubListComponent } from './club-list/club-list.component';
import { EventListComponent } from './event-list/event-list.component';
import { CreateClubComponent } from './create-club/create-club.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { UpdateClubComponent } from './update-club/update-club.component';
import { UpdateEventComponent } from './update-event/update-event.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';



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
    SignUpComponent,
    BackTemplateComponent,
    LoginComponent,
    ClubListComponent,
    EventListComponent,
    CreateClubComponent,
    CreateEventComponent,
    UpdateClubComponent,
    UpdateEventComponent,
  ],
  imports: [
    /*BsDatepickerModule.forRoot(),
    BrowserAnimationsModule,*/
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,MatDatepickerModule, BrowserAnimationsModule,
    MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, MatSelectModule,
    MatOptionModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
