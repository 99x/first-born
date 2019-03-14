import React, { Component } from "react";
import { TextInput, StyleSheet, Platform } from "react-native";
import PropTypes from "prop-types";
import { commonColors } from "../utils/color";

export class TextArea extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputHeight: 50,
            focused: false
        }
    }

    render() {
        const { onChangeText, placeholder, color, ...otherProps } = this.props;

        const underLineColor = !color ? commonColors.black : color

        if (Platform.OS === "android") {
            return (
                <TextInput
                    ref={(c) => this._root = c}
                    style={this.state.focused ? [styles.inputAndroid, { height: Math.max(50, this.state.inputHeight), borderBottomColor: underLineColor, borderBottomWidth: 2 }] : [styles.inputAndroid, { height: Math.max(50, this.state.inputHeight), borderBottomColor: underLineColor, borderBottomWidth: 0.5 }]}
                    underlineColorAndroid={"transparent"}
                    placeholder={placeholder}
                    onChangeText={onChangeText}
                    multiline
                    onContentSizeChange={(event) => {
                        this.setState({ inputHeight: event.nativeEvent.contentSize.height })
                    }}
                    onFocus={() => this.setState({ focused: true })}
                    onBlur={() => this.setState({ focused: false })}
                    {...otherProps}
                />
            )
        }
        return (
            <TextInput
                ref={(c) => this._root = c}
                style={[styles.inputIos, { height: Math.max(50, this.state.inputHeight + 5) }]}
                underlineColorAndroid={"transparent"}
                placeholder={placeholder}
                onChangeText={onChangeText}
                multiline
                onContentSizeChange={(event) => {
                    this.setState({ inputHeight: event.nativeEvent.contentSize.height })
                }}
                {...otherProps}
            />
        )
    }
}

TextArea.propTypes = {
    placeholder: PropTypes.string,
    color: PropTypes.string,
    onChangeText: PropTypes.func
}

const styles = StyleSheet.create({
    inputAndroid: {
        width: "100%",
        marginVertical: 10,
    },
    inputIos: {
        backgroundColor: "white",
        borderRadius: 10,
        paddingHorizontal: 5,
        paddingTop: 10,
        marginVertical: 10,
        width: '100%',
        borderColor: "#e2e2e2",
        borderWidth: 0.9
    }
})
