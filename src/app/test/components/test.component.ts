import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ImageAsset } from '@nativescript/core';

import * as imagepicker from 'nativescript-imagepicker';


@Component({
    selector: 'ns-test',
    templateUrl: './test.component.html',
    styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
msg:any;
        ht:number=0;
    // persArr:{lbl:{count:number,lblinfo:{heading:string,input:string,maxcount:number}[]}[],listpick:{count:number,listpickinfo:{heading:string,input:string,maxcount:number}}[]}[]=[];
    fullView: boolean;
    fullViewImg: number;
    editImge: boolean;
    dis:boolean;
    editIndex: number;
    imgFull: boolean;
    isBusy: boolean = false;
    remainImg: number;
    index;
    imgArray = [];
    cameraImage: ImageAsset;
    
    
    desctImg:string;

    imageAssets = [];
    imageSrc: any;
    isSingleMode: boolean = true;
    previewSize: number = 600;
    imageDetails: { totalImage: number, totalTextField: { heading: String, maxcount:number,input:string}[], totalListPicker: {heading:string,input:any,values:{}[]}[] }[] = [];

    // constructor() {
    //     this.imageDetails.push({
    //         totalImage: 5,
    //         totalTextField: [{ heading: "Enter the First Name", maxCount: 4 }, { heading: "Enter the Second Name", maxCount: 4 }],
    //         totalListPicker: [{ option: "a" }, { option: "b" }]
    //     });
    // }

    constructor() {
        this.imageDetails.push({
            totalImage: 5,
            totalTextField: [{ heading: "Enter the First Name",input:undefined, maxcount: 4},{ heading: "Enter the First Name",input:undefined, maxcount: 4 }, { heading: "Enter the Second Name",input:undefined, maxcount: 6 }],
            totalListPicker: [{heading:"Occasion",input:undefined,values:["anniversary","birthday"]},{heading:"First Letter",input:undefined,values:["a","b"]}]
        });
        this.msg="";
        this.dis=false;
        this.ht=this.imageDetails[0].totalTextField.length*75;
        this.imgFull = true;
        this.remainImg = this.imageDetails[0].totalImage;
        this.editImge = false;
        this.fullView = false;
        //  this.imgArray.push("http://www.clker.com/cliparts/H/5/5/w/s/Q/edit-button-blue-hi.png","jnkjnjknj");

        this.desctImg="askba akjsjb as ir ia  a ans asin adif adfnasfnia safna fasnf asnf askfnsafasnfasnfdsnfd ns fn dfndjf dfndin i rn ssand a dfnr r r r   ad fa a f rnfr f rf r"
    }

    ngOnInit() {

    }

    uploadFromgallery() {
        let context = imagepicker.create({
            mode: 'multiple'
        });
        this.startSelection(context);
    }
    private startSelection(context) {
        context
            .authorize()
            .then(() => {
                this.imageAssets = [];
                this.imageSrc = null;
                return context.present();
            })
            .then(selection => {
                this.index = this.imgArray.length;
                selection.forEach(select => {
                    // this.imageSrc = select;
                    if (this.editImge == false) {
                        this.imgArray.push(select);

                        this.remainImg = this.remainImg - 1;
                    }
                    else {
                        this.imgArray[this.editIndex] = select;
                        this.editImge = false;
                    }



                    // let options = {
                    //     width: this.previewSize,
                    //     heigth: this.previewSize
                    // };
                    // this.imageSrc.options = options;
                    // this.imageSrc.keepAspectRatio = false;
                    // this.cameraImage = this.imageSrc;

                    // this.imageUpload(
                    //     select._android,
                    //     this.cameraImage,
                    //     'fromGallery'
                    // );
                });
            })
            .catch(function (e) {
                console.log('catc gery', e);
            });
    }
    
                
    
    OnfullView(i) {
        this.fullView = true;
        this.fullViewImg = i;

    }
    onNotFullView() {
        this.fullView = false;
    }
    checkUpload()
    {
        if(this.imgArray.length===0)
        {
            return false;
        }
        else return true;
    }
    checkForm()
    {
        if(this.imageDetails[0].totalImage==this.imgArray.length)
        {
            
        }
        else this.msg="Please Upload All Photos";

        for(var i=0;i<this.imageDetails[0].totalTextField.length;i++)
        {
            if (this.imageDetails[0].totalTextField[i].input==undefined) {
                this.msg="Please Fill All The Fields";
                
            }
        }
        

    }
    checkError()
    {
        if (this.msg=="") 
        { return false;
            
        }
        else return true;
    }

    checkTotalImg(i) {

        if (this.imageDetails[0].totalImage >= i + 1) {

            return true;


        }
        else {
            this.imgFull = false;
            return false;
        }
    }
    txtFldInput(i,index)
    {
        this.imageDetails[0].totalTextField[index].input=i;
        this.msg=i;
    }
    onEdit(i) {
        this.editImge = true;
        this.editIndex = i;
        this.uploadFromgallery();

    }
    chkTxt()
    {
        if (this.imageDetails[0].totalTextField.length===0) {
            return false;
            
        }
        else return true;
    }
    chkListInput()
    {
        if (this.imageDetails[0].totalListPicker.length===0) {
            return false;
            
        }
        else return true;
    }
    chkImgGird()
    {
        if (this.imageDetails[0].totalImage==0) {
            return false;
            
        }
        else return true;
    }
    // constructor() {

    //     this.imageDetails.push({
    //         totalImage: 5,
    //         totalTextField: [{ heading: "Enter the First Name",input:undefined, maxcount: 4},{ heading: "Enter the First Name",input:undefined, maxcount: 4 }, { heading: "Enter the Second Name",input:undefined, maxcount: 6 }],
    //         totalListPicker: [{heading:"Occasion",input:undefined,values:["anniversary","birthday"]},{heading:"First Letter",input:undefined,values:["a","b"]}]

    //     if (this.imageDetails[0].totalImage >= i + 1) {

    //     });
    //     this.msg="";
    //     this.dis=false;
    //     this.ht=this.imageDetails[0].totalTextField.length*75;
    //     this.imgFull = true;
    //     this.remainImg = this.imageDetails[0].totalImage;
    //     this.editImge = false;
    //     this.fullView = false;
    //     //  this.imgArray.push("http://www.clker.com/cliparts/H/5/5/w/s/Q/edit-button-blue-hi.png","jnkjnjknj");

    //     this.desctImg="askba akjsjb as ir ia  a ans asin adif adfnasfnia safna fasnf asnf askfnsafasnfasnfdsnfd ns fn dfndjf dfndin i rn ssand a dfnr r r r   ad fa a f rnfr f rf r"


        


    // }
    default:number=0;
    pricecount(i)
    {
       this.default=i;
       this.imageDetails[0].totalListPicker[0].input=this.imageDetails[0].totalListPicker[0].values[this.default];
    
    }

    // ngOnInit() {
    // }

}
