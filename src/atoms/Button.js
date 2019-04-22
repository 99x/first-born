import React, { Component } from "react";
import { TouchableOpacity, StyleSheet, Platform, Image } from "react-native";
import PropTypes from "prop-types";
import { Icon } from "./Icon";
import {
    getFontSize,
    getButtonPadding,
    getRoundRadius,
    getIconSize
} from "../variables/buttonSizeVariables";
import { commonColors } from "../utils/color";
import { Text } from "./Text";

export class Button extends Component {
    render() {
        const {
            color,
            rounded,
            outline,
            block,
            size,
            secondary,
            transparent,
            circle,
            style,
            ...otherProps
        } = this.props;

        const buttonColor = secondary ? commonColors.secondary : color;

        const buttonPadding = getButtonPadding(size);
        const fontSize = getFontSize(size);
        const radiusSize = getRoundRadius(size);

        let buttonStyle = [styles.defaultButton];
        let iconSize = getIconSize(size);
        let textStyle;
        let iconColor;

        if (block) {
            buttonStyle.push(styles.blockButton);
        }

        if (rounded) {
            buttonStyle.push({
                paddingHorizontal: buttonPadding + buttonPadding / 3,
                borderRadius: radiusSize
            });
        }

        if (circle) {
            buttonStyle.push({
                width: (radiusSize + buttonPadding) * 2,
                height: (radiusSize + buttonPadding) * 2,
                borderRadius: radiusSize + buttonPadding,
                padding: buttonPadding / 2
            });
            iconSize += buttonPadding / 2;
        }

        if (outline) {
            textStyle = { color: buttonColor, fontSize: fontSize, margin: 0 };
            buttonStyle.push({
                borderColor: buttonColor,
                borderWidth: 1,
                padding: buttonPadding
            });
            iconColor = buttonColor;
        } else {
            textStyle = {
                color: commonColors.white,
                fontSize: fontSize,
                margin: 0
            };
            buttonStyle.push({
                backgroundColor: buttonColor,
                padding: buttonPadding
            });
            iconColor = commonColors.white;
        }

        if (transparent) {
            buttonStyle.push(styles.transparent);
        }

        const children = React.Children.map(this.props.children, child =>
            child && child.type === Text
                ? React.cloneElement(child, {
                    ...child.props,
                    style: { ...textStyle, ...child.props.style }
                })
                : child && child.type === Icon
                    ? React.cloneElement(child, {
                        ...child.props,
                        size: iconSize,
                        color: iconColor,
                        style: { ...child.props.style, paddingRight: 5 }
                    })
                    : child && child.type === Image
                        ? React.cloneElement(child, {
                            ...child.props,
                            style: {
                                ...child.props.style,
                                width: 25,
                                height: 25,
                                paddingRight: 5
                            }
                        })
                        : null
        );

        return (
            <TouchableOpacity
                ref={c => (this._root = c)}
                style={[buttonStyle, style]}
                {...otherProps}
            >
                {children}
            </TouchableOpacity>
        );
    }
}

Button.propTypes = {
    rounded: PropTypes.bool,
    outline: PropTypes.bool,
    block: PropTypes.bool,
    color: PropTypes.string,
    transparent: PropTypes.bool,
    circle: PropTypes.bool,
    size: PropTypes.oneOf(["small", "default", "large"]),
    ...TouchableOpacity.propTypes
};

Button.defaultProps = {
    color: commonColors.primary,
    size: "default",
    rounded: false,
    outline: false,
    block: false,
    transparent: false,
    circle: false
};

const styles = StyleSheet.create({
    text: {
        color: commonColors.white
    },
    defaultButton: {
        ...Platform.select({
            android: {
                borderRadius: 5,
                elevation: 3
            },
            ios: {
                borderRadius: 10,
                shadowOffset: { width: 3, height: 3 },
                shadowOpacity: 0.3,
                shadowRadius: 3
            }
        }),
        margin: 10,
        shadowColor: "#000",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    blockButton: {
        width: "100%"
    },
    transparent: {
        borderWidth: 0,
        backgroundColor: "transparent",
        borderRadius: 0,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0,
        shadowRadius: 0,
        elevation: 0
    }
});
