import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { SuppliersBillsListComponent } from './suppliers-bills-list/suppliers-bills-list.component';
import { SuppliersPaymentsListComponent } from './suppliers-payments-list/suppliers-payments-list.component';
import { OrdersPaymentsListComponent } from './orders-payments-list/orders-payments-list.component';

const routes: Routes = [
  {
    path:"dashboard",
    component:DashboardComponent,
    children:[
      {
        path:"",
        redirectTo:"home",
        pathMatch:"full"
      },
      {
        path:"home",
        component:HomeComponent
      },
      {
        path:"suppliers-bills",
        component:SuppliersBillsListComponent
      },
      {
        path:"suppliers-payments",
        component:SuppliersPaymentsListComponent
      },
      {
        path:"orders-payments",
        component:OrdersPaymentsListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentsRoutingModule { }
