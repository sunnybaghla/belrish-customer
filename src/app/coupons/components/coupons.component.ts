import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ns-coupons',
  templateUrl: './coupons.component.html',
  styleUrls: ['./coupons.component.css']
})
export class CouponsComponent implements OnInit {
  couponDetail:{code:string,dis:number,minPurchase:number,maxDiscount:number,exp:string}[]=[];

  constructor() {
        this.couponDetail.push(
          {
            code:"ASDJDN",
            dis:20,
            minPurchase:999,
            maxDiscount:100,
            exp:'24 April 2020'
          },
          {
            code:"KBJBJKB",
            dis:30,
            minPurchase:1000,
            maxDiscount:200,
            exp:'24 April 2020'
          }
        )
   }

  ngOnInit() {
  }

}
