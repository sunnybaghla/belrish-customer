import { ObservableArray } from 'tns-core-modules/data/observable-array/observable-array';
import { ScreenDimensions } from './../../shared/ScreenDimensions';
import { RouterExtensions } from 'nativescript-angular/router';
import { OnInit, Component, AfterContentInit } from '@angular/core';
import { Page, Color } from 'tns-core-modules/ui/page/page';
// import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
// import { AngularFireStorageReference, AngularFireStorage } from '@angular/fire/storage';
import { Apphomepageinterface } from '../../shared/apphomepageinterface';
// import { map } from 'rxjs/operators';

declare const android: any;
declare const CGSizeMake: any;

@Component({
    selector: "ns-home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterContentInit {

    // isRendering: boolean;
    isLoading: boolean;
    renderingTimeout;
    selectedPage: number;
    sliderImage1: string;
    sliderImage2: string;
    sliderImage3: string;
    sliderImage4: string;
    sendCakesHeading: string;
    specialImage1: string;
    specialImage2: string;
    specialImage3: string;
    specialImage4: string;
    occassionHeading: string;
    screenHeight: number;
    screenWidth: number;
    // categories: any = [];
    topTrendyHeading: string;
    browseCategoryHeading: string;
    // private byCategorycoll: AngularFirestoreCollection<Apphomepageinterface>;
    categories: ObservableArray<Apphomepageinterface[]>;
    // fileRef: AngularFireStorageReference;
    catPhotoImg = [];

    constructor(private routerExtensions: RouterExtensions, private page: Page,) {
        this.page.actionBarHidden = true;
        this.screenHeight = ScreenDimensions.getheight(100);
        this.screenWidth = ScreenDimensions.getwidth(100);
        this.page.on('navigatedTo', (data) => {
            if (data.isBackNavigation) {

            }
        });
        // this.categories = [{ image: 'res://gallery', name: 'Flowers' }, { image: 'res://gallery', name: 'Cakes' }, { image: 'res://gallery', name: 'Combos' }, { image: 'res://gallery', name: 'Gifts' }, { image: 'res://gallery', name: 'Handmade' }];
        // setInterval(() => {
        //     setTimeout(() => {
        //         this.selectedPage++;
        //     }, 6000)
        //     if (this.selectedPage == 3) {
        //         setTimeout(() => {
        //             this.selectedPage = 0;
        //         }, 6000);
        //     }
        // }, 6000);
    }
    ngAfterContentInit(): void {
        // this.renderingTimeout = setTimeout(() => {
        //     this.isRendering = true;
        // }, 5000)
    }
    ngOnInit(): void {
        this.isLoading = false;
        this.selectedPage = 0;
        this.sliderImage1 = "res://slider";
        this.sliderImage2 = "res://slider2";
        this.sliderImage3 = "res://slider3";
        this.sliderImage4 = "res://slider4";
        this.specialImage1 = "res://gallery";
        this.specialImage2 = "res://gallery";
        this.specialImage3 = "res://gallery";
        this.specialImage4 = "res://gallery";
        this.occassionHeading = "Explore by occassions";
        this.sendCakesHeading = "Send cakes by flavour";
        this.topTrendyHeading = "Top Trendy";
        this.browseCategoryHeading = "Browse by categories";

        // this.categories = this.byCategorycoll.snapshotChanges().pipe(
        //     map(actions => actions.map(a => {
        //         const data = a.payload.doc.data() as Apphomepageinterface;
        //         const id = a.payload.doc.id;
        //         this.fileRef = this.storage.ref(data.imgpath);
        //         this.fileRef.getDownloadURL().toPromise().then((url) =>
        //             this.catPhotoImg.push(url)
        //         )
        //         console.log(this.catPhotoImg);
        //         return { id, ...data };
        //     }))
        // );
    }

    protected get shadowColor(): Color {
        return new Color('#888888')
    }

    protected get shadowOffset(): number {
        return 2.0
    }

    onHeaderLoaded(args: any) {
        var headerCard = <any>args.object;
        setTimeout(() => {
            if (headerCard.android) {
                let nativeGridMain = headerCard.android;
                var shape = new android.graphics.drawable.GradientDrawable();
                shape.setShape(android.graphics.drawable.GradientDrawable.RECTANGLE);
                shape.setColor(android.graphics.Color.parseColor('white'));
                shape.setCornerRadius(0)
                nativeGridMain.setBackgroundDrawable(shape);
                nativeGridMain.setElevation(5)
            } else if (headerCard.ios) {
                let nativeGridMain = headerCard.ios;
                nativeGridMain.layer.shadowColor = this.shadowColor.ios.CGColor;
                nativeGridMain.layer.shadowOffset = CGSizeMake(0, this.shadowOffset);
                nativeGridMain.layer.shadowOpacity = 0.5
                nativeGridMain.layer.shadowRadius = 5.0
                nativeGridMain.layer.shadowRadius = 5.0
            }
            // this.changeDetector.detectChanges();
        }, 50)
    }

    onFooterLoaded(args: any) {
        var footerCard = <any>args.object;
        setTimeout(() => {
            if (footerCard.android) {
                let nativeGridMain = footerCard.android;
                var shape = new android.graphics.drawable.GradientDrawable();
                shape.setShape(android.graphics.drawable.GradientDrawable.RECTANGLE);
                shape.setColor(android.graphics.Color.parseColor('white'));
                shape.setCornerRadius(0)
                nativeGridMain.setBackgroundDrawable(shape);
                nativeGridMain.setElevation(5)
            } else if (footerCard.ios) {
                let nativeGridMain = footerCard.ios;
                nativeGridMain.layer.shadowColor = this.shadowColor.ios.CGColor;
                nativeGridMain.layer.shadowOffset = CGSizeMake(0, this.shadowOffset);
                nativeGridMain.layer.shadowOpacity = 0.5
                nativeGridMain.layer.shadowRadius = 5.0
                nativeGridMain.layer.shadowRadius = 5.0
            }
            // this.changeDetector.detectChanges();
        }, 50)
    }

    onCategoryLoaded(args: any) {
        var categoryCard = <any>args.object;
        setTimeout(() => {
            if (categoryCard.android) {
                let nativeGridMain = categoryCard.android;
                var shape = new android.graphics.drawable.GradientDrawable();
                shape.setShape(android.graphics.drawable.GradientDrawable.RECTANGLE);
                shape.setColor(android.graphics.Color.parseColor('white'));
                shape.setCornerRadius(20)
                nativeGridMain.setBackgroundDrawable(shape);
                nativeGridMain.setElevation(5)
            } else if (categoryCard.ios) {
                let nativeGridMain = categoryCard.ios;
                nativeGridMain.layer.shadowColor = this.shadowColor.ios.CGColor;
                nativeGridMain.layer.shadowOffset = CGSizeMake(0, this.shadowOffset);
                nativeGridMain.layer.shadowOpacity = 0.5
                nativeGridMain.layer.shadowRadius = 5.0
                nativeGridMain.layer.shadowRadius = 5.0
            }
            // this.changeDetector.detectChanges();
        }, 10)
    }
}