import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './composants/home/home.component';
import { InscriptionComponent } from './composants/inscription/inscription.component';
import { VisiteComponent } from './composants/visite/visite.component';
import { ConnexionComponent } from './composants/connexion/connexion.component';
import { ContactComponent } from './composants/contact/contact.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
   { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'visite', component: VisiteComponent, pathMatch: 'full'  },
  { path: 'inscription', component: InscriptionComponent, pathMatch: 'full'  },
  { path: 'connexion', component: ConnexionComponent, pathMatch: 'full'  },
  { path: 'contact', component: ContactComponent, pathMatch: 'full'  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
