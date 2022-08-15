import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SinglevideoComponent } from './singlevideo/singlevideo.component';
import { VideocrudComponent } from './videocrud/videocrud.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { GestionComponent } from './gestion/gestion.component';
import { CategorycrudComponent } from './categorycrud/categorycrud.component';
import { ActorcrudComponent } from './actorcrud/actorcrud.component';

const routes: Routes = [
  { path:'home', component: HomeComponent },
  { path:'singlevideo/:id', component : SinglevideoComponent},
  { path:'videocrud', component: VideocrudComponent },
  { path:'login', component:LoginComponent},
  { path: 'register', component: RegisterComponent },
  { path:'gestion', component : GestionComponent},
  { path:'categorycrud', component : CategorycrudComponent},
  { path: 'actorcrud', component: ActorcrudComponent },
  { path:'', component: HomeComponent},
  { path:'**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
