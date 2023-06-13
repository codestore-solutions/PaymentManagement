import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { TransactionDetailComponent } from './transaction-detail/transaction-detail.component';
import { PayoutsComponent } from './payouts/payouts.component';
import { ReceivedPaymentsComponent } from './received-payments/received-payments.component';

const routes: Routes = [
  {
    path:"",
    component:DashboardComponent,
    title:"Admin - Dashboard",
    children:[
      {
        path:"",
        redirectTo:"transactions",
        pathMatch:"full"
      },
      {
        path:"transactions",
        component:TransactionsComponent
      },
      {
        path:"transactions/:id",
        component:TransactionDetailComponent
      },
      {
        path:"payouts",
        component:PayoutsComponent
      },
      {
        path:"payments",
        component:ReceivedPaymentsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentsRoutingModule { }
