import { CouponsComponent } from './components/coupons.component';
import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "@nativescript/angular";
import { Routes } from "@angular/router";


const routes: Routes = [
    { path: "", component: CouponsComponent},
];


@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})


export class CouponsRoutingModule { }
