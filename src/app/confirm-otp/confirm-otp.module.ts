import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { ConfirmOtpComponent } from "./components/confirm-otp.component";
import { ConfirmOtpRoutingModule } from "./confirm-otp-routing.module";


@NgModule({
    bootstrap: [
        ConfirmOtpComponent
    ],
    imports: [
        NativeScriptCommonModule,
        NativeScriptFormsModule,
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
