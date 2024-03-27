import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from '../app.routes';
import { BillingComponent } from './billing.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    BillingComponent
  ]
})
export class BillingModule { }