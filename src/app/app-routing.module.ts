import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConstruccionComponent } from './components/dinamicFroms/construccion.component';
import { HomeComponent } from './components/pages/home/home.component';
import { PagesComponent } from './components/pages.component';
import { LoginComponent } from './components/pages/login/login.component';


const routes: Routes = [

  { 
    path: '', 
    component: PagesComponent,
    children: [
      { path: 'formulario', component: ConstruccionComponent },
      { path: 'home', component: HomeComponent },
      { path: '', redirectTo: '/home', pathMatch: 'full' },
    ] 
  },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }