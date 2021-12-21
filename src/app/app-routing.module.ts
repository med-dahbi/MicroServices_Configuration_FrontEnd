import { GestionProfTestComponent } from './gestion-prof-test/gestion-prof-test.component';
import { GestionProfProdComponent } from './gestion-prof-prod/gestion-prof-prod.component';
import { GestionProfComponent } from './gestion-prof/gestion-prof.component';
import { GestionCoursProdComponent } from './gestion-cours-prod/gestion-cours-prod.component';
import { MicroservicesComponent } from './microservices/microservices.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionCoursComponent } from './gestion-cours/gestion-cours.component';
import { SecurityComponent } from './security/security.component';
import { AppComponent } from './app.component';
import { GestionProfDevComponent } from './gestion-prof-dev/gestion-prof-dev.component';
import { AuthGuard } from './guards/auth.guard';
import { GestionCoursDevComponent } from './gestion-cours-dev/gestion-cours-dev.component';
import { GestionCoursTestComponent } from './gestion-cours-test/gestion-cours-test.component';

const routes: Routes = [    
  { path: '',    
    redirectTo: '/home',    
    pathMatch: 'full'    , 
  },    
  { path: 'security', component: SecurityComponent },    
  { canActivate :[AuthGuard],path: 'GestionCours', component: GestionCoursComponent },
  {canActivate :[AuthGuard], path: 'GestionCoursProd', component: GestionCoursProdComponent },
  { canActivate :[AuthGuard],path: 'GestionCoursDev', component: GestionCoursDevComponent },
  {canActivate :[AuthGuard], path: 'GestionCoursTest', component: GestionCoursTestComponent },
  { canActivate :[AuthGuard],path: 'GestionProf', component: GestionProfComponent },
  { canActivate :[AuthGuard],path: 'GestionProfProd', component: GestionProfProdComponent },
  { canActivate :[AuthGuard],path: 'GestionProfDev', component: GestionProfDevComponent },
  { canActivate :[AuthGuard],path: 'GestionProfTest', component: GestionProfTestComponent },


  { path: 'Microservices', component: MicroservicesComponent },


  
];    

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
