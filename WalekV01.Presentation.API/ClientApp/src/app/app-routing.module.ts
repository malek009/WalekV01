import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SinglevideoComponent } from './singlevideo/singlevideo.component';
import { VideocrudComponent } from './videocrud/videocrud.component';

const routes: Routes = [
  { path:'home', component: HomeComponent },
  { path:'singlevideo/:id', component : SinglevideoComponent},
  { path:'videocrud', component: VideocrudComponent },
  { path:'', component: HomeComponent},
  { path:'**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
