import { ItemDetailsRoutingModule } from './item-details-routing.module';
import { ItemDetailsComponent } from './component/item-details.component';


import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular";



@NgModule({
    bootstrap: [
        ItemDetailsComponent
    ],
    imports: [
        NativeScriptCommonModule,
        NativeScriptFormsModule,
        HttpClientModule,
        ItemDetailsRoutingModule,
        NativeScriptUIListViewModule
    ],
    declarations: [
        ItemDetailsComponent

    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})

export class ItemDetailsModule{ }
