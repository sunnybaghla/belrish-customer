import { ViewChild, ElementRef, Component, AfterViewInit, OnInit } from "@angular/core";
import { RouterExtensions } from "@nativescript/angular";
import { ActivatedRoute } from "@angular/router";
import { NavigationExtras } from "@angular/router";
import { from } from "rxjs";
import { Page } from "@nativescript/core";

@Component({
    selector: "ns-login",
    templateUrl: "./login.component.html",
    styleUrls: ['login.component.css'],
})

export class LoginComponent implements AfterViewInit, OnInit {
    @ViewChild("loginTextField", { static: false }) loginTextField: ElementRef;
    btnValue: string = "true";
    mobno: string;
    status: boolean;
    mobile: number;
    headingLabel: string;
    countryCode: string;

    constructor(private routerExtensions: RouterExtensions, private route: ActivatedRoute, private page: Page) {
        this.page.actionBarHidden = true;
    }

    ngOnInit(): void {
        this.headingLabel = "Enter your mobile number";
        this.countryCode = "+91";
        this.mobno = "";
        this.status = false;
        this.route.queryParams.subscribe(params => {
            this.mobno = params["mobno"];
            
        })
    }

    ngAfterViewInit(): void {
        setTimeout(() => {
            this.loginTextField.nativeElement.focus();
        }, 600)
    }

    public onLogin() {

        let navigationExtras: NavigationExtras = {
            queryParams: {
                "mobno": this.countryCode + " " + this.mobno
            }
        };
        this.routerExtensions.navigate(["/confirmOtp"], navigationExtras)
    }

    public onFocus(input) {
        if (input.length == 10) {
            this.status = true;
        }
        else
            this.status = false;
    }
}