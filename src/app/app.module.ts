import { FormsModule } from '@angular/forms';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';
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
const firebase = require("nativescript-plugin-firebase");

firebase.init({
   // persist: false,

   // storageBucket: 'gs://belrish-store.appspot.com'

  // Optionally pass in properties for database, authentication and cloud messaging,
  // see their respective docs.
}).then(
  () => {
    console.log("firebase.init done");
  },
  error => {
    console.log(`firebase.init error: ${error}`);
  }
);


// firebase.initializeApp({
//    persist: false
//  });




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
