import { Component } from '@angular/core';
import { Router } from '@angular/router';

export interface TData {
  id: number;
  vendor: string;
  payout: number;
  last_payout: string;
}

const TRANSACTION_DATA: TData[] = [
  {id:1, vendor:"ABC Traders", payout:91255, last_payout:"2023-04-05"},
  {id:2, vendor:"XYZ Traders", payout:81407, last_payout:"2023-05-03"}
];

@Component({
  selector: 'app-payouts',
  templateUrl: './payouts.component.html',
  styleUrls: ['./payouts.component.scss']
})
export class PayoutsComponent {

  constructor(
    private _router: Router
  ){}

  displayedColumns: string[] = ["id", "vendor", "payout", "last_payout", "details"];
  dataSource = TRANSACTION_DATA;

  showDetail():void{
  }

}
