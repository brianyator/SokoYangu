import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NyumbaniComponent } from './nyumbani/nyumbani.component';

const routes: Routes = [
  {path:'nyumbani', component: NyumbaniComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
