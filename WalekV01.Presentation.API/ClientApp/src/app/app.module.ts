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
import { ModalEditVideoComponent } from './modal-edit-video/modal-edit-video.component';
import { ModalConfirmComponent } from './modal-confirm/modal-confirm.component';
import { ConfirmPopupModule } from "primeng/confirmpopup";
import { ToastModule } from "primeng/toast";
import { ButtonModule } from "primeng/button";
import { ConfirmationService, MessageService } from "primeng/api";
import {AccordionModule} from 'primeng/accordion';
import {MenuItem} from 'primeng/api';


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
    ModalEditVideoComponent,
    ModalConfirmComponent,



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
    ConfirmPopupModule,
    ToastModule,
    ButtonModule,
    AccordionModule

  ],
  providers: [ConfirmationService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
