
import { ItemListComponent } from './component/itemList.component';
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { ItemListRoutingModule } from './itemList-rouitng.module';
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular";



@NgModule({
    bootstrap: [
        ItemListComponent
    ],
    imports: [
        NativeScriptCommonModule,
        NativeScriptFormsModule,
        HttpClientModule,
        ItemListRoutingModule,
        NativeScriptUIListViewModule
    ],
    declarations: [
        ItemListComponent

    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})

export class ItemListModule{ }
