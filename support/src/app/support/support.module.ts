import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from '../app.routes';
import { SupportComponent } from './support.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SupportComponent
  ]
})
export class SupportModule { }