import { HomeComponent } from './components/home.component';
import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

    import { from } from 'rxjs';


const routes: Routes = [
    { path: "", component: HomeComponent},
];


@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})


export class HomeRoutingModule { }
