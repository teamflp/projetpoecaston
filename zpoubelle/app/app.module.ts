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
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { UserprofileComponent } from './composants/userprofile/userprofile.component';

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
    UserprofileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
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
