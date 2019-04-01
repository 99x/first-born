import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const deviceVariables = {
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
