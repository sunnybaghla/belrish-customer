import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { ConfirmOtpComponent } from "./components/confirm-otp.component";
import { ConfirmOtpRoutingModule } from "./confirm-otp-routing.module";
import { NativeScriptCommonModule } from "@nativescript/angular";


@NgModule({
    bootstrap: [
        ConfirmOtpComponent
    ],
    imports: [
        NativeScriptCommonModule,
        NativeScriptCommonModule,
        HttpClientModule,
        ConfirmOtpRoutingModule,
    ],
    declarations: [
        ConfirmOtpComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})

export class ConfirmOtpModule { }
