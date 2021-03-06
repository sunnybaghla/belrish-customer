import { OrdersComponent } from './components/orders.component';

import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "@nativescript/angular";
import { Routes } from "@angular/router";

const routes: Routes = [
    { path: "", component: OrdersComponent},
];


@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})


export class OrdersRoutingModule { }
