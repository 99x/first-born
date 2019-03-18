const fontSizes = {
    h1: 34,
    h2: 28,
    h3: 24,
    h4: 22,
    h5: 20,
    h6: 17,
    p: 16,
    callout: 16,
    sub_heading: 15,
    footnote: 13,
    caption_big: 12,
    caption_small: 11
};

export function getFontSize(size) {
    return fontSizes[size];
}