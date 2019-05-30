import React, { Component } from "react";
import { TextInput, StyleSheet, Platform, View } from "react-native";
import PropTypes from "prop-types";
import { commonColors } from "../utils/color";

export class TextArea extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputHeight: 100,
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
            color,
            noStyle,
            underline,
            defaultStyle,
            style,
            activeStyle,
            errorStyle,
            errorMessage,
            errorColor,
            ...otherProps
        } = this.props;

        const { focused, error, text, inputHeight } = this.state;

        let inputStyle = [styles.input];
        let inputActiveStyle = [styles.input];
        let inputErrorStyle = [styles.input];

        if (noStyle) {
            inputStyle.push(style);
            inputActiveStyle.push(activeStyle);
            inputErrorStyle.push(errorStyle);
        } else if (underline) {
            inputStyle.push(styles.underline);
            inputActiveStyle.push({ borderBottomColor: color, borderBottomWidth: 2 });
            inputErrorStyle.push({ borderBottomColor: errorColor, borderBottomWidth: 2 });
        } else if (defaultStyle) {
            if (Platform.OS === "android") {
                inputStyle.push(styles.default, styles.defaultAndroid);
                inputActiveStyle.push(styles.default, styles.defaultAndroid, { borderColor: color, borderWidth: 2 });
                inputErrorStyle.push(styles.default, styles.defaultAndroid, { borderColor: errorColor, borderWidth: 2 });
            } else {
                inputStyle.push(styles.default, styles.defaultIos);
                inputActiveStyle.push(styles.default, styles.defaultIos, { borderColor: color, borderWidth: 2 });
                inputErrorStyle.push(styles.default, styles.defaultIos, { borderColor: errorColor, borderWidth: 2 });
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
                    <TextInput
                        ref={c => (this._root = c)}
                        style={{
                            height: Math.max(90, inputHeight),
                            textAlignVertical: "top"
                        }}
                        underlineColorAndroid={"transparent"}
                        multiline
                        onContentSizeChange={event => {
                            this.setState({
                                inputHeight:
                                    event.nativeEvent.contentSize.height
                            });
                        }}
                        onFocus={() => this.setState({ focused: true })}
                        onBlur={() => this.setState({ focused: false })}
                        {...otherProps}
                        onChangeText={this.handleTextChange}
                    />
                </View>
            </View>
        );

    }
}

TextArea.propTypes = {
    color: PropTypes.string,
    isValid: PropTypes.func,
    errorMessage: PropTypes.string,
    activeStyle: PropTypes.object,
    errorStyle: PropTypes.object,
    underline: PropTypes.bool,
    defaultStyle: PropTypes.bool,
    noStyle: PropTypes.bool,
    errorColor: PropTypes.string,
    ...TextInput.propTypes
};

TextArea.defaultProps = {
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
        width: "100%"
    },
    default: {
        borderColor: commonColors.inputGrey,
        borderWidth: 0.9,
    },
    defaultAndroid: {
        paddingHorizontal: 5,
        borderRadius: 10,
    },
    defaultIos: {
        paddingHorizontal: 10,
        borderRadius: 15,
    },
    underline: {
        borderBottomColor: commonColors.inputGrey,
        borderBottomWidth: 0.9,
    },
});
