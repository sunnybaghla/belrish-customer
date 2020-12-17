
import { CouponsComponent } from './components/coupons.component';



import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { CardView } from '@nstudio/nativescript-cardview';
import { registerElement } from 'nativescript-angular';
import { CouponsRoutingModule } from './coupons-routing.module';



registerElement('CardView', () => CardView as any);





@NgModule({
    bootstrap: [
        CouponsComponent
    ],
    imports: [
        NativeScriptCommonModule,
        NativeScriptFormsModule,
        HttpClientModule,
        CouponsRoutingModule
    ],
    declarations: [
        CouponsComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})

export class CouponsModule { }
