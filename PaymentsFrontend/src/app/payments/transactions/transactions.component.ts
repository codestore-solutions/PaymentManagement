import { Component } from '@angular/core';

export interface PeriodicElement {
  id: number;
  transaction_id: string;
  amount: number;
  date: string;
  status:string;
}

const TRANSACTION_DATA: PeriodicElement[] = [
  {id:1, transaction_id:"62-ffr2345-65348-88764", amount:91255, date:"2023-04-05", status:"Successful"},
  {id:2, transaction_id:"63-ffr2353-65348-88764", amount:81407, date:"2023-05-03", status:"Successful"}
];

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent {

  displayedColumns: string[] = ["id", "transaction_id", "amount", "date", "status", "details"];
  dataSource = TRANSACTION_DATA;

}
