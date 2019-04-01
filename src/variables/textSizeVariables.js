import React, { Component } from "react";
import { Platform } from "react-native";

const fontSizes = {
    ...Platform.select({
        android: {
            h1: 96,
            h2: 60,
            h3: 48,
            h4: 34,
            h5: 24,
            h6: 20,
            p: 16,
            callout: 15,
            sub_heading: 14,
            footnote: 13,
            caption_big: 12,
            caption_small: 11
        },
        ios: {
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
        }
    })
};

export function getFontSize(size) {
    return fontSizes[size];
}
