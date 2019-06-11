import React, { Component } from "react";
import { View, StyleSheet, Platform, Image } from "react-native";
import PropTypes from "prop-types";
import { Icon } from "./Icon";
import { commonColors } from "../utils/color";
import { Text } from "./Text";

export class Badge extends Component {
    render() {
        const { color, children, outline, ...otherProps } = this.props;

        let badgeStyle = [styles.defaultBadge];

        let textStyle = { color: commonColors.white };

        let iconColor = commonColors.white;

        if (!outline) {
            badgeStyle.push({ backgroundColor: color });
        } else {
            badgeStyle.push({
                backgroundColor: "transparent",
                borderColor: color,
                borderWidth: 1
            });
            textStyle = { color: color };
            iconColor = color;
        }

        const newChildren = React.Children.map(children, child =>
            child && child.type === Text
                ? React.cloneElement(child, {
                      ...child.props,
                      style: { ...child.props.style, ...textStyle },
                      size: "footnote"
                  })
                : child && child.type === Icon
                ? React.cloneElement(child, {
                      ...child.props,
                      color: iconColor,
                      size: 15
                  })
                : child && child.type === Image
                ? React.cloneElement(child, {
                      ...child.props,
                      style: {
                          ...child.props.style,
                          width: 15,
                          height: 15
                      }
                  })
                : null
        );

        return (
            <View
                ref={c => (this._root = c)}
                style={badgeStyle}
                {...otherProps}
            >
                {newChildren}
            </View>
        );
    }
}

Badge.propTypes = {
    color: PropTypes.string,
    outline: PropTypes.bool,
    ...View.propTypes
};

Badge.defaultProps = {
    color: commonColors.primary
};

const styles = StyleSheet.create({
    defaultBadge: {
        margin: 5,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 15
    }
});
