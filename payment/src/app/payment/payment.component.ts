import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.scss'
})
export class PaymentComponent {
  account: string = '';
  amount: string = '';
  result = signal<string>('');

  pay() {
    this.result.set(`Payed ${this.amount} to ${this.account}`);
  }
}
