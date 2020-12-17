import { FloatLabel } from '../float-label/float-label.component';
import { from } from 'rxjs';
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { AddAddressRoutingModule } from './addAddress-routing.module';
import { NativeScriptUIDataFormModule } from "nativescript-ui-dataform/angular";
import { AddAddressComponent } from './components/addAddress.component';

@NgModule({
    bootstrap: [
        AddAddressComponent
    ],
    imports: [
        NativeScriptCommonModule,
        NativeScriptFormsModule,
        HttpClientModule,
        AddAddressRoutingModule,
        NativeScriptUIDataFormModule
    ],
    declarations: [
        AddAddressComponent,
        FloatLabel
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})

export class AddAddressModule { }
