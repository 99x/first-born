import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export interface DeviceVariables{
    width:number,
    height:number,
    Inset:{
        portrait:{
            topInset:number,
            leftInset:number,
            rightInset:number,
            bottomInset:number,
        },
        landscape:{
            topInset:number,
            leftInset:number,
            rightInset:number,
            bottomInset:number,
        }
    }
}

export const deviceVariables:DeviceVariables = {
    width,
    height,
    Inset: {
        portrait: {
            topInset: 24,
            leftInset: 0,
            rightInset: 0,
            bottomInset: 40
        },
        landscape: {
            topInset: 0,
            leftInset: 44,
            rightInset: 44,
            bottomInset: 21
        }
    }
};
