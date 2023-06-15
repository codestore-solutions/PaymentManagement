import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PayoutsComponent } from './payouts/payouts.component';
import { ReceivedPaymentsComponent } from './received-payments/received-payments.component';
import { PageNotFoundComponent } from '../shared/page-not-found/page-not-found.component';
import { ReceivedPaymentDetailsComponent } from './received-payment-details/received-payment-details.component';

const routes: Routes = [
  {
    path:"",
    component:DashboardComponent,
    title:"Admin - Dashboard",
    children:[
      {
        path:"",
        redirectTo:"payments",
        pathMatch:"full"
      },
      {
        path:"payments",
        component:ReceivedPaymentsComponent
      },
      {
        path:"payments/payment/:id",
        component:ReceivedPaymentDetailsComponent
      },
      {
        path:"payouts",
        component:PayoutsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentsRoutingModule { }
