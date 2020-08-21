import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
