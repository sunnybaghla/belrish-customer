import { SavedAddressComponent } from './components/savedAddress.component';
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { NativeScriptCommonModule } from "@nativescript/angular";
import { NativeScriptFormsModule } from "@nativescript/angular";
import { SavedAddressRoutingModule } from './savedAddress-routing.module';



@NgModule({
    bootstrap: [
        SavedAddressComponent
    ],
    imports: [
        NativeScriptCommonModule,
        NativeScriptFormsModule,
        HttpClientModule,
        SavedAddressRoutingModule
    ],
    declarations: [
        SavedAddressComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})

export class SavedAddressModule { }
