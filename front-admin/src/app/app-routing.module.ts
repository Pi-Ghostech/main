import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjetListComponent } from './projet-list/projet-list.component';
import { CreateProjetComponent } from './create-projet/create-projet.component';
import { updateLanguageServiceSourceFile } from 'typescript';
import { UpdateProjetComponent } from './update-projet/update-projet.component';
import { DetailComponent } from './detail/detail.component';
import { ChatProjetComponent } from './chat-projet/chat-projet.component';

const routes: Routes = [
 { path:'projet',component:ProjetListComponent},
 {path:'create-Projet',component:CreateProjetComponent},
 {path:"",redirectTo:'projets',pathMatch:'full'},
 { path:'update-projet/:id',component:UpdateProjetComponent},
 { path:'detail/:id',component:DetailComponent},
 {path:'chat',component:ChatProjetComponent}





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
