import React, { Component } from "react";
import { Platform, StyleSheet, TouchableOpacity, Image } from "react-native";
import PropTypes from "prop-types";

import { Text } from "../../../atoms/Text";
import { commonColors } from "../../../utils/color";
import { Icon } from "../../../atoms/Icon";

export class TabItem extends Component {
    render() {
        const {
            label,
            children,
            activeColor,
            inactiveColor,
            active,
            ...otherProps
        } = this.props;

        let newChildren = [];

        const color = active ? activeColor : inactiveColor;

        if (children) {
            newChildren = React.Children.map(children, child =>
                child && child.type === Text
                    ? React.cloneElement(child, {
                          ...child.props,
                          size: "footnote",
                          color,
                          style: { ...child.props.style }
                      })
                    : child && child.type === Icon
                    ? React.cloneElement(child, {
                          ...child.props,
                          size: 28,
                          color,
                          style: { ...child.props.style }
                      })
                    : child && child.type === Image
                    ? React.cloneElement(child, {
                          style: {
                              ...child.props.style,
                              width: 28,
                              height: 28,
                              opacity: active ? 1 : 0.8
                          },
                          ...child.props
                      })
                    : null
            );
        }

        return (
            <TouchableOpacity style={styles.container} {...otherProps}>
                {newChildren && newChildren}
            </TouchableOpacity>
        );
    }
}

TabItem.propTypes = {
    activeColor: PropTypes.string,
    inactiveColor: PropTypes.string,
    active: PropTypes.bool,
    ...TouchableOpacity.propTypes
};

TabItem.defaultProps = {
    activeColor: Platform.OS === "android" ? commonColors.white : "#0a60ff",
    inactiveColor:
        Platform.OS === "android" ? "rgba(209, 216, 224, 0.8)" : "#8e8e93",
    active: false
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 10
    }
});
