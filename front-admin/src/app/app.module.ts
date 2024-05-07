import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Importez le module Stomp pour la communication WebSocket
import { RxStompService } from '@stomp/ng2-stompjs';

import { AppComponent } from './app.component';
import { CreateProjetComponent } from './create-projet/create-projet.component';
import { ProjetListComponent } from './projet-list/projet-list.component';
import { FooterComponent } from './components/footer/footer.component';
import { UpdateProjetComponent } from './update-projet/update-projet.component';
import { DetailComponent } from './detail/detail.component';
import { ChatProjetComponent } from './chat-projet/chat-projet.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateProjetComponent,
    ProjetListComponent,
    FooterComponent,
    UpdateProjetComponent,
    DetailComponent,
    ChatProjetComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [RxStompService], // Ajoutez le service RxStompService aux fournisseurs
  bootstrap: [AppComponent],
})
export class AppModule {}