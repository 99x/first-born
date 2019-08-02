import MAP_STYLES, { getMapObject } from "../variables/mapStyle";
import { getMapColor } from "../variables/mapColors";

export function getMapStyles(mapStyle) {
    return MAP_STYLES[mapStyle];
    // return getMapObject(getMapColor(mapStyle));
}