import React, { Component } from "react";
import { TextInput, StyleSheet, Platform, Keyboard, View } from "react-native";
import PropTypes from "prop-types";

import { commonColors } from "../utils/color";
import { Text } from "./Text";
import { Icon } from "./Icon";

export class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            focused: false,
            error: false,
            text: ""
        };
    }

    handleTextChange = text => {
        const { isValid, onChangeText } = this.props;
        this.setState({ text: text });

        if (onChangeText) {
            onChangeText(text);
        }

        if (isValid) {
            this.setState({ error: !isValid(text) });
        }
    };

    render() {
        const {
            errorMessage,
            color,
            noStyle,
            rounded,
            underline,
            defaultStyle,
            style,
            activeStyle,
            errorStyle,
            errorColor,
            iconLeft,
            iconRight,
            ...otherProps
        } = this.props;
        const { error, focused } = this.state;

        let inputStyle = [styles.input];
        let inputActiveStyle = [styles.input];
        let inputErrorStyle = [styles.input];

        if (noStyle) {
            inputStyle.push(style);
            inputActiveStyle.push(activeStyle);
            inputErrorStyle.push(errorStyle);
        } else if (underline) {
            inputStyle.push(styles.underline);
            inputActiveStyle.push({
                borderBottomColor: color,
                borderBottomWidth: 2
            });
            inputErrorStyle.push({
                borderBottomColor: errorColor,
                borderBottomWidth: 2
            });
        } else if (defaultStyle || rounded) {
            if (Platform.OS === "android") {
                inputStyle.push(styles.default, styles.defaultAndroid);
                inputActiveStyle.push(styles.default, styles.defaultAndroid, {
                    borderColor: color,
                    borderWidth: 2
                });
                inputErrorStyle.push(styles.default, styles.defaultAndroid, {
                    borderColor: errorColor,
                    borderWidth: 2
                });
            } else {
                inputStyle.push(styles.default, styles.defaultIos);
                inputActiveStyle.push(styles.default, styles.defaultIos, {
                    borderColor: color,
                    borderWidth: 2
                });
                inputErrorStyle.push(styles.default, styles.defaultIos, {
                    borderColor: errorColor,
                    borderWidth: 2
                });
            }

            if (rounded) {
                inputStyle.push(styles.rounded);
                inputActiveStyle.push(styles.rounded, {
                    borderColor: color,
                    borderWidth: 2
                });
                inputErrorStyle.push(styles.rounded, {
                    borderColor: errorColor,
                    borderWidth: 2
                });
            }
        }

        return (
            <View style={styles.inputContainer}>
                <View
                    style={
                        error
                            ? inputErrorStyle
                            : focused
                            ? inputActiveStyle
                            : inputStyle
                    }
                >
                    {iconLeft && this.renderIcon(iconLeft, { marginRight: 5 })}
                    <TextInput
                        ref={c => (this._root = c)}
                        style={{ width: "100%" }}
                        underlineColorAndroid={"transparent"}
                        placeholderTextColor={
                            error ? errorColor : commonColors.inputGrey
                        }
                        onFocus={() => this.setState({ focused: true })}
                        onBlur={() => this.setState({ focused: false })}
                        onSubmitEditing={() => {
                            this.setState({ focused: true });
                            Keyboard.dismiss();
                        }}
                        {...otherProps}
                        onChangeText={this.handleTextChange}
                    />
                    {iconRight && this.renderIcon(iconRight, { marginLeft: 5 })}
                </View>
                {error && errorMessage && (
                    <Text size="footnote" color={errorColor}>
                        {errorMessage}
                    </Text>
                )}
            </View>
        );
    }

    renderIcon(icon, style) {
        const { errorColor } = this.props;
        const { error } = this.state;
        return (
            <View style={styles.iconContainer}>
                <Icon
                    {...icon}
                    size={25}
                    style={style}
                    color={error ? errorColor : icon.color}
                />
            </View>
        );
    }
}

Input.propTypes = {
    color: PropTypes.string,
    isValid: PropTypes.func,
    errorMessage: PropTypes.string,
    activeStyle: PropTypes.object,
    errorStyle: PropTypes.object,
    rounded: PropTypes.bool,
    underline: PropTypes.bool,
    defaultStyle: PropTypes.bool,
    noStyle: PropTypes.bool,
    errorColor: PropTypes.string,
    iconRight: PropTypes.shape({
        ...Icon.propTypes
    }),
    iconLeft: PropTypes.shape({
        ...Icon.propTypes
    }),
    ...TextInput.propTypes
};

Input.defaultProps = {
    color: commonColors.primary,
    errorColor: commonColors.error,
    defaultStyle: true
};

const styles = StyleSheet.create({
    inputContainer: {
        width: "100%",
        marginBottom: 5
    },
    input: {
        marginTop: 10,
        marginBottom: 5,
        width: "100%",
        height: 45,
        flexDirection: "row"
    },
    default: {
        borderColor: commonColors.inputGrey,
        borderWidth: 0.9
    },
    defaultAndroid: {
        paddingHorizontal: 5,
        borderRadius: 10
    },
    defaultIos: {
        paddingHorizontal: 10,
        borderRadius: 15
    },
    underline: {
        borderBottomColor: commonColors.inputGrey,
        borderBottomWidth: 0.9
    },
    rounded: {
        borderRadius: 45 / 2,
        paddingHorizontal: 10
    },
    iconContainer: {
        alignItems: "center",
        justifyContent: "center"
    }
});
