import React, { Component } from "react";
import { View, StyleSheet, Platform } from "react-native";
import PropTypes from "prop-types";
import { commonColors } from "../../../utils/color";
import { isIphoneX } from "../../../utils/platform";

export class TabBar extends Component {
    render() {
        const { color, children, ...otherProps } = this.props;

        let tabBarStyle = [styles.container, { backgroundColor: color }];

        if (isIphoneX()) {
            tabBarStyle.push({ paddingBottom: 15 });
        }

        return (
            <View style={tabBarStyle} {...otherProps}>
                {children && children}
            </View>
        );
    }
}

TabBar.propTypes = {
    color: PropTypes.string,
    ...View.propTypes
};

TabBar.defaultProps = {
    color: Platform.OS === "android" ? commonColors.primary : "#f8f8f8"
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
