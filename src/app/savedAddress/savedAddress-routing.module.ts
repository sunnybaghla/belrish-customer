import { NgModule } from '@angular/core';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { Routes } from '@angular/router';
import { SavedAddressComponent } from './components/savedAddress.component';


const routes: Routes = [
    { path: "", component: SavedAddressComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})


export class SavedAddressRoutingModule { }
