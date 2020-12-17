import { AddressComponent } from './components/address.component';
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { AddressRoutingModule } from './address-routing.module';



@NgModule({
    bootstrap: [
        AddressComponent
    ],
    imports: [
        NativeScriptCommonModule,
        NativeScriptFormsModule,
        HttpClientModule,
        AddressRoutingModule
    ],
    declarations: [
        AddressComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})

export class AddressModule { }
