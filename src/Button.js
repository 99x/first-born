import React, { Component } from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";

export class Button extends Component {
    render() {
        const { onPress, title, color, rounded, outline, block, ...otherProps } = this.props;

        const buttonColor = !color ? "#000" : color;

        let buttonStyle = [styles.defaultButton];
        let textStyle;

        if (block) {
            buttonStyle.push(styles.blockButton);
        }

        if (rounded) {
            buttonStyle.push(styles.roundButton);
        }

        if (outline) {
            textStyle = { color: buttonColor };
            buttonStyle.push({ borderColor: buttonColor, borderWidth: 1 });
        } else {
            textStyle = styles.text;
            buttonStyle.push({ backgroundColor: buttonColor });
        }

        return (
            <TouchableOpacity ref={(c) => this._root = c} style={buttonStyle} onPress={onPress} {...otherProps}>
                <Text style={textStyle}>{title}</Text>
            </TouchableOpacity>
        )
    }
}

Button.propTypes = {
    rounded: PropTypes.bool,
    outline: PropTypes.bool,
    block: PropTypes.bool,
    title: PropTypes.string,
    color: PropTypes.string,
    onPress: PropTypes.func,
    ...TouchableOpacity.propTypes
}

const styles = StyleSheet.create({
    text: { color: "#FFF" },
    defaultButton: { borderRadius: 2, padding: 10, margin: 10 },
    roundButton: { borderRadius: 20, padding: 10, margin: 10, paddingHorizontal: 15 },
    blockButton: { width: "100%", borderRadius: 2, padding: 10, margin: 10, justifyContent: "center", alignItems: "center" }
})
