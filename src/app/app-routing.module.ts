import {computed, NgModule} from '@angular/core';
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
import {SidebarComponent} from "./backoffice/sidebar/sidebar.component";
import {UpdateUsersComponent} from "./update-users/update-users.component";
import {ChangePassRequestComponent} from "./change-pass-request/change-pass-request.component";
import {FrontTemplateComponent} from "./FrontClient/front-template/front-template.component";
import {ProfileComponent} from "./profile/profile.component";
import {MainComponentComponent} from "./main-component/main-component.component";
import {CoursesFrontComponent} from "./courses-front/courses-front.component";
import {HomeComponent} from "./FrontClient/home/home.component";
import {ProfileFrontComponent} from "./profile-front/profile-front.component";
import {ProfileSettingComponent} from "./profile-setting/profile-setting.component";
import {CreateDetailComponent} from "./create-detail/create-detail.component";
import {ChatComponent} from "./chat/chat.component";
import {UpdateProjetComponent} from "./update-projet/update-projet.component";
import {CreateProjetComponent} from "./create-projet/create-projet.component";
import {ProjetListComponent} from "./projet-list/projet-list.component";
import {DetailComponent} from "./detail/detail.component";
const routes: Routes = [
  {
    path: '',
    redirectTo: 'frontClient',
    pathMatch: 'full'
  },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'changepass', component: ChangePassRequestComponent },
  { path: 'coursesFront', component: CoursesFrontComponent },
  { path: 'home', component: HomeComponent },
  {path: 'projet', component: ProjetListComponent},
  {path:'create-Projet',component:CreateProjetComponent},
  {path:'update-projet/:id',component:UpdateProjetComponent},
  {path:'chat/:userId',component:ChatComponent},
  {path:'detail-projet/id',component:CreateDetailComponent},
  { path:'detail/:id',component:DetailComponent},
  {
    path: 'frontClient',
    component: FrontTemplateComponent,
    children: [
      { path: 'login', component: LoginComponent }, // Login within FrontClient layout
      { path: 'signup', component: SignUpComponent }, // Signup within FrontClient layout
      { path: 'changepass', component: ChangePassRequestComponent },
      { path: 'coursesFront', component: CoursesFrontComponent }, // Changeass within FrontClient layout
      { path: 'home', component: HomeComponent },
      { path: 'profileFront', component: ProfileFrontComponent },
      {path: 'profileSetting',component: ProfileSettingComponent},
      {path: 'projet', component: ProjetListComponent},
      {path:'create-Projet',component:CreateProjetComponent},
      {path:'update-projet/:id',component:UpdateProjetComponent},
      {path:'chat/:userId',component:ChatComponent},
      {path:'detail-projet/id',component:CreateDetailComponent},
      { path:'detail/:id',component:DetailComponent},
      { path: '', redirectTo: 'home', pathMatch: 'full' } // Default child route

    ]
  },
  {
    path: 'backtemplate',
    component: BackTemplateComponent,
    children: [
      { path: 'users', component: UsersComponent },
      { path: 'updateuser', component: UpdateUsersComponent },
      { path: 'roles', component: RolesComponent },
      { path: 'modules', component: ModuleListComponent },
      { path: 'courses', component: CourseListComponent },
      { path: 'front', component: FrontTemplateComponent },
      { path: 'create-module', component: CreateModuleComponent },
      { path: 'create-course', component: CreateCourseComponent },
      { path: 'update-module/:moduleId', component: UpdateModuleComponent },
      { path: 'update-course/:courseId', component: UpdateCourseComponent },
      { path: 'profile', component: ProfileComponent },
      { path: '', redirectTo: '', pathMatch: 'full' } // Default child route
    ]
  }
];


/*
const routes: Routes = [
  { path: '', component:MainComponentComponent, pathMatch: 'full' },
  {path: 'create-module', component: CreateModuleComponent},
  {path: 'create-course', component: CreateCourseComponent},
  {path: 'update-module/:moduleId', component: UpdateModuleComponent},
  {path: 'update-course/:courseId', component: UpdateCourseComponent},
  {path:"login",component:LoginComponent },
  {path: 'signup',component:SignUpComponent},
  {path:'changepass',component:ChangePassRequestComponent},
  {path:'frontClient',component:FrontTemplateComponent,
    children: [
      {
        path:"login",component:LoginComponent , // Use DashboardLayoutComponent as the parent layout
        children: [
          {path:'changepass',component:ChangePassRequestComponent},
          {path: 'signup',component:SignUpComponent},
        ]
      }

    ]
  },
  {
    path:"login",component:LoginComponent , // Use DashboardLayoutComponent as the parent layout
    children: [
      {path:'changepass',component:ChangePassRequestComponent},
      {path: 'signup',component:SignUpComponent},
    ]
  },
  {
    path:"backtemplate",component:BackTemplateComponent , // Use DashboardLayoutComponent as the parent layout
    children: [
      { path: 'users', component: UsersComponent },
      { path: 'updateuser', component: UpdateUsersComponent },
      { path: 'roles', component: RolesComponent },
      {path: 'modules', component: ModuleListComponent},
      {path: 'courses', component: CourseListComponent},
      {path: 'front', component: FrontTemplateComponent},
      {path: 'profile', component: ProfileComponent},


      { path: '', redirectTo: '', pathMatch: 'full' } // Default child route
    ]
  }

];*/

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
