import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { NgModule } from '@angular/core';

import { AddAddressComponent } from "./components/addAddress.component";

const routes: Routes = [
    { path: "", component: AddAddressComponent},
];


@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})


export class AddAddressRoutingModule { }
