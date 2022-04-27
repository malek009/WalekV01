import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { VideosComponent } from './videos/videos.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SinglevideoComponent } from './singlevideo/singlevideo.component';
import { VideocrudComponent } from './videocrud/videocrud.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { GestionComponent } from './gestion/gestion.component';
import { ModalAddVideoComponent } from './modal-add-video/modal-add-video.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { CategorycrudComponent } from './categorycrud/categorycrud.component';
import { ModalShowCategoriesComponent } from './modal-show-categories/modal-show-categories.component';
import {MatSelectModule} from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
    VideosComponent,
    SinglevideoComponent,
    VideocrudComponent,
    LoginComponent,
    RegisterComponent,
    GestionComponent,
    ModalAddVideoComponent,
    CategorycrudComponent,
    ModalShowCategoriesComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    [NgbPaginationModule, NgbAlertModule],
    MatSelectModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
