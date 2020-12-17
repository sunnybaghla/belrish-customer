import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ns-orderDetails',
  templateUrl: './orderDetails.component.html',
  styleUrls: ['./orderDetails.component.css']
})
export class OrderDetailsComponent implements OnInit {

  



  ordersArr:{orderId:number,orderIdData:{itemName:string,type:{option:string,optionValue:string}, tag:number,status:number,itemCode:number}[]}[]=[];
constructor(){
  this.ordersArr.push({
    orderId:123456,
    orderIdData:[
      {
    itemName:"Puma Shoes",
    type:{option:"Size",optionValue:"25"},
    tag:2,
    status:0,
    itemCode:245},
    {
      itemName:"sffaa Shoes",
      type:{option:"Size",optionValue:"25"},
      tag:1,
      status:1,
      itemCode:245},
      
    {
      itemName:"Cake",
      type:{option:"Size",optionValue:"25"},
      tag:0,
      status:0,
      itemCode:245}
    
  ]
  },{
    orderId:123457,
    orderIdData:[{
    itemName:"Puma Shoes",
    type:{option:"Size",optionValue:"25"},
    tag:2,
    status:1,
    itemCode:245}]
  }
  
  
)

} 
getTag(i)
{
if(i==0) return "Item is Being Prepared";
if(i==1) return "";
if(i==2) return "Item is Dispatched Now";
} 
  ngOnInit() {
  }

}
