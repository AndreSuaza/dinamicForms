import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConstruccionComponent } from './components/dinamicFroms/construccion.component';
import { HomeComponent } from './components/pages/home/home.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'formulario', component: ConstruccionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }