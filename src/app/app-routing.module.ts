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
import {ProjetListBacktComponent} from "./projet-list-back/projet-list.component";
import {CreateProjetBackComponent} from "./create-projet-back/create-projet.component";
import {UpdateProjetBackComponent} from "./update-projet-back/update-projet.component";
import {DetailBackComponent} from "./detail-back/detail.component";
import { ErrorsComponent } from './errors/errors.component';
import { CreateErrorFrontComponent } from './create-error-front/create-error-front.component';
import { ErrorDetailsFrontComponent } from './error-details-front/error-details-front.component';
import { CreateCommentComponent } from './create-comment/create-comment.component';
import { CreateImageComponent } from './create-image/create-image.component';
import { UpdateErrorComponent } from './update-error/update-error.component';
import { UpdateCommentComponent } from './update-comment/update-comment.component';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryChartComponent } from './category-chart/category-chart.component';
import { ErrorsBackComponent } from './errors-back/errors-back.component';
import { ErrorsDetailsBackComponent } from './errors-details-back/errors-details-back.component';
import {StagesTemplateComponent} from "./stages-template/stages-template.component";
import {EntreprisesTemplateComponent} from "./entreprises-template/entreprises-template.component";
import {EntreprisesListComponent} from "./entreprises-list/entreprises-list.component";
import {CreateEntrepriseComponent} from "./create-entreprise/create-entreprise.component";
import {UpdateEntrepriseComponent} from "./update-entreprise/update-entreprise.component";
import {StagesListComponent} from "./stages-list/stages-list.component";
import {CreateStageComponent} from "./create-stage/create-stage.component";
import {UpdateStageComponent} from "./update-stage/update-stage.component";
const routes: Routes = [
  {
    path: '',
    redirectTo: 'frontClient',
    pathMatch: 'full'
  },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignUpComponent },
  //projet
  { path:'projetback',component:ProjetListBacktComponent},
  {path:'create-Projet',component:CreateProjetBackComponent},
  { path:'update-projet-back/:id',component:UpdateProjetBackComponent},
  { path:'detail-back/:id',component:DetailBackComponent},
  //
  { path: 'changepass', component: ChangePassRequestComponent },
  { path: 'coursesFront', component: CoursesFrontComponent },
  { path: 'home', component: HomeComponent },
  {path: 'projet', component: ProjetListComponent},
  {path:'create-Projet',component:CreateProjetComponent},
  {path:'update-projet/:id',component:UpdateProjetComponent},
  {path:'chat/:userId',component:ChatComponent},
  {path:'detail-projet/id',component:CreateDetailComponent},
  { path:'detail/:id',component:DetailComponent},
  {path: 'errors/:category',component: ErrorsComponent},
  {path: 'categories',component: CategoriesComponent},
  {path: 'chart',component: CategoryChartComponent},
  {path: 'create-error',component: CreateErrorFrontComponent},
  {path: 'error-details/:erreurId',component: ErrorDetailsFrontComponent},
  {path: 'create-comment/:erreurId',component: CreateCommentComponent},
  {path: 'image/:erreurId',component: CreateImageComponent},
  {path: 'update-error/:erreurId',component: UpdateErrorComponent},
  {path: 'update-comment/:commentId/:erreurId',component: UpdateCommentComponent},
  //ines

  {path: 'stages', component: StagesTemplateComponent},
  {path: 'entreprise/:entrepriseId', component: EntreprisesTemplateComponent},
  {path: 'entreprises/:id', component: EntreprisesTemplateComponent},

  //
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
      {path: 'errors/:category',component: ErrorsComponent},
      {path: 'categories',component: CategoriesComponent},
      {path: 'chart',component: CategoryChartComponent},
      {path: 'create-error',component: CreateErrorFrontComponent},
      {path: 'error-details/:erreurId',component: ErrorDetailsFrontComponent},
      {path: 'create-comment/:erreurId',component: CreateCommentComponent},
      {path: 'image/:erreurId',component: CreateImageComponent},
      {path: 'update-error/:erreurId',component: UpdateErrorComponent},
      {path: 'update-comment/:commentId/:erreurId',component: UpdateCommentComponent},
      //ines
      {path: 'stages', component: StagesTemplateComponent},
      {path: 'entreprise/:entrepriseId', component: EntreprisesTemplateComponent},
      {path: 'entreprises/:id', component: EntreprisesTemplateComponent},
      //

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
      { path:'projetback',component:ProjetListBacktComponent},
      {path:'create-Projet',component:CreateProjetBackComponent},
      { path:'update-projet-back/:id',component:UpdateProjetBackComponent},
      { path:'detail-back/:id',component:DetailBackComponent},
      {path: 'errors-back',component: ErrorsBackComponent},
      {path: 'error-details-back/:erreurId',component: ErrorsDetailsBackComponent},
      //ines
      {path: 'entreprise', component: EntreprisesListComponent},
      {path: 'create-entreprise', component: CreateEntrepriseComponent},
      {path: 'update-entreprise/:entrepriseId', component: UpdateEntrepriseComponent},

      {path: 'stage', component: StagesListComponent},
      {path: 'create-stage', component: CreateStageComponent},
      {path: 'update-stage/:stageId', component: UpdateStageComponent},
      //
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
