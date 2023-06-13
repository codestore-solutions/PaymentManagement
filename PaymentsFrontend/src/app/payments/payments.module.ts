import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { PaymentsRoutingModule } from './payments-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { TransactionDetailComponent } from './transaction-detail/transaction-detail.component';
import { ReceivedPaymentsComponent } from './received-payments/received-payments.component';
import { PayoutsComponent } from './payouts/payouts.component';


@NgModule({
  declarations: [
    DashboardComponent,
    TransactionsComponent,
    TransactionDetailComponent,
    ReceivedPaymentsComponent,
    PayoutsComponent
  ],
  imports: [
    CommonModule,
    PaymentsRoutingModule,
    SharedModule
  ]
})
export class PaymentsModule { }
