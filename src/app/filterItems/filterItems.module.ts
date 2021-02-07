import { FilterItemsRoutingModule } from './filterItems-routing.module';
import { FilterItemsComponent } from './component/filterItems.component';


import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { NativeScriptCommonModule } from "@nativescript/angular";
import { NativeScriptFormsModule } from "@nativescript/angular";
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular";



@NgModule({
    bootstrap: [
        FilterItemsComponent
    ],
    imports: [
        NativeScriptCommonModule,
        NativeScriptFormsModule,
        HttpClientModule,
        FilterItemsRoutingModule,
        NativeScriptUIListViewModule
    ],
    declarations: [
        FilterItemsComponent

    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})

export class FilterItemsModule{ }
