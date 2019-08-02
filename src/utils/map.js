import MAP_STYLES, { getMapObject } from "../variables/mapStyle";

/**
 * @param {*} mapStyle - 'string' - one of predefined style name from following
 * light, greynight, dark, silver, aubergine
 * 
 */
export function getMapStyles(mapStyle) {
    return MAP_STYLES[mapStyle];
}
