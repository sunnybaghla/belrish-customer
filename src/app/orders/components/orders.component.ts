import { Component, OnInit } from '@angular/core';
import { ScreenDimensions } from '../../shared/ScreenDimensions';

@Component({
  selector: 'ns-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  ordersArr: { orderId: number, orderIdData: { itemName: string, type: { option: string, optionValue: string }, tag: number, status: number, itemCode: number }[] }[] = [];
  ii: string;
  yy: string;
  constructor() {
    console.log("SCREEN HEIGHT::::", ScreenDimensions.getheight(100));
    this.ordersArr.push({
      orderId: 123456,
      orderIdData: [
        {
          itemName: "Puma Shoes",
          type: { option: "Size", optionValue: "25" },
          tag: 2,
          status: 0,
          itemCode: 245
        },
        {
          itemName: "sffaa Shoes",
          type: { option: "Size", optionValue: "25" },
          tag: 1,
          status: 1,
          itemCode: 245
        }

      ]
    }, {
      orderId: 123457,
      orderIdData: [{
        itemName: "Puma Shoes",
        type: { option: "Size", optionValue: "25" },
        tag: 0,
        status: 0,
        itemCode: 245
      }]
    }
    )
  }
  getTag(i) {
    if (i == 0) return "Item is Being Prepared";
    if (i == 1) return "";
    if (i == 2) return "Item is Dispatched Now";
  }

  ngOnInit() {
  }

}
