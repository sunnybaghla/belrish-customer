import { ElementRef } from '@angular/core';
import { ViewChild } from '@angular/core';

import { Directive } from '@angular/core';
import { ConfirmOtpModule } from './../../confirm-otp/confirm-otp.module';
import { Component, OnInit } from '@angular/core';
import { PageChangeEventData } from "nativescript-image-swipe";
import { Color, Page, ScrollEventData, ScrollView, SwipeGestureEventData, View } from '@nativescript/core';
import { ScreenDimensions } from './../../shared/ScreenDimensions';

@Component({
  selector: 'ns-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {

  @ViewChild("player", { static: false }) player: ElementRef;
  @ViewChild("label", { static: false }) label: ElementRef;
  // @ViewChild("textField", { static: false }) textField: ElementRef;

  defaultPrice: number = 0;
  itemImgVid: any[] = [];
  flag: boolean = false;
  recDisc: number;
  secure: boolean;
  recItem: {
    itemUrl: string,
    itemName: string,
    itemDesc: string,
    itemPrice: number,
    itemMRP: number,
    itemCatCode: number,
    itemCode: number,
  }[] = [];

  ItemAllInfo: {
    imageUrl: {}[],
    ItemName: string,
    itemDesc: string,
    ItemPrice: { size: string, MRP: number, SellPrice: number }[],
    proHighlight: { heading: string, info: string }[],
    styleNote: string,
    pincode: { sameDay: {}[], midNight: {}[] },
    itemCatCode: { name: string, code: number }[],
    size: {}[],
    ItemCode: number,
    inCode: number,
    type: { meassge: string, flavour: {}[] },
    couponCode: {}[],
    otherInfo: {}[],
    trending: boolean,
    bestSeller: boolean,
    Sellby: string,
    desc: { heading: string, info: string }[]
  }[] = [];
  public tempa: number = 5;
  


  public direction: number;
  swipeDire: number = 0;
  discountPrice: number;
  screenHeight: number;
  screenWidth: number;
  dest: boolean = true;

  constructor(private page: Page) {
    this.page.actionBarHidden = true;
    // this.tempa=this.ItemAllInfo[0].desc[0].heading;
    this.screenHeight = ScreenDimensions.getheight(100);
    this.screenWidth = ScreenDimensions.getwidth(100);
  }


  ngOnInit() {
    this.itemImgVid.push({ imageUrl: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQVTn9fEI1b14f5naz1oVFjJWOxda-fFvYOFcHD36WTUuFdflrGFUk0H0fi5xxI3U3JlzVHPT-CiylMqnlVksyZ90zPXhygJxHTNFmnGtHFfk5CKysGYRYmrg&usqp=CAc" });

    this.itemImgVid.push({ imageUrl: "https://i2-prod.mirror.co.uk/incoming/article2912355.ece/ALTERNATES/s615/Chocolate-Bar.jpg" });

    this.ItemAllInfo.push({
      imageUrl: ["https://i2-prod.mirror.co.uk/incoming/article2912355.ece/ALTERNATES/s615/Chocolate-Bar.jpg",
        "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQVTn9fEI1b14f5naz1oVFjJWOxda-fFvYOFcHD36WTUuFdflrGFUk0H0fi5xxI3U3JlzVHPT-CiylMqnlVksyZ90zPXhygJxHTNFmnGtHFfk5CKysGYRYmrg&usqp=CAc",
        "http://techslides.com/demos/sample-videos/small.mp4",
        "http://techslides.com/demos/sample-videos/small.3gp",
        "https://i2-prod.mirror.co.uk/incoming/article2912355.ece/ALTERNATES/s615/Chocolate-Bar.jpg"
      ],
      ItemName: "Flavoured Chocho",
      itemDesc: "Newl Dgn Cafor  asf asf af asf af af as f f saf f as your Love",
      ItemPrice: [{ size: "1/2KG", MRP: 257, SellPrice: 107 }, { size: "1KG", MRP: 257, SellPrice: 112 }],
      proHighlight: [{ heading: "Type", info: "Tasty" }, { heading: "shape", info: "Round" }, { heading: "Bread Type", info: "Single" }, { heading: "Brand", info: "Gift" }],
      styleNote: "it is too dious item anfadfa kadnfnaf klanfnaf lknsafkfniaf aksnfaf nalnf nkjnafn klnannl nkdanlknnkl  aljfna",
      pincode: { sameDay: [152116], midNight: [252, 152116] },
      itemCatCode: [{ name: "Cae", code: 3434 }],
      size: [{ quan: 0.5 }, { quan: 2 }],
      ItemCode: 101,
      inCode: 0,
      type: { meassge: "undefined", flavour: ["undefined", "jgvghvhgv"] },
      couponCode: ["hkbkjb"],
      otherInfo: ["ffwtwetwetwt"],
      trending: false,
      bestSeller: false,
      Sellby: "gift",
      desc: [{ heading: "info", info: "hell ajfalfanfla alksdfla alksnfa kas afknaf  kasmdf fkamnf aksldfma faklfa f asfna f afalfo" },{ heading: "info", info: "hell afalfanfla alksdfla alksnfa kas afknaf  kasmdf fkamnf aksldfma faklfa f asfna f afalfo" }, { heading: "s lllmize", info: "Asafafafasdafaf aksnf asnf fnas  asd  d rrw wfs fs sdf f s sdf sf s fs s  sf s fs f sf s df s dsf d fsd s d sdf dsf  fs d  sd f f s s  f  f f fds s fsf " }]
    });

    this.recItem.push({
      itemUrl: "https://as2.ftcdn.net/jpg/02/11/61/51/500_F_211615147_yWq9oZUxtjeGMuUYVcGx9NVoISuVe1ZS.jpg",
      itemName: "Chcoo Bar",
      itemDesc: "enhace yaj asnf asdnf dfiajf a",
      itemPrice: 547,
      itemMRP: 1000,
      itemCatCode: 103,
      itemCode: 1032,
    }, {
      itemUrl: "https://images.pexels.com/photos/1207918/pexels-photo-1207918.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      itemName: "Chcoo Bar",
      itemDesc: "enhace yaj asnf asdnf dfiajf a",
      itemPrice: 556,
      itemMRP: 556,
      itemCatCode: 103,
      itemCode: 1032,
    }, {
      itemUrl: "https://images.pexels.com/photos/65882/chocolate-dark-coffee-confiserie-65882.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      itemName: "Chcoo Bar",
      itemDesc: "enhace yaj asnf asdnf dfiajf a",
      itemPrice: 547,
      itemMRP: 556,
      itemCatCode: 103,
      itemCode: 1032,
    }, {
      itemUrl: "https://images.pexels.com/photos/165263/pexels-photo-165263.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      itemName: "Chco Bar",
      itemDesc: "enhace yaj asnf asddfiajf a",
      itemPrice: 547,
      itemMRP: 556,
      itemCatCode: 103,
      itemCode: 1032,
    }, {
      itemUrl: "https://images.pexels.com/photos/1050767/pexels-photo-1050767.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      itemName: "Chcoo Bar",
      itemDesc: "enhace yaj asnf asdnf dfiajf a",
      itemPrice: 547,
      itemMRP: 556,
      itemCatCode: 103,
      itemCode: 1032,
    });
  }

  chkImgVid(index) {
    this.tempa = index;
    if (this.ItemAllInfo[0].imageUrl[index].toString().endsWith("mp4")) {
      return false;
    } else {
      // this.player.nativelement.pause();
      // this.player.nativeElement.pause();
      return true;
    }
  }

  flagFalse() {
    this.flag = false;
  }

  chkvid(index) {
    this.tempa = index;
    if (this.ItemAllInfo[0].imageUrl[index].toString().endsWith("mp4")) {
      return true;
    } else {
      // this.player.nativelement.pause();
      // this.player.nativeElement.pause();
      return false;
    }
  }

  multiFlavour() {
    if (this.ItemAllInfo[0].type.flavour.length == 1) {
      return false;
      // this.tempa=this.ItemAllInfo[0].type.flavour.toString();
    }
    else return true;
  }

  public multiSize() {
    if (this.ItemAllInfo[0].ItemPrice.length === 1) {
      return false;
    }
    else return true;
  }

  public ontap() {
    this.flag = !this.flag;
  }

  pricecount(i) {
    this.defaultPrice = i;
  }

  checkSameDay() {
    for (var i = 0; i < this.ItemAllInfo[0].pincode.sameDay.length; i++) {
      if (this.ItemAllInfo[0].pincode.sameDay[i] === 152116) {
        return true;
      }
    }
    return false;
  }

  midNights() {
    for (var i = 0; i < this.ItemAllInfo[0].pincode.midNight.length; i++) {
      if (this.ItemAllInfo[0].pincode.midNight[i] === 152116) {
        return true;
      }
    }
    return false;
  }

  chkDiscount() {
    if (this.ItemAllInfo[0].ItemPrice[this.defaultPrice].MRP === this.ItemAllInfo[0].ItemPrice[this.defaultPrice].SellPrice) {
      return false;
    }
    else {
      this.discountPrice = Math.round(((this.ItemAllInfo[0].ItemPrice[this.defaultPrice].MRP - this.ItemAllInfo[0].ItemPrice[this.defaultPrice].SellPrice) / this.ItemAllInfo[0].ItemPrice[this.defaultPrice].MRP) * 100);
      return true;
    }
  }


  

  checkRecSell(i) {
    if (this.recItem[i].itemMRP === this.recItem[i].itemPrice) {
      return false;
    }
    else {
      // this.discountPrice= Math.round(((this.ItemAllInfo[0].ItemPrice[this.defaultPrice].MRP-this.ItemAllInfo[0].ItemPrice[this.defaultPrice].SellPrice)/this.ItemAllInfo[0].ItemPrice[this.defaultPrice].MRP)*100);
      return true;
    }
  }

  checkRecDis(i) {
    return Math.round(((this.recItem[i].itemMRP - this.recItem[i].itemPrice) / this.recItem[i].itemMRP) * 100);
  }

  

  public onSwipe(args: SwipeGestureEventData) {
    console.log("Swipe!");
    console.log("Object that ggered the event: " + args.object);
    console.log("View that trigred the event: " + args.view);
    console.log("Event name: " + args.eventName);
    console.log("Swipe Direction: " + args.direction);
    if (args.direction === 2) {
      this.swipeDire++;
    }
    if (args.direction === 1) {
      this.swipeDire--;
    }
    //  this.tempa=args.direction;
  }

  public pageChanged(e: PageChangeEventData) {
    // this.tempa=e.page;
  }


  onDest() {
    this.dest = !this.dest;
  }

  onScroll(event: ScrollEventData, scrollView: ScrollView, topView: View) {
    // If the header content is still visiible
    // console.log(scrollView.verticalOffset);
    if (scrollView.verticalOffset < 380) {
      const offset = scrollView.verticalOffset / 2;

      if (scrollView.ios) {
        // iOS adjust the position with an animation to create a smother scrolling effect. 
        topView.animate({ translate: { x: 50, y: offset } }).then(() => { }, () => { });
      } else {
        // Android, animations are jerky so instead just adjust the position without animation.
        topView.translateY = Math.floor(offset);
      }
    }
  }

  myChangePageEvent(args: any) {
  }

}