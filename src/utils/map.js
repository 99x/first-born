import { getMapObject } from "first-born/src/variables/mapStyle";
import { getMapColor } from "first-born/src/variables/mapColors";

export function getMapStyles(mapStyle) {
    return getMapObject(getMapColor(mapStyle));
}