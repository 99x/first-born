const defaultFontSize = 16
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
}

const roundRadius = {
    small: defaultRoundRadius * 0.8,
    default: defaultRoundRadius,
    large: defaultRoundRadius * 1.3
}

const iconSize = {
    small: defaultIconSize * 0.8,
    default: defaultIconSize,
    large: defaultIconSize * 1.3
}

export function getFontSize(size) {
    switch (size) {
        case "small":
            return fontSizes.small;
        case "default":
            return fontSizes.default;
        case "large":
            return fontSizes.large;
    }
}

export function getButtonPadding(size) {
    switch (size) {
        case "small":
            return buttonPadding.small;
        case "default":
            return buttonPadding.default;
        case "large":
            return buttonPadding.large;
    }
}
export function getRoundRadius(size) {
    switch (size) {
        case "small":
            return roundRadius.small;
        case "default":
            return roundRadius.default;
        case "large":
            return roundRadius.large;
    }
}

export function getIconSize(size) {
    switch (size) {
        case "small":
            return iconSize.small;
        case "default":
            return iconSize.default;
        case "large":
            return iconSize.large;
    }
}