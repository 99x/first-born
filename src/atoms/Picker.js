import React, { Component } from "react";
import { StyleSheet, Platform, Picker, View, Modal } from "react-native";
import createReactClass from "create-react-class";
import PropTypes from "prop-types";
import Ionicon from "react-native-vector-icons/Ionicons";
import { commonColors } from "../utils/color";
import { Text } from "./Text";

class PickerAE extends Component {
    constructor(props) {
        super(props);
        this.state = {
            focused: false,
            error: false,
            chosenValue:
                !props.placeholder && props.selectedValue
                    ? props.selectedValue
                    : undefined
        };
    }

    setValue = value => {
        const { onValueChange, isValid } = this.props;
        this.setState({ chosenValue: value });

        if (onValueChange) {
            onValueChange(value);
        }

        if (isValid) {
            this.setState({ error: !isValid(value) });
        }
    };

    render() {
        const {
            color,
            placeholder,
            animationType,
            modalTransparent,
            selectedValue,
            children,
            noStyle,
            rounded,
            underline,
            defaultStyle,
            style,
            activeStyle,
            errorStyle,
            errorMessage,
            errorColor,
            ...otherProps
        } = this.props;
        const { focused, error, chosenValue } = this.state;

        let inputStyle = [
            Platform.OS === "android" ? styles.inputAndroid : styles.inputIos
        ];
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

        if (Platform.OS === "android") {
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
                        <Picker
                            style={{ height: 45 }}
                            ref={c => (this._root = c)}
                            {...otherProps}
                            selectedValue={chosenValue}
                            onValueChange={this.setValue.bind(this)}
                        >
                            {children}
                        </Picker>
                    </View>
                    {error && errorMessage && (
                        <Text size="caption_big" color={errorColor}>
                            {errorMessage}
                        </Text>
                    )}
                </View>
            );
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
                    <Text
                        ref={c => (this._root = c)}
                        style={
                            !this.state.chosenValue
                                ? styles.inputPlaceholder
                                : [
                                      styles.inputPlaceholder,
                                      { color: commonColors.black }
                                  ]
                        }
                        onPress={() => this.setState({ focused: true })}
                    >
                        {chosenValue ? chosenValue : placeholder}
                    </Text>
                    <Ionicon
                        onPress={() => this.setState({ focused: true })}
                        name={focused ? "ios-arrow-up" : "ios-arrow-down"}
                        style={styles.icon}
                        color={focused ? color : commonColors.inputGrey}
                        size={24}
                    />
                </View>
                {error && errorMessage && (
                    <Text size="caption_big" color={errorColor}>
                        {errorMessage}
                    </Text>
                )}
                <Modal
                    supportedOrientations={["portrait", "landscape"]}
                    animationType={animationType}
                    transparent={modalTransparent}
                    visible={focused}
                    onRequestClose={() => {}}
                >
                    <Text
                        onPress={() => this.setState({ focused: false })}
                        style={{ flex: 1 }}
                    />
                    <Picker
                        ref={c => (this._root = c)}
                        {...otherProps}
                        selectedValue={chosenValue}
                        onValueChange={this.setValue.bind(this)}
                        style={{ flex: 1, backgroundColor: commonColors.white }}
                    >
                        {children}
                    </Picker>
                    <Text
                        onPress={() => this.setState({ focused: false })}
                        style={{ flex: 1 }}
                    />
                </Modal>
            </View>
        );
    }
}

PickerAE.Item = createReactClass({
    render() {
        return <Picker.Item {...this.props} />;
    }
});

PickerAE.propTypes = {
    placeholder: PropTypes.string,
    color: PropTypes.string,
    isValid: PropTypes.func,
    errorMessage: PropTypes.string,
    animationType: PropTypes.string,
    modalTransparent: PropTypes.bool,
    mode: PropTypes.string,
    activeStyle: PropTypes.object,
    errorStyle: PropTypes.object,
    rounded: PropTypes.bool,
    underline: PropTypes.bool,
    defaultStyle: PropTypes.bool,
    noStyle: PropTypes.bool,
    errorColor: PropTypes.string,
    ...Picker.propTypes
};

PickerAE.defaultProps = {
    modalTransparent: true,
    color: commonColors.primary,
    animationType: "fade",
    mode: "dropdown",
    placeholder: "Select Option",
    errorColor: commonColors.error,
    defaultStyle: true
};

const styles = StyleSheet.create({
    inputContainer: {
        width: "100%",
        marginBottom: 5
    },
    icon: {
        paddingRight: 15
    },
    inputPlaceholder: {
        flex: 1,
        color: commonColors.inputGrey
    },
    inputAndroid: {
        marginTop: 10,
        marginBottom: 5,
        width: "100%",
        height: 45
    },
    inputIos: {
        marginTop: 10,
        marginBottom: 5,
        width: "100%",
        height: 45,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
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

export { PickerAE as Picker };
