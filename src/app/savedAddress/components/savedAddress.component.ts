import { NavigationExtras, ActivatedRoute } from '@angular/router';
import { AfterViewInit } from '@angular/core';
import { RouterExtensions } from '@nativescript/angular';
import { Component, OnInit } from '@angular/core';
import { Page } from '@nativescript/core';


@Component({
  selector: 'ns-savedAddress',
  templateUrl: './savedAddress.component.html',
  styleUrls: ['./savedAddress.component.css'],
})
export class SavedAddressComponent implements OnInit, AfterViewInit {

  mainHeading: string;
  backIcon: string;
  addressList;
  addAddressButton: string;
  editButton: string;
  deleteButton: string;
  addressIcon: string;
  selectedAddress;

  constructor(private routerExtensions: RouterExtensions, private route: ActivatedRoute, private page: Page) {
    this.page.actionBarHidden = true;
  }

  ngOnInit() {
    this.mainHeading = "SAVED ADRESSES";
    this.backIcon = "res://back_white";
    this.addressIcon = "res://addresses";
    this.selectedAddress = 0;
    this.addressList = [
      { "name": "sdfahg sdfhg", "location": "hsdg jhdsg yugsf sdfjg fjgv fdgfuj", "flatno": "456", "landmark": "ghhg gjhgjg", "phone": "9876543210", "pincode": "152116" },
      { "name": "sdfahg sdfhg", "location": "hsdg jhdsg yugsf sdfjg fjgv fdgfuj", "flatno": "456", "landmark": "ghhg gjhgjg", "phone": "9876543210", "pincode": "152116" },
      { "name": "sdfahg sdfhg", "location": "hsdg jhdsg yugsf sdfjg fjgv fdgfuj hsdg jhdsg yugsf sdfjg fjgv fdgfuj hsdg jhdsg yugsf sdfjg fjgv fdgfuj hsdg jhdsg yugsf sdfjg fjgv fdgfuj", "flatno": "456", "landmark": "ghhg gjhgjg", "phone": "9876543210", "pincode": "152116" },
      { "name": "sdfahg sdfhg", "location": "hsdg jhdsg yugsf sdfjg fjgv fdgfuj", "flatno": "456", "landmark": "ghhg gjhgjg", "phone": "9876543210", "pincode": "152116" },
      { "name": "sdfahg sdfhg", "location": "hsdg jhdsg yugsf sdfjg fjgv fdgfuj hsdg jhdsg yugsf sdfjg fjgv fdgfuj", "flatno": "456", "landmark": "ghhg gjhgjg", "phone": "9876543210", "pincode": "152116" },
      { "name": "sdfahg sdfhg", "location": "hsdg jhdsg yugsf sdfjg fjgv fdgfuj", "flatno": "456", "landmark": "ghhg gjhgjg", "phone": "9876543210", "pincode": "152116" },
      { "name": "sdfahg sdfhg", "location": "hsdg jhdsg yugsf sdfjg fjgv fdgfuj", "flatno": "456", "landmark": "ghhg gjhgjg", "phone": "9876543210", "pincode": "152116" },
      { "name": "sdfahg sdfhg", "location": "hsdg jhdsg yugsf sdfjg fjgv fdgfuj hsdg jhdsg yugsf sdfjg fjgv fdgfuj", "flatno": "456", "landmark": "ghhg gjhgjg", "phone": "9876543210", "pincode": "152116" },
      { "name": "sdfahg sdfhg", "location": "hsdg jhdsg yugsf sdfjg fjgv fdgfuj", "flatno": "456", "landmark": "ghhg gjhgjg", "phone": "9876543210", "pincode": "152116" },
      { "name": "sdfahg sdfhg", "location": "hsdg jhdsg yugsf sdfjg fjgv fdgfuj hsdg jhdsg yugsf sdfjg fjgv fdgfuj", "flatno": "456", "landmark": "ghhg gjhgjg", "phone": "9876543210", "pincode": "152116" },
      { "name": "sdfahg sdfhg", "location": "hsdg jhdsg yugsf sdfjg fjgv fdgfuj", "flatno": "456", "landmark": "ghhg gjhgjg", "phone": "9876543210", "pincode": "152116" },
      { "name": "sdfahg sdfhg", "location": "hsdg jhdsg yugsf sdfjg fjgv fdgfuj", "flatno": "456", "landmark": "ghhg gjhgjg", "phone": "9876543210", "pincode": "152116" }
    ]
    this.addAddressButton = "ADD NEW ADDRESS";
    this.editButton = "EDIT";
    this.deleteButton = "DELETE";
  }

  delItem(args) {
    // this.AddAdressService.DelAdressSer(args);
  }

  public adds() {
    this.routerExtensions.navigate(["/addAdress"]);
  }
  public editItem(args) {
    let NavigationExtras: NavigationExtras = {
      queryParams: {
        "nameUser": this.addressList[args].name,
        "location": this.addressList[args].location,
        "flatno": this.addressList[args].flatno,
        "landmark": this.addressList[args].landmark,
        "mobNo": this.addressList[args].mobNo,
        "type": this.addressList[args].pincode
      }
    };
    this.routerExtensions.navigate(["/addAdress"], NavigationExtras);
  }
  ngAfterViewInit() {

  }

  onBack() {
    this.routerExtensions.back();
  }

  onAddAddressButton() {

  }

  onAddressClick() {
    alert("address clicked");
  }

  onAddressLongPress() {
    alert("address long pressed");
  }

  selectAddress(i: number) {
    if (this.selectedAddress == i) {
      this.selectedAddress = -1;
    }
    else {
      this.selectedAddress = i;
    }
  }

  onAddAddress() {
    this.routerExtensions.navigate(['/addAddress']);
  }

}
