// import * as screen from 'nativescript/core/platform';

// export class ScreenDimensions {
//     public static screenWidth: screen.widthDIPs;
//     public static screenHeight: screen.heightDIPs;
//     public static getHeight(percentage: number) {
//         return (this.screenHeight * percentage) / 100;
//     }
//     public static getWidth(percentage: number) {
//         return (this.screenWidth * percentage) / 100;
//     }
// }

import { screen } from 'tns-core-modules/platform';

export class ScreenDimensions {

    public static screenWidth = screen.mainScreen.widthDIPs;
    public static screenHeight = screen.mainScreen.heightDIPs;

    public static getheight(percentage: number) {
        return (this.screenHeight * percentage) / 100;
    }

    public static getwidth(percentage: number) {
        return (this.screenWidth * percentage) / 100;
    }
}