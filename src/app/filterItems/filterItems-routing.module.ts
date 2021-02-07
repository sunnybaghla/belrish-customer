import { FilterItemsComponent } from './component/filterItems.component';




import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "@nativescript/angular";
import { Routes } from "@angular/router";



const routes: Routes = [
    { path: "", component: FilterItemsComponent},
];


@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})


export class FilterItemsRoutingModule { }
