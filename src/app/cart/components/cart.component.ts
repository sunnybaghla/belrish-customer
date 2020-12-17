import { AddressAllService } from './../../addressAll.service';
import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'ns-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItem:{img:string,itemName:string,itemDesc:string,soldBy:string,MRP:number,sellPrice:number,quan:number,itemCode:number}[]=[];
  deliveryDay:{ today:{isAvail:boolean,sameDay:boolean,fixSlot:{}[],midNight:boolean},
   Tomorrow:{isAvail:boolean,sameDay:boolean,fixSlot:{}[],midNight:boolean},
  otherDay:{isAvail:boolean,sameDay:boolean,fixSlot:{}[],midNight:boolean}

  }[]=[];
  constructor( private adressSer:AddressAllService) {
    this.deliveryDay.push()
  
    this.cartItem.push({
      
       img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSqjmb4oURjwsDoK6TwiZtALebX7mX6fG7Rr92OGXUZAADmTzNkQ&s",
       itemName:"Express Shoes",
       itemDesc:"afjnajnf",
       soldBy:"asf",
       MRP:552,
       sellPrice:226,
       quan:52,
       itemCode:1256
    },{
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSqjmb4oURjwsDoK6TwiZtALebX7mX6fG7Rr92OGXUZAADmTzNkQ&s",
      itemName:"Local Shoes",
      itemDesc:"afjnajnf",
      soldBy:"asf",
      MRP:52,
      sellPrice:226,
      quan:52,
      itemCode:2556
   });
   for(var i=0;i<this.cartItem.length;i++)
        {
          this.totalP+=this.cartItem[i].sellPrice;
        }
   }
   removeItem(index)
   {
     this.totalP=this.totalP-this.cartItem[index].sellPrice;
     this.cartItem.splice(index,1);
   }
   totalP:number=0;
   chkCorrier()
   {
    for(var i=0;i<this.cartItem.length;i++)
    {
      if(this.cartItem[i].itemCode.toString().startsWith('1'))
      {
        return true;
      }

    }
     return false
   }
   chkLocal()

   {
    for(var i=0;i<this.cartItem.length;i++)
    {
      if(this.cartItem[i].itemCode.toString().startsWith('2'))
      {
        return true;
      }

    } 
   return false
   }
   chkLocalItem(i)
   {
     if(this.cartItem[i].itemCode.toString().startsWith('2'))
     return true;
     else return false
   }
   chkCorItem(i)
   {
    if(this.cartItem[i].itemCode.toString().startsWith('1'))
    return true;
    else return false
   }

  ngOnInit() {
  }

}
