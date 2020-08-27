import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Services
import { FieldsService } from "./services/fields.service";

import { AppComponent } from './app.component';
import { ConstruccionComponent } from './components/dinamicFroms/construccion.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TestComponent } from './test/test.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/pages/home/home.component';
import { HeaderComponent } from './components/pages/header/header.component';
import { BreadcrumbsComponent } from './components/pages/breadcrumbs/breadcrumbs.component';

@NgModule({
  declarations: [
    AppComponent,
    ConstruccionComponent,
    TestComponent,
    HomeComponent,
    HeaderComponent,
    BreadcrumbsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    FieldsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
