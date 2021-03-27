import { ScreenDimensions } from './../../shared/ScreenDimensions';
import { OnInit, Component, AfterContentInit } from '@angular/core';
import { firestore, storage } from "@nativescript/firebase";
import { Apphomepageinterface } from '../../shared/apphomepageinterface';
const firebase = require("@nativescript/firebase/app");
import { Observable } from "rxjs";
import { RouterExtensions } from '@nativescript/angular';
import { Color, ObservableArray, Page } from '@nativescript/core';
import { FirestoreService } from '../../services/firestore.service';

declare const android: any;
declare const CGSizeMake: any;

@Component({
    selector: "ns-home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterContentInit {
    list: Observable<Apphomepageinterface>;
    myList: Observable<Array<Apphomepageinterface>>;
    private list1: Apphomepageinterface;
    listes: Array<Apphomepageinterface> = [];
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
    occassionHeading: string;
    screenHeight: number;
    screenWidth: number;
    categories2: any = [];
    tempImg = [];
    topTrendyHeading: string;
    browseCategoryHeading: string;

    // private byCategorycoll: AngularFirestoreCollection<Apphomepageinterface>;
    categories: Observable<Apphomepageinterface[]>;
    // fileRef: AngularFireStorageReference;
    catPhotoImg = [];
    //top 
    topCollection;
    topImg = [];
    topList: any;
    //sliderphoto
    sliderCollection;
    sliderImg = [];
    sliderList = [];

    //browse by categories
    categoriesCollection;
    categoriesImg = [];
    categoriesList = [];
    //box 4container
    box4Collection;
    box4Img = [];
    box4List = [];
    //cakes by flavour
    byFlavourCollection;
    byflavourImg = [];
    byFlavourList = [];
    //byoccasion
    byOccasionCollection;
    byOccasionImg = [];
    byOccasionList = [];
    topTrendy: any;
    citiesCollection = firebase.firestore().collection("home").doc("box4").collection("box4");
    cityList: ObservableArray<({ city: string })>
    firestoreService: FirestoreService;

    constructor(private routerExtensions: RouterExtensions, private page: Page,) {
        this.screenHeight = ScreenDimensions.getheight(100);
        this.screenWidth = ScreenDimensions.getwidth(100);
        this.topCollection = firestore.collection("home").doc("byCategory").collection("byCategory");
        this.categoriesCollection = firebase.firestore().collection("home").doc("byCategory").collection("byCategory");
        this.box4Collection = firebase.firestore().collection("home").doc("box4").collection("box4");
        this.byFlavourCollection = firebase.firestore().collection("home").doc("byflavour").collection("byflavour");
        this.byOccasionCollection = firebase.firestore().collection("home").doc("byOccasion").collection("byOccasion");
        this.sliderCollection = firebase.firestore().collection("home").doc("slider").collection("slider");
        //   console.log(this.categories[0].name);
        this.page.actionBarHidden = true;
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

        this.topList = [];

        this.topTrendy = [
            { imgpath: 'res://gallery' },
            { imgpath: 'res://gallery' },
            { imgpath: 'res://gallery' },
            { imgpath: 'res://gallery' },
        ]

        // this.topList = [
        //     { image: 'res://slider2', name: 'Flower' },
        //     { image: 'res://slider2', name: 'Wooden' },
        //     { image: 'res://slider2', name: 'Sublimation' },
        //     { image: 'res://slider2', name: 'Cake' },
        //     { image: 'res://slider2', name: 'Handicraft' },
        //     { image: 'res://slider2', name: 'Painting' }
        // ]

        // this.sliderImg = [
        //     { imgpath: "res://slider2" },
        //     { imgpath: "res://slider2" },
        //     { imgpath: "res://slider2" },
        //     { imgpath: "res://slider2" },
        // ];

        this.categoriesImg = [];

        this.catPhotoImg = [{ name: "ghgh asdghg" }];

        // this.citiesCollection.get().then(querySnapshot => {
        //     querySnapshot.forEach(doc => {

        //         console.log(`${id} => ${JSON.stringify(data)}`);
        //         // return {id,...data}
        //     });
        //   });
        // this.citiesCollection.get().then((querySnapshot: firestore.QuerySnapshot) => {
        //     const li = [];
        //     querySnapshot.forEach(doc => {
        //         var dataTosave = doc.data();
        //         dataTosave.id = doc.id;
        //         li.push(dataTosave);
        //         storage.getDownloadUrl({
        //             bucket: 'gs://belrish-store.appspot.com',
        //             remoteFullPath: li[li.length - 1].imgpath,
        //         }).then(remoteURL => {
        //             this.tempImg.push(remoteURL);
        //             console.log("Remote URL: " + remoteURL);
        //         }).catch(error => {
        //             console.log("Error: " + error);
        //         })
        //         console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
        //     });
        //     this.catPhotoImg = li;
        // }).catch(err => console.log("Get failed, error" + err));

        this.topCollection.get().then((querySnapshot: firestore.QuerySnapshot) => {
            querySnapshot.forEach(doc => {
                // var dataTosave = doc.data();
                // dataTosave.id = doc.id;
                // this.topList.push(dataTosave);
                this.topList.push(doc.data());
            });
        }).catch(err => console.log("Get failed, error" + err));

        // var topCollection = this.firestoreService.getData(this.topCollection);
        // console.log("TOPCOLLECTION::::;", topCollection);

        this.box4Collection.get().then((querySnapshot: firestore.QuerySnapshot) => {
            querySnapshot.forEach(doc => {
                var dataTosave = doc.data();
                dataTosave.id = doc.id;
                this.box4List.push(dataTosave);
            });
        }).catch(err => console.log("Get failed, error" + err));

        this.categoriesCollection.get().then((querySnapshot: firestore.QuerySnapshot) => {
            querySnapshot.forEach(doc => {
                var dataTosave = doc.data();
                dataTosave.id = doc.id;
                this.categoriesImg.push(dataTosave);
            });
        }).catch(err => console.log("Get failed, error" + err));

        this.byFlavourCollection.get().then((querySnapshot: firestore.QuerySnapshot) => {
            querySnapshot.forEach(doc => {
                var dataTosave = doc.data();
                dataTosave.id = doc.id;
                this.byFlavourList.push(dataTosave);
            });
        }).catch(err => console.log("Get failed, error" + err));

        this.byOccasionCollection.get().then((querySnapshot: firestore.QuerySnapshot) => {
            querySnapshot.forEach(doc => {
                var dataTosave = doc.data();
                dataTosave.id = doc.id;
                this.byOccasionList.push(dataTosave);
            });
        }).catch(err => console.log("Get failed, error" + err));

        this.sliderCollection.get().then((querySnapshot: firestore.QuerySnapshot) => {
            querySnapshot.forEach(doc => {
                var dataTosave = doc.data();
                dataTosave.id = doc.id;
                this.sliderImg.push(dataTosave);
            });
        }).catch(err => console.log("Get failed, error" + err));

        this.isLoading = false;
        this.selectedPage = 0;
        this.sliderImage1 = "res://slider";
        this.sliderImage2 = "res://slider2";

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

    // getDownloadUrl() {
    //     firebase.storage.getDownloadUrl({
    //         // optional, can also be passed during init() as 'storageBucket' param so we can cache it
    //         bucket: 'gs://belrish.appspot.com',
    //         // the full path of an existing file in your Firebase storage
    //         remoteFullPath: 'uploads/images/telerik-logo-uploaded.png'
    //       }).then(
    //           function (url) {
    //             console.log("Remote URL: " + url);
    //           },
    //           function (error) {
    //             console.log("Error: " + error);
    //           }
    //       );

    // }
    // getDownloadUrl2() {
    //     storage.getDownloadUrl({
    //         // optional, can also be passed during init() as 'storageBucket' param so we can cache it
    //         bucket: APPSPOT_BUCKET_URL,
    //         // the full path of an existing file in your Firebase storage
    //         remoteFullPath: 'uploads/images/firebase-storage.png'
    //     }).then(remoteURL => {
    //         console.log("Remote URL: " + remoteURL);
    //         this.message = "Remote URL: " + remoteURL;
    //     }).catch(error => {
    //         console.log("Error: " + error);
    //     })
    // }
    //     getDownloadUrl(filePath) {
    //     firebase.storage.getDownloadUrl({
    //         // optional, can also be passed during init() as 'storageBucket' param so we can cache it
    //         // bucket: APPSPOT_BUCKET_URL,
    //         // the full path of an existing file in your Firebase storage
    //         remoteFullPath: filePath
    //     }).then(remoteURL => {
    //         console.log("Remote URL: " + remoteURL);
    //         // this.message = "Remote URL: " + remoteURL;
    //     }).catch(error => {
    //         console.log("Error: " + error);
    //     })
    // }
    getDownloadUrl2(remoteFilePath: string) {
        // getDownloadUrl() {
        storage.getDownloadUrl({
            // optional, can also be passed during init() as 'storageBucket' param so we can cache it
            // bucket: '',
            bucket: 'gs://belrish-store.appspot.com',

            // the full path of an existing file in your Firebase storage
            remoteFullPath: remoteFilePath
        }).then(remoteURL => {
            console.log("Remote URL: " + remoteURL);
            // return remoteURL
            // this.message = "Remote URL: " + remoteURL;
        }).catch(error => {
            console.log("Error: " + error);
        })
        // }
        // const storageRef = firebase.storage().ref();
        // const childRef = storageRef.child(remoteFilePath);

        // childRef.getDownloadURL()
        //     .then(theUrl => console.log("Download url: " + theUrl))
        //     .catch(error => console.log("Download error: " + error));
    }
    //         // firebase.storage.getDownloadUrl({
    //         //     // optional, can also be passed during init() as 'storageBucket' param so we can cache it
    //         //     bucket: 'gs://n-plugin-test.appspot.com',
    //         //     // the full path of an existing file in your Firebase storage
    //         //     remoteFullPath: 'uploads/images/telerik-logo-uploaded.png'
    //         //   }).then(
    //         //       function (url) {
    //         //         console.log("Remote URL: " + url);
    //         //       },
    //         //       function (error) {
    //         //         console.log("Error: " + error);
    //         //       }
    //         //   );
    //         // return firebase.getDownloadUrl({
    //     //    remoteFullPath: remoteFilePath})
    //     //     .then(
    //     //       function (url:string) {
    //     //         return url;
    //     //       },
    //     //       function (errorMessage:any) {
    //     //         console.log(errorMessage);
    //     //       });
    //         //   var storageRef : firebase.storage().ref("remoteFilePath: string");
    //         //   storageRef.getDownloadURL().then(function(url) {
    //         //     console.log(url);
    //         //   });})
    //   }

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