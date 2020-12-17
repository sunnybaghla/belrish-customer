import { OrderDetailsComponent } from './components/orderDetails.component';


import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

const routes: Routes = [
    { path: "", component: OrderDetailsComponent},
];


@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})


export class OrderDetailsRoutingModule { }
