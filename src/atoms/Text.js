import React, { Component } from "react";
import { Text } from "react-native";
import PropTypes from 'prop-types';
import { commonColors } from "../utils/color";
import { getFontSize } from "../variables/textSizeVariables";

class TextAE extends Component {

    render() {
        const { color, size, bold, children, ...otherProps } = this.props;

        const textColor = !color ? commonColors.black : color;

        const textSize = !size ? "p" : size;

        const textBold = !bold ? "normal" : "bold";

        const textStyle = { color: textColor, fontSize: getFontSize(textSize), fontWeight: textBold };

        return (
            <Text
                ref={c => (this._root = c)}
                style={textStyle}
                {...otherProps}
            >
                {children}
            </Text>
        )
    }
}

TextAE.propTypes = {
    bold: PropTypes.bool,
    color: PropTypes.string,
    size: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6", "p", "callout", "sub_heading", "footnote", "caption_big", "caption_small"]),
    ...Text.propTypes
};

TextAE.defaultProps = {
    size: "p",
    bold: false,
    color: commonColors.black
};

export { TextAE as Text };
