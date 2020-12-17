import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PrePincodeService {
  pin:string="";
  city:string="";
  getpin()
  {
    return this.pin;
  }
  getCity()
  {
    return this.city;
  }

constructor() {
  this.pin="152116";
  this.city="Abohar";
 }

}
