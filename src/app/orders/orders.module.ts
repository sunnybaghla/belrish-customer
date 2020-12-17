import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersComponent } from './components/orders.component';


import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";


@NgModule({
    bootstrap: [
            OrdersComponent
    ],
    imports: [
        NativeScriptCommonModule,
        NativeScriptFormsModule,
        HttpClientModule,
        OrdersRoutingModule
    ],
    declarations: [
        OrdersComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})

export class OrdersModule { }
