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
import { ProjetListComponent } from './projet-list/projet-list.component';
import { CreateProjetComponent } from './create-projet/create-projet.component';
import { UpdateProjetComponent } from './update-projet/update-projet.component';
import { DetailComponent } from './detail/detail.component';
import { ChatComponent } from './chat/chat.component';
import { RechercheComponent } from './recherche/recherche.component';
import { AjouterDetailComponent } from './ajouter-detail/ajouter-detail.component';
import { CreateDetailComponent } from './create-detail/create-detail.component';

const routes: Routes = [



  {path: 'projet', component: ProjetListComponent},
  {path:'create-Projet',component:CreateProjetComponent},
{path:'update-projet/:id',component:UpdateProjetComponent},
{path:'chat/:userId',component:ChatComponent},
{path:'detail-projet/id',component:CreateDetailComponent},

  //{path: '', redirectTo: 'modules', pathMatch: 'full'},
  {path: 'create-module', component: CreateModuleComponent},
  {path: 'create-course', component: CreateCourseComponent},
  {path: 'update-module/:moduleId', component: UpdateModuleComponent},
  {path: 'update-course/:courseId', component: UpdateCourseComponent},
  { path:'detail/:id',component:DetailComponent},
  {path:'recherche/:titre',component:RechercheComponent},
  {path:'ajouter-detail/:id',component:AjouterDetailComponent},






  {path:'frontClient',component:FrontTemplateComponent,
  /*  children: [
      {
        path:"login",component:LoginComponent , // Use DashboardLayoutComponent as the parent layout
        children: [
          {path:'changepass',component:ChangePassRequestComponent},
          {path: 'signup',component:SignUpComponent},
        ]
      }

    ]*/
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


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
