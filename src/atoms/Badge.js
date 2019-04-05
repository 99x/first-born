import React, { Component } from "react";
import { View, StyleSheet, Platform, Image } from "react-native";
import PropTypes from "prop-types";
import { Icon } from "./Icon";
import { commonColors } from "../utils/color";
import { Text } from "./Text";

export class Badge extends Component {
    render() {
        const {
            color,
            children,
            ...otherProps
        } = this.props;

        const badgeColor = color;

        let badgeStyle = [styles.defaultBadge, {
            borderRadius: 15,
            backgroundColor: badgeColor
        }];

        let textStyle = {
            color: commonColors.white
        };

        let iconColor = commonColors.white;;

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
    ...View.propTypes
};

Badge.defaultProps = {
    color: commonColors.primary,
};

const styles = StyleSheet.create({
    defaultBadge: {
        margin: 5,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 10,
        paddingVertical: 5
    },
});
