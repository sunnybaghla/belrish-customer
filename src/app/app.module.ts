import { FormsModule } from '@angular/forms';
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { UserService } from "./services/user.service";
import { NativeScriptUIDataFormModule } from "nativescript-ui-dataform/angular";
import { ModalDialogService, NativeScriptModule } from '@nativescript/angular';

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        HttpClientModule,
        NativeScriptUIDataFormModule,
        FormsModule
    ],
    declarations: [
        AppComponent
    ],
    providers: [
        UserService,
        ModalDialogService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
