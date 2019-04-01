import { Platform } from "react-native";
import React, { Component } from "react";
import Ionicon from "react-native-vector-icons/Ionicons";
import PropTypes from "prop-types";
import { commonColors } from "../utils/color";

export class Icon extends Component {
    render() {
        const { name, size, color, ...otherProps } = this.props;

        if (!name.includes("logo")) {
            return (
                <Ionicon
                    name={
                        Platform.OS === "android" ? "md-" + name : "ios-" + name
                    }
                    size={size}
                    color={color}
                    {...otherProps}
                />
            );
        }
        return (
            <Ionicon name={name} size={size} color={color} {...otherProps} />
        );
    }
}

Icon.propTypes = {
    ...Ionicon.propTypes,
    name: PropTypes.string
};

Icon.defaultProps = {
    color: commonColors.white,
    size: 18
};
