import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { PaymentsRoutingModule } from './payments-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SuppliersBillsListComponent } from './suppliers-bills-list/suppliers-bills-list.component';
import { HomeComponent } from './home/home.component';
import { SuppliersPaymentsListComponent } from './suppliers-payments-list/suppliers-payments-list.component';
import { OrdersPaymentsListComponent } from './orders-payments-list/orders-payments-list.component';


@NgModule({
  declarations: [
    DashboardComponent,
    SuppliersBillsListComponent,
    HomeComponent,
    SuppliersPaymentsListComponent,
    OrdersPaymentsListComponent
  ],
  imports: [
    CommonModule,
    PaymentsRoutingModule,
    SharedModule
  ]
})
export class PaymentsModule { }
