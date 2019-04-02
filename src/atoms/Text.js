import React, { Component } from "react";
import { Text } from "react-native";
import PropTypes from "prop-types";
import { commonColors } from "../utils/color";
import { getFontSize } from "../variables/textSizeVariables";

class TextAE extends Component {
    render() {
        const {
            color,
            size,
            bold,
            children,
            style,
            align,
            margin,
            ...otherProps
        } = this.props;

        const textBold = !bold ? "normal" : "bold";

        let textStyle = [
            {
                color: color,
                fontSize: getFontSize(size),
                textAlign: align,
                fontWeight: textBold
            }
        ];

        if (style) {
            textStyle.push(style);
        }
        if (margin) {
            textStyle.push({ marginVertical: 5 });
        }

        return (
            <Text ref={c => (this._root = c)} style={textStyle} {...otherProps}>
                {children}
            </Text>
        );
    }
}

TextAE.propTypes = {
    bold: PropTypes.bool,
    color: PropTypes.string,
    size: PropTypes.oneOf([
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "p",
        "callout",
        "sub_heading",
        "footnote",
        "caption_big",
        "caption_small"
    ]),
    align: PropTypes.string,
    margin: PropTypes.bool,
    ...Text.propTypes
};

TextAE.defaultProps = {
    size: "p",
    bold: false,
    color: commonColors.black,
    align: "left",
    margin: false
};

export { TextAE as Text };
