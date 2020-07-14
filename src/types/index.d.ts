/**
 * Type declarations
 * Before introducing a new type, please check for existing types in the list.
 */

/**
 * Resulting object shape of the size calulation
 */
export interface SizeStringsTypes {
    small: number;
    default: number;
    large: number;
}

/**
 * Size of the button, fontSizes, buttonPadding, roundRadius, iconSize are
 * picked from predefined sizes small, default and large.
 */
export type SizeShapeTypes = "small" | "default" | "large";

/**
 * Resulting object shape for default font identifiers
 */
export interface FontSizeObjTypes {
    h1: number;
    h2: number;
    h3: number;
    h4: number;
    h5: number;
    h6: number;
    p: number;
    callout: number;
    sub_heading: number;
    footnote: number;
    caption_big: number;
    caption_small: number;
}

/**
 * Acceptable font size text identifier.
 */
export type FontTypes =
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "p"
    | "callout"
    | "sub_heading"
    | "footnote"
    | "caption_big"
    | "caption_small";

/**
 * Shape and types of the mobile device screen information.
 */
export interface DeviceVariables {
    width: number;
    height: number;
    Inset: {
        portrait: {
            topInset: number;
            leftInset: number;
            rightInset: number;
            bottomInset: number;
        };
        landscape: {
            topInset: number;
            leftInset: number;
            rightInset: number;
            bottomInset: number;
        };
    };
}
