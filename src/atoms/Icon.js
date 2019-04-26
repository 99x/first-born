import React, { Component } from "react";
import { Platform, TouchableOpacity } from "react-native";
import Ionicon from "react-native-vector-icons/Ionicons";
import PropTypes from "prop-types";
import { commonColors } from "../utils/color";
import getIconType from "first-born/src/utils/getIconType";

export class Icon extends Component {
    render() {
        const { name, type, ...otherProps } = this.props;

        const IconComponent = getIconType(type);

        if (type === 'ionicon' && !name.includes("logo")) {
            return (
                <IconComponent
                    name={
                        Platform.OS === "android" ? "md-" + name : "ios-" + name
                    }
                    {...otherProps}
                />
            );
        }
        return (
            <IconComponent name={name} {...otherProps} />
        );
    }
}

Icon.propTypes = {
    name: PropTypes.string,
    size: PropTypes.number,
    color: PropTypes.string,
    type: PropTypes.oneOf(['zocial', 'octicon', 'material', 'material-community', 'ionicon', 'foundation', 'evilicon', 'entypo', 'font-awesome', 'simple-line-icon', 'feather', 'antdesign']),
    ...TouchableOpacity.propTypes
};

Icon.defaultProps = {
    color: commonColors.white,
    size: 18,
    type: 'ionicon'
};
