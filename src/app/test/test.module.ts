import { TestRoutingModule } from './test-routing.module';
import { TestComponent } from './components/test.component';


import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";


import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular";




@NgModule({
    bootstrap: [
        TestComponent
    ],
    imports: [
        NativeScriptCommonModule,
        NativeScriptFormsModule,
        HttpClientModule,
        TestRoutingModule,
        NativeScriptUIListViewModule
    ],
    declarations: [
        TestComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})

export class TestModule { }
