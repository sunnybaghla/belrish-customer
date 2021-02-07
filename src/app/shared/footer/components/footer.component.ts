import { Component, OnInit, Input } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Color, Page } from "@nativescript/core";
import { RouterExtensions } from "@nativescript/angular";

declare const android: any;
declare const CGSizeMake: any;
@Component({
    selector: "ns-footer",
    moduleId: module.id,
    templateUrl: "./footer.component.html",
    styleUrls: ["./footer.component.css"]
})

export class FooterComponent implements OnInit {
    homeIcon: string;
    categoryIcon: string;
    searchIcon: string;
    accountIcon: string;
    helpIcon: string;
    isHomeHighlighted: string;
    isCategoryHighlighted: string;
    isSearchHighlighted: string;
    isHelpHighlighted: string;
    isAccountHighlighted: string;
    RouterExtensions: any;
    constructor(private http: HttpClient, private page: Page, private routerExtensions: RouterExtensions) {
        this.page.actionBarHidden = true;

        this.homeIcon = "res://home";
        this.categoryIcon = "res://category";
        this.searchIcon = "res://search_inactive";
        this.helpIcon = "res://help";
        this.accountIcon = "res://account";
        this.isHomeHighlighted = "hidden";
        this.isCategoryHighlighted = "hidden";
        this.isSearchHighlighted = "hidden";
        this.isHelpHighlighted = "hidden";
        this.isAccountHighlighted = "hidden";

        // this.userService.activescreen.subscribe((screen: string) => {
        //     if (screen == "home" || screen == "products" || screen == "categories" || screen == "addProduct" || screen == "addCategory" || screen == "addSlider" || screen == "addOffer") {
        //         this.isHomeHighlighted = "visible";
        //         this.isProfileHighlighted = "hidden";
        //         this.isSearchHighlighted = "hidden";
        //         this.isMenuHighlighted = "hidden";
        //         this.isCartHighlighted = "hidden";
        //     }
        //     if (screen == "profile" || screen == "editProfile" || screen == "shipping" || screen == "changePassword") {
        //         this.isHomeHighlighted = "hidden";
        //         this.isProfileHighlighted = "visible";
        //         this.isSearchHighlighted = "hidden";
        //         this.isMenuHighlighted = "hidden";
        //         this.isCartHighlighted = "hidden";
        //     }
        //     if (screen == "menu" || screen == "orderDetails" || screen == "congratulations" || screen == "myOrders") {
        //         this.isHomeHighlighted = "hidden";
        //         this.isProfileHighlighted = "hidden";
        //         this.isSearchHighlighted = "hidden";
        //         this.isMenuHighlighted = "visible";
        //         this.isCartHighlighted = "hidden";
        //     }
        //     if (screen == "cart" || screen == "addAddress") {
        //         this.isHomeHighlighted = "hidden";
        //         this.isProfileHighlighted = "hidden";
        //         this.isSearchHighlighted = "hidden";
        //         this.isMenuHighlighted = "hidden";
        //         this.isCartHighlighted = "visible";
        //     }
        // });
    }

    ngOnInit(): void {

    }

    onHomeClick() {
        this.routerExtensions.navigate(['/home']);
    }

    onCategoryClick() {
        // this.routerExtensions.navigate(['/profile']);
        alert("profile clicked");
    }

    onSearchClick() {
        // this.routerExtensions.navigate(['/search']);
        alert("search clicked");
    }

    onHelpClick() {
        // this.routerExtensions.navigate(['/menu']);
        alert("menu clicked");
    }

    onAccountClick() {
        // this.routerExtensions.navigate(['/cart']);
        alert("cart clicked");
    }

    protected get shadowColor(): Color {
        return new Color('#888888')
    }

    protected get shadowOffset(): number {
        return 2.0
    }

    // onHeaderLoaded(args: any) {
    //     var headerCard = <any>args.object;
    //     setTimeout(() => {
    //         if (headerCard.android) {
    //             let nativeGridMain = headerCard.android;
    //             var shape = new android.graphics.drawable.GradientDrawable();
    //             shape.setShape(android.graphics.drawable.GradientDrawable.RECTANGLE);
    //             shape.setColor(android.graphics.Color.parseColor('white'));
    //             shape.setCornerRadius(0)
    //             nativeGridMain.setBackgroundDrawable(shape);
    //             nativeGridMain.setElevation(5)
    //         } else if (headerCard.ios) {
    //             let nativeGridMain = headerCard.ios;
    //             nativeGridMain.layer.shadowColor = this.shadowColor.ios.CGColor;
    //             nativeGridMain.layer.shadowOffset = CGSizeMake(0, this.shadowOffset);
    //             nativeGridMain.layer.shadowOpacity = 0.5
    //             nativeGridMain.layer.shadowRadius = 5.0
    //             nativeGridMain.layer.shadowRadius = 5.0
    //         }
    //         // this.changeDetector.detectChanges();
    //     }, 50)

    // }
}
