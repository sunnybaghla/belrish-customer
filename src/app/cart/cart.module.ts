
import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './components/cart.component';
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { CardView } from '@nstudio/nativescript-cardview';
import { registerElement } from 'nativescript-angular';



registerElement('CardView', () => CardView as any);





@NgModule({
    bootstrap: [
        CartComponent
    ],
    imports: [
        NativeScriptCommonModule,
        NativeScriptFormsModule,
        HttpClientModule,
        CartRoutingModule
    ],
    declarations: [
        CartComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})

export class CartModule { }
