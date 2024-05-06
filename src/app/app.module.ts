import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModuleListComponent } from './module-list/module-list.component';
import { CreateModuleComponent } from './create-module/create-module.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
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
import { UpdateUsersComponent } from './update-users/update-users.component';
import { ChangePassRequestComponent } from './change-pass-request/change-pass-request.component';
import { FrontTemplateComponent } from './FrontClient/front-template/front-template.component';
import { ProfileComponent } from './profile/profile.component';
import { MainComponentComponent } from './main-component/main-component.component';
import { NgxCaptchaModule } from "ngx-captcha";
import {NgxPaginationModule} from "ngx-pagination";
import {AddCoursePopupComponent} from "./add-course-popup/add-course-popup.component";
import { CoursesFrontComponent } from './courses-front/courses-front.component';
import { HeaderComponent } from './frontclient/header/header.component';
import { FooterComponent } from './frontclient/footer/footer.component';
import { TrashcomponentComponent } from './frontclient/trashcomponent/trashcomponent.component';
import { ProfileFrontComponent } from './profile-front/profile-front.component';
import { ProfileSettingComponent } from './profile-setting/profile-setting.component';
import {UpdateProjetComponent} from "./update-projet/update-projet.component";
import {CreateProjetComponent} from "./create-projet/create-projet.component";
import {ProjetListComponent} from "./projet-list/projet-list.component";
import {ChatComponent} from "./chat/chat.component";
import {RatingStarsComponent} from "./rating-stars/rating-stars.component";
import {CreateDetailComponent} from "./create-detail/create-detail.component";
import {DetailComponent} from "./detail/detail.component";

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
    UpdateUsersComponent,
    ChangePassRequestComponent,
    FrontTemplateComponent,
    ProfileComponent,
    MainComponentComponent,
    AddCoursePopupComponent,
    CoursesFrontComponent,
    HeaderComponent,
    FooterComponent,
    TrashcomponentComponent,
    ProfileFrontComponent,
    ProfileSettingComponent,
    ProjetListComponent,
    CreateProjetComponent,
    UpdateProjetComponent,
    RatingStarsComponent,
    ChatComponent,
    CreateDetailComponent,
    DetailComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxCaptchaModule,
    NgxPaginationModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
