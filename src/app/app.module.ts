import { ModalDialogService } from 'nativescript-angular/modal-dialog';
// import { ModalComponent } from './modal/modal.component';

import { HomeRoutingModule } from './home/home-routing.module';
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { UserService } from "./services/user.service";
import { NativeScriptUIDataFormModule } from "nativescript-ui-dataform/angular";
import { FormsModule } from '@angular/forms';




@NgModule({
   bootstrap: [
      AppComponent
   ],
   imports: [
      NativeScriptModule,
      AppRoutingModule,
      HttpClientModule,
      NativeScriptUIDataFormModule,
      FormsModule
   ],
   declarations: [
      AppComponent
   ],
   providers: [
      UserService,
      ModalDialogService
   ],
   schemas: [
      NO_ERRORS_SCHEMA
   ]
})
export class AppModule { }
