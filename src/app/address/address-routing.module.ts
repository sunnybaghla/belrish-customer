import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from '@nativescript/angular';
import { NgModule } from '@angular/core';
import { AddressComponent } from './components/address.component';

const routes: Routes = [
    { path: "", component: AddressComponent},
];


@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})


export class AddressRoutingModule { }
