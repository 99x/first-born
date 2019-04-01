import React, { Component } from "react";
import { TextInput, StyleSheet, Platform, Keyboard, View } from "react-native";
import PropTypes from "prop-types";

import { commonColors } from "../utils/color";

export class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            focused: false,
            error: false
        };
    }

    handleTextChange = text => {
        const { isValid, onChangeText } = this.props;
        onChangeText(text);
        if (isValid) {
            this.setState({ error: !isValid(text) });
        }
    };

    render() {
        const { placeholder, color, ...otherProps } = this.props;

        if (Platform.OS === "android") {
            return (
                <View
                    style={
                        this.state.error
                            ? [
                                  styles.inputAndroid,
                                  {
                                      borderColor: commonColors.error,
                                      borderWidth: 2
                                  }
                              ]
                            : this.state.focused
                            ? [
                                  styles.inputAndroid,
                                  { borderColor: color, borderWidth: 2 }
                              ]
                            : styles.inputAndroid
                    }
                >
                    <TextInput
                        ref={c => (this._root = c)}
                        style={{ width: "100%" }}
                        underlineColorAndroid={"transparent"}
                        placeholder={placeholder}
                        placeholderTextColor={
                            this.state.error
                                ? commonColors.error
                                : commonColors.inputGrey
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
                </View>
            );
        }
        return (
            <View
                style={
                    this.state.error
                        ? [
                              styles.inputIos,
                              {
                                  borderColor: commonColors.error,
                                  borderWidth: 2
                              }
                          ]
                        : this.state.focused
                        ? [
                              styles.inputIos,
                              { borderColor: color, borderWidth: 2 }
                          ]
                        : styles.inputIos
                }
            >
                <TextInput
                    ref={c => (this._root = c)}
                    style={{
                        width: "100%",
                        height: "100%",
                        textAlignVertical: "bottom"
                    }}
                    underlineColorAndroid={"transparent"}
                    placeholder={placeholder}
                    placeholderTextColor={
                        this.state.error
                            ? commonColors.error
                            : commonColors.inputGrey
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
            </View>
        );
    }
}

Input.propTypes = {
    color: PropTypes.string,
    isValid: PropTypes.func,
    ...TextInput.propTypes
};

Input.defaultProps = {
    color: commonColors.primary
};

const styles = StyleSheet.create({
    inputAndroid: {
        borderRadius: 10,
        paddingHorizontal: 5,
        marginVertical: 10,
        width: "100%",
        borderColor: commonColors.inputGrey,
        borderWidth: 0.9,
        height: 45
    },
    inputIos: {
        borderRadius: 15,
        paddingHorizontal: 10,
        marginVertical: 10,
        width: "100%",
        borderColor: commonColors.inputGrey,
        borderWidth: 0.9,
        height: 45
    }
});
