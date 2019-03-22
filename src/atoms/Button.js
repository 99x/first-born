import React, { Component } from "react";
import { TouchableOpacity, StyleSheet, Platform } from "react-native";
import PropTypes from "prop-types";
import { Icon } from "./Icon";
import { getFontSize, getButtonPadding, getRoundRadius, getIconSize } from "../variables/buttonSizeVariables";
import { commonColors } from "../utils/color";
import { Text } from "./Text";

export class Button extends Component {
    render() {
        const { title, color, rounded, outline, block, size, secondary, ...otherProps } = this.props;

        const buttonColor = secondary ? commonColors.secondary : color;

        let buttonStyle = [styles.defaultButton];
        let iconSize = getIconSize(size);
        let textStyle;
        let iconColor;

        if (block) {
            buttonStyle.push(styles.blockButton);
        }

        if (rounded) {
            buttonStyle.push({ paddingHorizontal: getButtonPadding(size) + (getButtonPadding(size) / 3), borderRadius: getRoundRadius(size) });
        }

        if (outline) {
            textStyle = { color: buttonColor, fontSize: getFontSize(size) };
            buttonStyle.push({ borderColor: buttonColor, borderWidth: 1, padding: getButtonPadding(size) });
            iconColor = buttonColor;
        } else {
            textStyle = { color: commonColors.white, fontSize: getFontSize(size) };
            buttonStyle.push({ backgroundColor: buttonColor, padding: getButtonPadding(size) });
            iconColor = commonColors.white;
        }

        const children = React.Children.map(this.props.children, child => child && child.type === Text ?
            React.cloneElement(child, { style: textStyle, ...child.props }) : child && child.type === Icon ?
                React.cloneElement(child, { color: iconColor, size: iconSize, ...child.props }) :
                child);

        return (
            <TouchableOpacity ref={(c) => this._root = c} style={buttonStyle} {...otherProps}>
                {children}
            </TouchableOpacity>
        )
    }
}

Button.propTypes = {
    rounded: PropTypes.bool,
    outline: PropTypes.bool,
    block: PropTypes.bool,
    title: PropTypes.string,
    color: PropTypes.string,
    size: PropTypes.oneOf(["small", "default", "large"]),
    ...TouchableOpacity.propTypes
}

Button.defaultProps = {
    color: commonColors.primary,
    size: "default"
}

const styles = StyleSheet.create({
    text: {
        color: commonColors.white
    },
    defaultButton: {
        ...Platform.select({
            android: {
                borderRadius: 5,
            },
            ios: {
                borderRadius: 10,
            }
        }),
        margin: 10,
        shadowColor: "#000",
        shadowOffset: { width: 3, height: 3 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 3,
    },
    blockButton: {
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
    }
})
