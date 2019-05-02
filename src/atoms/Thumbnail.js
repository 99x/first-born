import React, { Component } from "react";
import { View, Image } from "react-native";
import PropTypes from "prop-types";
import { Button } from "./Button";
import { Icon } from "./Icon";

const sizes = {
    small: 34,
    medium: 50,
    large: 75,
    exlarge: 150
};

export class Thumbnail extends Component {
    render() {
        const { rounded, size, customSize, onEdit, ...otherProps } = this.props;

        let imageSize = customSize ? customSize : sizes[size];

        let imageStyle = { width: imageSize, height: imageSize };

        let buttonStyle = { position: "absolute", top: -20, right: -20 };

        if (rounded) {
            imageStyle = { ...imageStyle, borderRadius: imageSize / 2 };
            buttonStyle = { ...buttonStyle, top: -5, right: -5 };
        }

        if (onEdit) {
            return (
                <View>
                    <Image {...otherProps} style={imageStyle} />
                    {onEdit && (
                        <Button {...onEdit} style={buttonStyle}>
                            {onEdit.children ? (
                                onEdit.children
                            ) : (
                                <Icon type="material" name="edit" />
                            )}
                        </Button>
                    )}
                </View>
            );
        }

        return <Image {...otherProps} style={imageStyle} />;
    }
}

Thumbnail.propTypes = {
    rounded: PropTypes.bool,
    customSize: PropTypes.number,
    size: PropTypes.oneOf(["small", "medium", "large", "exlarge"]),
    onEdit: PropTypes.shape({
        ...Button.propTypes
    }),
    ...Image.propTypes
};

Thumbnail.defaultProps = {
    rounded: false,
    size: "medium"
};
