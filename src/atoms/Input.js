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
        }
    }

    onChangeText = (text) => {
        const { isValid, onChangeText } = this.props;
        onChangeText(text);
        if (isValid) {
            this.setState({ error: isValid(text) });
        }
    }

    render() {
        const { onChangeText, placeholder, color, ...otherProps } = this.props;

        const underLineColor = !color ? commonColors.black : color

        if (Platform.OS === "android") {
            return (
                <View style={this.state.focused ? [styles.input, { borderColor: underLineColor, borderWidth: 2 }] : this.state.error ? [styles.input, { borderColor: "#e74c3c", borderWidth: 2 }] : styles.input}>
                    <TextInput
                        ref={(c) => this._root = c}
                        style={{ width: "100%" }}
                        underlineColorAndroid={"transparent"}
                        placeholder={placeholder}
                        placeholderTextColor={this.state.error ? '#e74c3c' : 'rgba(33, 33, 33, 0.5)'}
                        onChangeText={this.onChangeText}
                        onFocus={() => this.setState({ focused: true })}
                        onBlur={() => this.setState({ focused: false })}
                        onSubmitEditing={() => { this.setState({ focused: true }); Keyboard.dismiss() }}
                        {...otherProps}
                    />
                </View>
            )
        }
        return (
            <TextInput
                ref={(c) => this._root = c}
                style={styles.input}
                underlineColorAndroid={"transparent"}
                placeholder={placeholder}
                onChangeText={onChangeText}
                {...otherProps}
            />
        )
    }
}

Input.propTypes = {
    color: PropTypes.string,
    ...TextInput.propTypes
}

const styles = StyleSheet.create({
    input: {
        borderRadius: 10,
        paddingHorizontal: 5,
        marginVertical: 10,
        width: '100%',
        borderColor: "rgba(33, 33, 33, 0.5)",
        borderWidth: 0.9,
        height: 45
    }
})
