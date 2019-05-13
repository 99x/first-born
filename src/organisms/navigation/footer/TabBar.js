import React, { Component } from "react";
import { View, StyleSheet, Platform } from "react-native";
import PropTypes from "prop-types";
import { commonColors } from "../../../utils/color";
import { isIphoneX } from "../../../utils/platform";
import { TabItem } from "first-born/src/organisms/navigation/footer/TabItem";

export class TabBar extends Component {
    render() {
        const { color, activeColor, inactiveColor, children, top, ...otherProps } = this.props;

        let tabBarStyle = [styles.container, { backgroundColor: color }];

        if (isIphoneX() && !top) {
            tabBarStyle.push({ paddingBottom: 15 });
        }

        const newChildren = React.Children.map(children, child =>
            child
                ? React.cloneElement(child, {
                    ...child.props,
                    activeColor,
                    inactiveColor,
                    top
                })
                : null
        );

        return (
            <View style={tabBarStyle} {...otherProps}>
                {newChildren && newChildren}
            </View>
        );
    }
}

TabBar.propTypes = {
    color: PropTypes.string,
    activeColor: PropTypes.string,
    inactiveColor: PropTypes.string,
    top: PropTypes.bool,
    ...View.propTypes
};

TabBar.defaultProps = {
    color: Platform.OS === "android" ? commonColors.primary : "#f8f8f8",
    top: false
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        ...Platform.select({
            ios: {
                borderTopColor: commonColors.inputGrey,
                borderTopWidth: 1
            }
        })
    }
});
