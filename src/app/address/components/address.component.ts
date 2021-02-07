import { Page } from '@nativescript/core';
import { ModalDialogService, RouterExtensions } from '@nativescript/angular';
import { Component, OnInit, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'ns-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css'],
  providers: [ModalDialogService]
})
export class AddressComponent implements OnInit {
  userName: string;
  mobNo: number;
  email: string;
  profileEdit: string;
  orderIcon: string;
  wishlistIcon: string;
  addressIcon: string;
  couponIcon: string;
  helpIcon: string;
  orderHeading: string;
  orderTitle: string;
  wishlistHeading: string;
  wishlistTitle: string;
  addressHeading: string;
  addressTitle: string;
  couponHeading: string;
  couponTitle: string;
  helpHeading: string;
  helpTitle: string;
  nextIcon: string;
  backIcon: string;
  logoutButton: string;
  constructor(private routerExtensions: RouterExtensions, private modalService: ModalDialogService, private vcref: ViewContainerRef, private page: Page) {
    this.page.actionBarHidden = true;
  }

  ngOnInit() {
    this.userName = "Sunny Baghla";
    this.mobNo = 9988234477;
    this.email = "sunnybaghla@rocketmail.com";
    this.profileEdit = "res://edit";
    this.orderIcon = "res://cart_active";
    this.orderHeading = "Orders";
    this.orderTitle = "Check Your Order Status";
    this.nextIcon = "res://next";
    this.wishlistHeading = "Wishlist";
    this.wishlistTitle = "Your most love style";
    this.addressHeading = "Addresses";
    this.addressTitle = "Save addresses for a hassle-free checkout";
    this.couponHeading = "Coupons";
    this.couponTitle = "Manage coupons for additional discounts";
    this.helpHeading = "Help centre";
    this.helpTitle = "Help regarding your purchase";
    this.backIcon = "res://back_white";
    this.orderIcon = "res://orders";
    this.wishlistIcon = "res://wishlist";
    this.couponIcon = "res://coupons";
    this.helpIcon = "res://help_center";
    this.addressIcon = "res://addresses";
    this.logoutButton = "LOG OUT";
  }

  onBack() {
    this.routerExtensions.back();
  }

  onAddresses() {
    this.routerExtensions.navigate(['/savedAddress']);
  }

  onProfileEdit() {

  }

  onLogoutButton() {
    alert("logout clicked");
  }

}
