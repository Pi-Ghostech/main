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
import {ProjetListBacktComponent} from "./projet-list-back/projet-list.component";
import {CreateProjetBackComponent} from "./create-projet-back/create-projet.component";
import {UpdateProjetBackComponent} from "./update-projet-back/update-projet.component";
import {DetailBackComponent} from "./detail-back/detail.component";
import { CreateImageComponent } from './create-image/create-image.component';
import { UpdateErrorComponent } from './update-error/update-error.component';
import { ErrorDetailsFrontComponent } from './error-details-front/error-details-front.component';
import { CreateCommentComponent } from './create-comment/create-comment.component';
import { UpdateCommentComponent } from './update-comment/update-comment.component';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryChartComponent } from './category-chart/category-chart.component';
import {PaginationComponent} from "./pagination/pagination.component";
import {CreateErrorFrontComponent} from "./create-error-front/create-error-front.component";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatDialogModule } from '@angular/material/dialog';
import { NgChartsModule } from 'ng2-charts';
import {ErrorsComponent} from "./errors/errors.component";
import { ErrorsBackComponent } from './errors-back/errors-back.component';
import { ErrorsDetailsBackComponent } from './errors-details-back/errors-details-back.component';
import {StagesTemplateComponent} from "./stages-template/stages-template.component";
import {GoogleMapsModule} from "@angular/google-maps";
import {EntreprisesTemplateComponent} from "./entreprises-template/entreprises-template.component";
import {StagesListComponent} from "./stages-list/stages-list.component";
import {EntreprisesListComponent} from "./entreprises-list/entreprises-list.component";
import {CreateEntrepriseComponent} from "./create-entreprise/create-entreprise.component";
import {CreateStageComponent} from "./create-stage/create-stage.component";
import {UpdateEntrepriseComponent} from "./update-entreprise/update-entreprise.component";
import {UpdateStageComponent} from "./update-stage/update-stage.component";
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
    ProjetListBacktComponent,
    CreateProjetBackComponent,
   UpdateProjetBackComponent,
    DetailBackComponent,
    ErrorDetailsFrontComponent,
    CreateCommentComponent,
    CreateImageComponent,
    UpdateErrorComponent,
    UpdateCommentComponent,
    CategoriesComponent,
    CategoryChartComponent,
    PaginationComponent,
    CreateErrorFrontComponent,
    ErrorsComponent,
    ErrorsBackComponent,
    ErrorsDetailsBackComponent,
    StagesTemplateComponent,
    EntreprisesTemplateComponent,
    StagesListComponent,
    EntreprisesListComponent,
    CreateEntrepriseComponent,
    CreateStageComponent,
    UpdateEntrepriseComponent,
    UpdateStageComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxCaptchaModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    NgbModule,
    MatDialogModule,
    NgChartsModule,
    GoogleMapsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
