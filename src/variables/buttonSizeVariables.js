const defaultFontSize = 16;
const defaultButtonPadding = 10;
const defaultRoundRadius = 20;
const defaultIconSize = 20;

const fontSizes = {
    small: defaultFontSize * 0.8,
    default: defaultFontSize,
    large: defaultFontSize * 1.3
};

const buttonPadding = {
    small: defaultButtonPadding * 0.8,
    default: defaultButtonPadding,
    large: defaultButtonPadding * 1.3
};

const roundRadius = {
    small: defaultRoundRadius * 0.8,
    default: defaultRoundRadius,
    large: defaultRoundRadius * 1.3
};

const iconSize = {
    small: defaultIconSize * 0.8,
    default: defaultIconSize,
    large: defaultIconSize * 1.3
};

export function getFontSize(size) {
    return fontSizes[size];
}

export function getButtonPadding(size) {
    return buttonPadding[size];
}
export function getRoundRadius(size) {
    return roundRadius[size];
}

export function getIconSize(size) {
    return iconSize[size];
}
