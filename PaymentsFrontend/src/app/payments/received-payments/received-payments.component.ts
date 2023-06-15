import { Component } from '@angular/core';
import { Router } from '@angular/router';

export interface TData {
  transaction_id: string;
  order_id:string;
  user:string;
  amount: number;
  date: string;
  status:string;
}

const TRANSACTION_DATA: TData[] = [
  {transaction_id:"59fr-01230", order_id:"od-0001", user:"Abhi", amount:6912, date:"2023-05-01", status:"Successful"},
  {transaction_id:"60fr-01231", order_id:"od-0002", user:"Mayank", amount:803, date:"2023-05-01", status:"Successful"},
  {transaction_id:"61fr-01232", order_id:"od-0003", user:"Ankit", amount:36499, date:"2023-05-02", status:"Successful"},
  {transaction_id:"62fr-01233", order_id:"od-0004", user:"Rudra", amount:912, date:"2023-05-02", status:"Successful"},
  {transaction_id:"63fr-01234", order_id:"od-0005", user:"Saksham", amount:814, date:"2023-05-03", status:"Successful"},
  {transaction_id:"64fr-01235", order_id:"od-0006", user:"Ajit", amount:416, date:"2023-05-06", status:"Successful"},
  {transaction_id:"65fr-01236", order_id:"od-0007", user:"Siddharth", amount:1407, date:"2023-05-07", status:"Successful"},
  {transaction_id:"66fr-01237", order_id:"od-0008", user:"Rohan", amount:9140, date:"2023-05-07", status:"Successful"},
  {transaction_id:"67fr-01238", order_id:"od-0009", user:"Piyush", amount:3203, date:"2023-05-08", status:"Successful"},
  {transaction_id:"68fr-01239", order_id:"od-0010", user:"Arpit", amount:13299, date:"2023-05-08", status:"Successful"},
  {transaction_id:"69fr-01240", order_id:"od-0011", user:"Vansh", amount:2278, date:"2023-05-09", status:"Successful"}
];

@Component({
  selector: 'app-received-payments',
  templateUrl: './received-payments.component.html',
  styleUrls: ['./received-payments.component.scss']
})
export class ReceivedPaymentsComponent {

  constructor(
    private _router: Router
  ){}

  displayedColumns: string[] = ["transaction_id", "order_id", "user", "amount", "date", "status", "details"];
  dataSource = TRANSACTION_DATA;

  showDetail():void{
  }

}