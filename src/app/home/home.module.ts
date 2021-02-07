import { HeaderModule } from './../shared/header/header.module';
import { FooterModule } from './../shared/footer/footer.module';
import { HomeRoutingModule } from './../home/home-routing.module';
import { HomeComponent } from './components/home.component';
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular";
import { NativeScriptCommonModule, NativeScriptFormsModule } from '@nativescript/angular';

@NgModule({
    bootstrap: [
        HomeComponent
    ],
    imports: [
        NativeScriptCommonModule,
        NativeScriptFormsModule,
        HttpClientModule,
        HomeRoutingModule,
        NativeScriptUIListViewModule,
        FooterModule,
        HeaderModule
    ],
    declarations: [
        HomeComponent

    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})

export class HomeModule { }
