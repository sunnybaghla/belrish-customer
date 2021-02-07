import { ItemDetailsComponent } from './component/item-details.component';




import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "@nativescript/angular";
import { Routes } from "@angular/router";



const routes: Routes = [
    { path: "", component: ItemDetailsComponent},
];


@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})


export class ItemDetailsRoutingModule { }
