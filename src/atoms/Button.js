import React, { Component } from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import Icon from "react-native-vector-icons/Ionicons";
import { getFontSize, getButtonPadding, getRoundRadius, getIconSize } from "../variables/sizeVariables";

export class Button extends Component {
    render() {
        const { title, color, rounded, outline, block, size, ...otherProps } = this.props;

        const buttonColor = !color ? "#000" : color;

        const buttonSize = !size ? "default" : size;

        let buttonStyle = [styles.defaultButton];
        let iconSize = getIconSize(buttonSize);
        let textStyle;
        let iconColor;

        if (block) {
            buttonStyle.push(styles.blockButton);
        }

        if (rounded) {
            buttonStyle.push({ paddingHorizontal: getButtonPadding(buttonSize) + (getButtonPadding(buttonSize) / 3), borderRadius: getRoundRadius(buttonSize) });
        }

        if (outline) {
            textStyle = { color: buttonColor, fontSize: getFontSize(buttonSize) };
            buttonStyle.push({ borderColor: buttonColor, borderWidth: 1, padding: getButtonPadding(buttonSize) });
            iconColor = buttonColor;
        } else {
            textStyle = { color: "white", fontSize: getFontSize(buttonSize) };
            buttonStyle.push({ backgroundColor: buttonColor, padding: getButtonPadding(buttonSize) });
            iconColor = "white";
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

const styles = StyleSheet.create({
    text: { color: "#FFF" },
    defaultButton: {
        borderRadius: 2,
        margin: 10
    },
    blockButton: {
        width: "100%",
        borderRadius: 2,
        margin: 10,
        justifyContent: "center",
        alignItems: "center"
    }
})
