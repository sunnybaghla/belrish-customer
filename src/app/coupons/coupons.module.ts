
import { CouponsComponent } from './components/coupons.component';



import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { NativeScriptCommonModule, registerElement } from "@nativescript/angular";
import { NativeScriptFormsModule } from "@nativescript/angular";
import { CardView } from '@nstudio/nativescript-cardview';
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
