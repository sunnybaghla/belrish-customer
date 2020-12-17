import { OrderDetailsRoutingModule } from './orderDetails-routing.module';
import { OrderDetailsComponent } from './components/orderDetails.component';



import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";


@NgModule({
    bootstrap: [
            OrderDetailsComponent
    ],
    imports: [
        NativeScriptCommonModule,
        NativeScriptFormsModule,
        HttpClientModule,
        OrderDetailsRoutingModule
    ],
    declarations: [
        OrderDetailsComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})

export class OrderDetailsModule { }
