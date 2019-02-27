import React, { Component } from "react";
import { TextInput, StyleSheet, Dimensions, Platform, Keyboard } from "react-native";
import PropTypes from "prop-types";

const { width } = Dimensions.get("window");

export class Input extends Component {

    constructor(props) {
        super(props);
        this.state = {
            focused: false
        }
    }

    render() {
        const { onChangeText, placeholder, color, ...otherProps } = this.props;

        const underLineColor = !color ? "#000" : color

        if (Platform.OS === "android") {
            return (
                <TextInput
                    ref={(c) => this._root = c}
                    style={this.state.focused ? [styles.inputAndroid, { borderBottomColor: underLineColor, borderBottomWidth: 2 }] : [styles.inputAndroid, { borderBottomColor: underLineColor, borderBottomWidth: 1 }]}
                    underlineColorAndroid={"transparent"}
                    placeholder={placeholder}
                    onChangeText={onChangeText}
                    onFocus={() => this.setState({ focused: true })}
                    onBlur={() => this.setState({ focused: false })}
                    onSubmitEditing={() => { this.setState({ focused: true }); Keyboard.dismiss() }}
                    {...otherProps}
                />
            )
        }
        return (
            <TextInput
                ref={(c) => this._root = c}
                style={styles.inputIos}
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
    inputAndroid: {
        width: "100%",
        borderTopRightRadius: 3,
        borderTopLeftRadius: 3,
        marginVertical: 10,
    },
    inputIos: {
        backgroundColor: "white",
        borderRadius: 10,
        paddingHorizontal: 5,
        marginVertical: 10,
        width: '100%',
        borderColor: "#e2e2e2",
        borderWidth: 0.9,
        height: 45
    }
})
