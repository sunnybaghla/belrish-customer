
import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './components/cart.component';
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { NativeScriptCommonModule, registerElement } from "@nativescript/angular";
import { NativeScriptFormsModule } from "@nativescript/angular";
import { CardView } from '@nstudio/nativescript-cardview';



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
