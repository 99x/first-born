import { SizeStringsTypes, SizeShapeTypes } from "../types";

const defaultFontSize: number = 16;
const defaultButtonPadding: number = 10;
const defaultRoundRadius: number = 20;
const defaultIconSize: number = 20;

const fontSizes: SizeStringsTypes = {
    small: defaultFontSize * 0.8,
    default: defaultFontSize,
    large: defaultFontSize * 1.3
};

const buttonPadding: SizeStringsTypes = {
    small: defaultButtonPadding * 0.8,
    default: defaultButtonPadding,
    large: defaultButtonPadding * 1.3
};

const roundRadius: SizeStringsTypes = {
    small: defaultRoundRadius * 0.8,
    default: defaultRoundRadius,
    large: defaultRoundRadius * 1.3
};

const iconSize: SizeStringsTypes = {
    small: defaultIconSize * 0.8,
    default: defaultIconSize,
    large: defaultIconSize * 1.3
};

export function getFontSize(size: SizeShapeTypes) {
    return fontSizes[size];
}

export function getButtonPadding(size: SizeShapeTypes) {
    return buttonPadding[size];
}
export function getRoundRadius(size: SizeShapeTypes) {
    return roundRadius[size];
}

export function getIconSize(size: SizeShapeTypes) {
    return iconSize[size];
}
