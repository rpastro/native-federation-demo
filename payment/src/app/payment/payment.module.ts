import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from '../app.routes';
import { PaymentComponent } from './payment.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    PaymentComponent
  ]
})
export class PaymentModule { }