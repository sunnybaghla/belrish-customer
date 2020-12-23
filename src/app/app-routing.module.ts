import { ItemDetailsModule } from './item-details/item-details.module';
import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes, PreloadAllModules } from "@angular/router";

const routes: Routes = [
    { path: "", redirectTo: "/orderDetails", pathMatch: "full" },
    { path: "home", loadChildren: "./home/home.module#HomeModule" },
    { path: "login", loadChildren: "./login/login.module#LoginModule" },
    { path: "confirmOtp", loadChildren: "./confirm-otp/confirm-otp.module#ConfirmOtpModule" },
    { path: "address", loadChildren: "./address/address.module#AddressModule" },
    { path: "savedAddress", loadChildren: "./savedAddress/savedAddress.module#SavedAddressModule" },
    { path: "addAddress", loadChildren: "./addAddress/addAddress.module#AddAddressModule" },
    { path: "itemList", loadChildren: "./itemList/itemList.module#ItemListModule" },
    { path: "filterItems", loadChildren: "./filterItems/filterItems.module#FilterItemsModule" },
    { path: "itemDetails", loadChildren: "./item-details/item-details.module#ItemDetailsModule" },
    { path: "test", loadChildren: "./test/test.module#TestModule" },
    { path: "cart", loadChildren: "./cart/cart.module#CartModule" },
    { path: "coupons", loadChildren: "./coupons/coupons.module#CouponsModule" },
    { path: "orders", loadChildren: "./orders/orders.module#OrdersModule" },
    { path: "orderDetails", loadChildren: "./orderDetails/orderDetails.module#OrderDetailsModule" }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(
        <any>routes, { preloadingStrategy: PreloadAllModules })],
    exports: [NativeScriptRouterModule]
})


export class AppRoutingModule { }
