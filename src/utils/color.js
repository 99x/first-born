import React, { Component } from "react";
import { Platform } from "react-native";

export const commonColors = {
    white: "#FFF",
    black: "#000",
    primary: "#486c86",
    secondary: "#8dd9d5",
    error: "#e74c3c",
    inputGrey: "rgba(33, 33, 33, 0.5)",
    darkGrey: "rgba(33, 33, 33, 0.87)",
    lightGrey: "rgba(33, 33, 33, 0.4)",
    overlay: "rgba(68, 68, 68, 0.6)",
    ...Platform.select({
        android: {
            secondaryBackground: "rgba(125, 167, 217, 0.2)"
        },
        ios: {
            secondaryBackground: "#ecf8fa"
        }
    })
};

export function shadeColor(color, percent) {
    let R = parseInt(color.substring(1, 3), 16);
    let G = parseInt(color.substring(3, 5), 16);
    let B = parseInt(color.substring(5, 7), 16);

    R = parseInt((R * (100 + percent)) / 100, 0); // eslint-disable-line
    G = parseInt((G * (100 + percent)) / 100, 0); // eslint-disable-line
    B = parseInt((B * (100 + percent)) / 100, 0); // eslint-disable-line

    R = R < 255 ? R : 255;
    G = G < 255 ? G : 255;
    B = B < 255 ? B : 255;

    const RR =
        R.toString(16).length === 1 ? `0${R.toString(16)}` : R.toString(16);
    const GG =
        G.toString(16).length === 1 ? `0${G.toString(16)}` : G.toString(16);
    const BB =
        B.toString(16).length === 1 ? `0${B.toString(16)}` : B.toString(16);

    return `#${RR}${GG}${BB}`;
}
