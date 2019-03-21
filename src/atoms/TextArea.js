import React, { Component } from "react";
import { TextInput, StyleSheet, Platform, View } from "react-native";
import PropTypes from "prop-types";
import { commonColors } from "../utils/color";

export class TextArea extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputHeight: 100,
            focused: false
        }
    }

    render() {
        const { onChangeText, placeholder, color, ...otherProps } = this.props;

        const underLineColor = !color ? commonColors.black : color

        if (Platform.OS === "android") {
            return (
                <View style={this.state.focused ? [styles.inputAndroid, { borderColor: underLineColor, borderWidth: 2 }] : styles.inputAndroid}>
                    <TextInput
                        ref={(c) => this._root = c}
                        style={{ width: "100%", height: Math.max(90, this.state.inputHeight), textAlignVertical: "top" }}
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
                </View>
            )
        }
        return (
            <TextInput
                ref={(c) => this._root = c}
                style={[styles.inputIos, { height: Math.max(90, this.state.inputHeight + 5) }]}
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
        borderRadius: 10,
        paddingHorizontal: 5,
        borderColor: "rgba(33, 33, 33, 0.5)",
        borderWidth: 0.9
    },
    inputIos: {
        backgroundColor: "white",
        borderRadius: 10,
        paddingHorizontal: 5,
        paddingTop: 10,
        marginVertical: 10,
        width: '100%',
        borderColor: "rgba(33, 33, 33, 0.5)",
        borderWidth: 0.9
    }
})
