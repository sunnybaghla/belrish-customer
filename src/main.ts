// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic } from "@nativescript/angular";
import { enableProdMode } from "@angular/core";
import { AppModule } from "./app/app.module";
import { firebase } from "@nativescript/firebase";

firebase.init();
// firebase.init({
//     // persist: false,

//     // storageBucket: 'gs://belrish-store.appspot.com'

//     // Optionally pass in properties for database, authentication and cloud messaging,
//     // see their respective docs.
// }).then(
//     () => {
//         console.log("firebase.init done");
//     },
//     error => {
//         console.log(`firebase.init error: ${error}`);
//     }
// );

enableProdMode();

// A traditional NativeScript application starts by initializing global objects,
// setting up global CSS rules, creating, and navigating to the main page.
// Angular applications need to take care of their own initialization:
// modules, components, directives, routes, DI providers.
// A NativeScript Angular app needs to make both paradigms work together,
// so we provide a wrapper platform object, platformNativeScriptDynamic,
// that sets up a NativeScript application and can bootstrap the Angular framework.
platformNativeScriptDynamic().bootstrapModule(AppModule);
