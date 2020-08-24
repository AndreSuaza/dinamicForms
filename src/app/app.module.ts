import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Services
import { FieldsService } from "./services/fields.service";

import { AppComponent } from './app.component';
import { ConstruccionComponent } from './construccion/construccion.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    ConstruccionComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [
    FieldsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
