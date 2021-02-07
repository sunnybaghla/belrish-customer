import { ActivatedRoute } from '@angular/router';
import { AfterViewInit } from '@angular/core';
import { PrePincodeService } from '../../services/prePincode.service';
import { ElementRef } from '@angular/core';
import { RouterExtensions } from '@nativescript/angular';
import { AddressAllService } from '../../addressAll.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Color, Page } from '@nativescript/core';
import { Menu } from "nativescript-menu";
import { TextField } from '@nativescript/core';

declare var android;

@Component({
  selector: 'ns-addAddress',
  templateUrl: './addAddress.component.html',
  styleUrls: ['./addAddress.component.css']
})
export class AddAddressComponent implements OnInit, AfterViewInit {
  @ViewChild("nameId", { static: false }) "nameId": ElementRef;
  @ViewChild("mobId", { static: false }) "mobId": ElementRef;
  @ViewChild("locId", { static: false }) "locId": ElementRef;
  // @ViewChild("flatid", { static: false }) "flatid": ElementRef;
  @ViewChild("pincodeId", { static: false }) "pincodeId": ElementRef;
  @ViewChild("cityId", { static: false }) "cityId": ElementRef;
  errormsg: string = "";

  name_txt: string = "";
  mobtxt: string = "";
  loctxt: string = "";
  flat_Txt: string = "";
  pint: string = "";
  city: string = "";
  // name:string;
  // location:string;
  // flatno:string;
  // landmark:string;
  // mobNo:number;
  // type:string;

  // adressList:{name:string,location:string,flatno:string,landmark:string,mobNo:number,type:string}[]=[];

  backIcon: string;
  mainHeading: string;
  addressTypeButton: string;

  constructor(private AdressAllService: AddressAllService, private routerExtension: RouterExtensions, private PrePincodeService: PrePincodeService, private route: ActivatedRoute, private page: Page) {
    this.page.actionBarHidden = true;
    //   this.name="";
    //   this.location="";
    //   this.flatno="";
    //   this.landmark="";
    //   this.pincodeid.nativeElement.text="152116";
    //   this.type="";

    // this.route.queryParams.subscribe(params => {
    //   this.mobno=params["mobno"];

    // this.errormsg="";
    // this.nameid=this.nameid.nativeElement
  }
  ngOnInit() {
    this.backIcon = "res://back_white";
    this.mainHeading = "Add Address";
    this.addressTypeButton = "Select address type";
  }


  ngAfterViewInit() {
    this.pincodeId.nativeElement.text = this.PrePincodeService.getpin();
    this.cityId.nativeElement.text = this.PrePincodeService.getCity();
    this.route.queryParams.subscribe(params => {
      this.nameId.nativeElement.text = params["nameUser"];
      this.locId.nativeElement.text = params["location"];
      // this.flatId.nativeElement.text = params["flatno"];
      this.pincodeId.nativeElement.text = params["landmark"];
      this.mobId.nativeElement.text = params["mobNo"];
      this.pincodeId.nativeElement.text = params["type"];
    });
  }

  public nameBlur() {
    if (this.nameId.nativeElement.text == "") {
      this.nameId.nativeElement.style.borderBottomColor = new Color("red");
      this.errormsg = "Please Fill All the Field";

    }
    else
      this.nameId.nativeElement.style.borderBottomColor = new Color("black");

  }
  public mobBlur() {
    if (this.mobId.nativeElement.text == "") {
      this.mobId.nativeElement.style.borderBottomColor = new Color("red");
      this.errormsg = "Please Fill All the Field";
    }

    else
      this.mobId.nativeElement.style.borderBottomColor = new Color("black");
  }
  public locBlur() {
    if (this.locId.nativeElement.text == "") {
      this.locId.nativeElement.style.borderBottomColor = new Color("red");
      this.errormsg = "Please Fill All the Field";
    }

    else
      this.locId.nativeElement.style.borderBottomColor = new Color("black");
  }
  // public flatblur() {
  //   if (this.flatid.nativeElement.text == "") {
  //     this.flatid.nativeElement.style.borderBottomColor = new Color("red");
  //     this.errormsg = "Please Fill All the Field";
  //   }
  //   else
  //     this.flatid.nativeElement.style.borderBottomColor = new Color("black");
  // }
  public cityBlur() {
    if (this.cityId.nativeElement.text == "") {
      this.cityId.nativeElement.style.borderBottomColor = new Color("red");
      this.errormsg = "Please Fill All the Field";
    }
    else
      this.cityId.nativeElement.style.borderBottomColor = new Color("black");
  }
  public pincodeBlur() {
    if (this.pincodeId.nativeElement.text == "") {
      this.pincodeId.nativeElement.style.borderBottomColor = new Color("red");
      this.errormsg = "Please Fill All the Field";
    }
    else
      this.pincodeId.nativeElement.style.borderBottomColor = new Color("black");
  }

  public nameTextField(args) {
    var textfield = <TextField>args.object;

  }
  public mobTextField(args) {
    var textField = <TextField>args.object;
    this.mobtxt = textField.text;
  }
  public locTextField(args) {
    var textField = <TextField>args.object;
    this.loctxt = textField.text;
  }
  public flatTextField(args) {
    var textField = <TextField>args.object;
    this.flat_Txt = textField.text;
  }
  public pinTextField(args) {
    var textField = <TextField>args.object;
    this.pint = textField.text;
  }
  public cityTextField(args) {
    var textField = <TextField>args.object;
    this.city = textField.text;
  }

  onBack() {
    this.routerExtension.back();
  }

  onAddressType() {
    Menu.popup({
      view: this.page.getViewById("menuBtn"),
      actions: ["Home", "Work", "Other"]
    })
      .then(action => {
        // alert(action.id + " - " + action.title);
        if (action.title != undefined && action.title != null) {
          this.addressTypeButton = action.title;
        }
      })
      .catch(console.log);
  }

}






