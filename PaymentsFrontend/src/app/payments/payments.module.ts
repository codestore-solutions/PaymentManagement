import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { PaymentsRoutingModule } from './payments-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReceivedPaymentsComponent } from './received-payments/received-payments.component';
import { PayoutsComponent } from './payouts/payouts.component';
import { ReceivedPaymentDetailsComponent } from './received-payment-details/received-payment-details.component';
import { PayoutDetailsComponent } from './payout-details/payout-details.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ReceivedPaymentsComponent,
    PayoutsComponent,
    ReceivedPaymentDetailsComponent,
    PayoutDetailsComponent
  ],
  imports: [
    CommonModule,
    PaymentsRoutingModule,
    SharedModule
  ]
})
export class PaymentsModule { }
