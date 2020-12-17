import { Injectable } from '@angular/core';

// import {adressList} from "./adressList";
@Injectable({
  providedIn: 'root'
})
export class AddressAllService {
  adressList:{name:string,location:string,flatno:string,landmark:string,mobNo:number,pincode:string}[]=[
    {name:"Sumit Sangwal",location:"Unnamed Road,Sherewala Punjab 152116 India",flatno:"123",landmark:"bihari park" , mobNo:9988234477,pincode:"152116"},
   {name:"sunny baghhla",location:"Unnamed Road,Sherewala Punjab 152116 India",flatno:"123",landmark:"bihari park" , mobNo:9988234477,pincode:"160009"},
  

  ];
  // adressList:{name:string,location:string,flatno:string,landmark:string,mobNo:number,type:string}[]=
  // [{name:"Sumit Sangwal",location:"Unnamed Road,Sherewala Punjab 152116 India",flatno:"123",landmark:"bihari park" , mobNo:9988234477,type:"Work"},
  // {name:"Sunny Sangal",location:"Unnamed RoadSherewala , Punjab 152116 India",flatno:"242",landmark:"park" ,mobNo:9988234477,type:"Work"}
  // ];
  addAdressSer(_name:string,_location:string,_flatno:string,_landmark:string,_mobNo:number,_pincode:string)
  {
      this.adressList.push({name:_name,location:_location,flatno:_flatno,landmark:_landmark,mobNo:_mobNo,pincode:_pincode});
    
  }
  DelAdressSer(index:number)
  {
    this.adressList.splice(index,1);
  }
  getAllAdress()
  {
    return this.adressList;
  }
  editAdress(_index:number)
  {
    this.adressList[1]={name:'Su5656ny Sangal',location:"Unnamed RoadSherewala , Punjab 152116 India",flatno:"242",landmark:"park",mobNo:9988234477,pincode:"152116"};
    return this.adressList;
  }
  getAdrByIndex(index:number)
  {
    return this.adressList[index];
  }

constructor() {
  // this.adressList[]=[
  // {name:"Sumit Sangwal",location:"Unnamed Road,Sherewala Punjab 152116 India",flatno:"123",landmark:"bihari park" , mobNo:9988234477,type:"Work"},
  // {name:"Sumit Sangwal",location:"Unnamed Road,Sherewala Punjab 152116 India",flatno:"123",landmark:"bihari park" , mobNo:9988234477,type:"Work"},
  // ]

}
}