import {
    Platform,
    TouchableOpacity,
    TouchableNativeFeedback,
    TouchableOpacityProps,
    TouchableNativeFeedbackProps
} from "react-native";
import { ComponentType } from "react";

import { shadeColor } from "./color";

export function getTouchableComponent(
    useNativeFeedback: boolean = true
): ComponentType<TouchableOpacityProps | TouchableNativeFeedbackProps> {
    if (useNativeFeedback === true && Platform.OS === "android") {
        return TouchableNativeFeedback;
    }
    return TouchableOpacity;
}

export function getRippleProps(
    color: string,
    useNativeFeedback: boolean = true
) {
    // less than API 21 don't support Ripple
    if (
        useNativeFeedback === true &&
        Platform.OS === "android" &&
        Platform.Version >= 21
    ) {
        return {
            background: TouchableNativeFeedback.Ripple(
                shadeColor(color, -30),
                true
            )
        };
    }
    return {};
}
