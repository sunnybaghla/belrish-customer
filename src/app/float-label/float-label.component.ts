import { Component, ElementRef, Input, ViewChild } from "@angular/core";
import { Color } from "tns-core-modules/color";

@Component({
    selector: "FloatLabel",
    moduleId: module.id,
    template: `
        <GridLayout rows="30, auto" marginBottom="1" >
            <Label #label row="1" [text]="placeholder" opacity="0.4" fontSize="12"   class="input" padding="1"></Label>
            <TextField #textField [secure]="secure" row="1"  (focus)="onFocus()" (blur)="onBlur()" borderBottomWidth="1" borderBottomColor="#cec8c8" padding="1"></TextField>
        </GridLayout>
    `
})
export class FloatLabel {
    @Input() placeholder: string;
    @Input() secure: boolean;
    @ViewChild("label",{static:false}) label: ElementRef;
    @ViewChild("textField",{static:false}) textField: ElementRef;

    constructor() {

    }

    ngOnInit(): void {
    }

    onFocus() {
        const label = this.label.nativeElement;
        const textField = this.textField.nativeElement;

        // animate the label sliding up and less transparent.
        label.animate({
            translate: { x: 0, y: - 20 },
            opacity: 1,
        }).then(() => { }, () => { });
                // textField.borderBottomWidth='1';
                
        //  textField.style.border.width='1px';
        // set the border bottom color to green to indicate focus
        textField.borderBottomColor = new Color("black");

    }

    onBlur() {
        const label = this.label.nativeElement;
        const textField = this.textField.nativeElement;

        // if there is text in our input then don't move the label back to its initial position.
        if (!textField.text) {
            label.animate({
                translate: { x: 0, y: 0 },
                opacity: 0.4
            }).then(() => { }, () => { });
        }
        // reset border bottom color.
        textField.borderBottomColor = new Color('#cec8c8');
    }
}
