import { NativeScriptCommonModule } from '@nativescript/angular';
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { HeaderComponent } from "./components/header.component";


@NgModule({
    imports: [NativeScriptCommonModule],
    declarations: [HeaderComponent],
    schemas: [NO_ERRORS_SCHEMA],
    exports: [HeaderComponent]
})

export class HeaderModule { }