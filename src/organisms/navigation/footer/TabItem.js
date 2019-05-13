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
            top,
            ...otherProps
        } = this.props;

        let newChildren = [];

        let topPosition = top && Platform.OS === "android";

        const color = active ? activeColor : inactiveColor;

        let containerStyle = topPosition ? [styles.container, styles.containerTop] : styles.container;

        if (children) {
            newChildren = React.Children.map(children, child =>
                child && child.type === Text
                    ? React.cloneElement(child, {
                        ...child.props,
                        size: topPosition ? "footnote" : "caption_big",
                        color,
                        style: {
                            ...child.props.style,
                            opacity: active ? 1 : 0.8
                        }
                    })
                    : child && child.type === Icon
                        ? React.cloneElement(child, {
                            ...child.props,
                            size: topPosition ? 20 : 28,
                            color,
                            style: {
                                ...child.props.style,
                                opacity: active ? 1 : 0.8,
                                marginRight: topPosition ? 5 : 0
                            }
                        })
                        : child && child.type === Image
                            ? React.cloneElement(child, {
                                style: {
                                    ...child.props.style,
                                    width: topPosition ? 20 : 28,
                                    height: topPosition ? 20 : 28,
                                    opacity: active ? 1 : 0.8,
                                    marginRight: topPosition ? 5 : 0
                                },
                                ...child.props
                            })
                            : null
            );
        }

        return (
            <TouchableOpacity style={containerStyle} {...otherProps}>
                {newChildren && newChildren}
            </TouchableOpacity>
        );
    }
}

TabItem.propTypes = {
    activeColor: PropTypes.string,
    inactiveColor: PropTypes.string,
    active: PropTypes.bool,
    top: PropTypes.bool,
    ...TouchableOpacity.propTypes
};

TabItem.defaultProps = {
    activeColor: Platform.OS === "android" ? commonColors.white : "#0a60ff",
    inactiveColor:
        Platform.OS === "android" ? "rgba(209, 216, 224, 0.8)" : "#8e8e93",
    active: false,
    top: false
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 10
    },
    containerTop: {
        flexDirection: "row"
    }
});
