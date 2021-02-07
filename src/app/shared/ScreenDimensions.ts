import { Screen } from '@nativescript/core/platform';

export class ScreenDimensions {

    public static screenWidth = Screen.mainScreen.widthDIPs;
    public static screenHeight = Screen.mainScreen.heightDIPs;

    public static getheight(percentage: number) {
        return (this.screenHeight * percentage) / 100;
    }

    public static getwidth(percentage: number) {
        return (this.screenWidth * percentage) / 100;
    }
}