import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/native-federation';

export const routes: Routes = [
  {
    path: 'billing',
    loadChildren: () =>
      loadRemoteModule('billing', './Module').then(m => m.BillingModule)
  },
  {
    path: 'payment',
    loadComponent: () =>
      loadRemoteModule('payment', './Component').then(m => m.PaymentComponent)
  },
  {
    path: 'support',
    loadComponent: () =>
      loadRemoteModule('support', './Component').then(m => m.SupportComponent)
  }
];
