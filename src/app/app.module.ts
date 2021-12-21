import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SecurityComponent } from './security/security.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GestionCoursComponent } from './gestion-cours/gestion-cours.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MicroservicesComponent } from './microservices/microservices.component';
import { GestionCoursProdComponent } from './gestion-cours-prod/gestion-cours-prod.component';
import { GestionCoursTestComponent } from './gestion-cours-test/gestion-cours-test.component';
import { GestionCoursDevComponent } from './gestion-cours-dev/gestion-cours-dev.component';
import { GestionProfComponent } from './gestion-prof/gestion-prof.component';
import { GestionProfProdComponent } from './gestion-prof-prod/gestion-prof-prod.component';
import { GestionProfDevComponent } from './gestion-prof-dev/gestion-prof-dev.component';
import { GestionProfTestComponent } from './gestion-prof-test/gestion-prof-test.component';


@NgModule({
  declarations: [
    AppComponent,
    SecurityComponent,
    GestionCoursComponent,
    NavbarComponent,
    MicroservicesComponent,
    GestionCoursProdComponent,
    GestionCoursTestComponent,
    GestionCoursDevComponent,
    GestionProfComponent,
    GestionProfProdComponent,
    GestionProfDevComponent,
    GestionProfTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
