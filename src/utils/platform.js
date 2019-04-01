import { Platform } from "react-native";
import { deviceVariables } from "../variables/deviceVariables";

export function isIphoneX() {
    return (
        Platform.OS === "ios" &&
        !Platform.isPad &&
        !Platform.isTVOS &&
        (deviceVariables.height === 812 || deviceVariables.width === 812)
    );
}
