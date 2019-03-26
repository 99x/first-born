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

        if (Platform.OS === "android") {
            return (
                <View style={this.state.focused ? [styles.inputAndroid, { borderColor: color, borderWidth: 2 }] : styles.inputAndroid}>
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
            <View style={this.state.focused ? [styles.inputIos, { borderColor: color, borderWidth: 2 }] : styles.inputIos}>
                <TextInput
                    ref={(c) => this._root = c}
                    style={{ width: "100%", height: Math.max(90, this.state.inputHeight) }}
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
}

TextArea.propTypes = {
    color: PropTypes.string,
    ...TextInput.propTypes
}

TextArea.defaultProps = {
    color: commonColors.primary
}

const styles = StyleSheet.create({
    inputAndroid: {
        width: "100%",
        marginVertical: 10,
        borderRadius: 10,
        paddingHorizontal: 5,
        borderColor: commonColors.inputGrey,
        borderWidth: 0.9
    },
    inputIos: {
        borderRadius: 15,
        paddingHorizontal: 10,
        paddingTop: 5,
        marginVertical: 10,
        width: '100%',
        borderColor: commonColors.inputGrey,
        borderWidth: 0.9
    }
})
