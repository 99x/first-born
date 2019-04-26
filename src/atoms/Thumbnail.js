import React, { Component } from "react";
import { TouchableOpacity, Image } from "react-native";
import PropTypes from "prop-types";

const sizes = {
    small: 34,
    medium: 50,
    large: 75,
    exlarge: 150
}

export class Thumbnail extends Component {
    render() {
        const { rounded, size, customSize, ...otherProps } = this.props;

        let imageSize = customSize ? customSize : sizes[size];

        let imageStyle = { width: imageSize, height: imageSize };

        if (rounded) {
            imageStyle = { ...imageStyle, borderRadius: imageSize / 2 };
        }

        return <Image {...otherProps} style={imageStyle} />;
    }
}

Thumbnail.propTypes = {
    rounded: PropTypes.bool,
    customSize: PropTypes.number,
    size: PropTypes.oneOf(["small", "medium", "large", "exlarge"]),
    ...Image.propTypes,
    ...TouchableOpacity.propTypes
};

Thumbnail.defaultProps = {
    rounded: false,
    size: "medium"
};
