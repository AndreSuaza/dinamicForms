import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Services
import { FieldsService } from "./services/fields.service";
import { ValidationFieldsService } from "./services/validation-fields.service";

import { AppComponent } from './app.component';
import { ConstruccionComponent } from './components/dinamicFroms/construccion.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/pages/home/home.component';
import { HeaderComponent } from './components/pages/header/header.component';
import { BreadcrumbsComponent } from './components/pages/breadcrumbs/breadcrumbs.component';
import { PagesComponent } from './components/pages.component';
import { LoginComponent } from './components/pages/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    ConstruccionComponent,
    HomeComponent,
    HeaderComponent,
    BreadcrumbsComponent,
    PagesComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    FieldsService,
    ValidationFieldsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
