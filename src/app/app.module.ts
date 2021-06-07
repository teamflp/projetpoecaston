import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './composants/home/home.component';
import { HeaderComponent } from './composants/header/header.component';
import { VisiteComponent } from './composants/visite/visite.component';
import { InscriptionComponent } from './composants/inscription/inscription.component';
import { ConnexionComponent } from './composants/connexion/connexion.component';
import { ContactComponent } from './composants/contact/contact.component';
import { FooterComponent } from './composants/footer/footer.component';
import { ScrollToTopDirective } from './scroll-to-top.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    VisiteComponent,
    InscriptionComponent,
    ConnexionComponent,
    ContactComponent,
    FooterComponent,
    ScrollToTopDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    VisiteComponent,
    InscriptionComponent,
    ConnexionComponent,
    ContactComponent,
    FooterComponent
  ]
})
export class AppModule { }
