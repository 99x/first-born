import React, { Component } from "react";
import { View, StyleSheet, Platform } from "react-native";
import PropTypes from "prop-types";

import { Text } from "../../../atoms/Text";
import { commonColors } from "../../../utils/color";

export class TabBar extends Component {

    render() {
        const { color, children, ...otherProps } = this.props;

        return (
            <View style={[styles.container, { backgroundColor: color }]} {...otherProps}>
                {children && children}
            </View>
        )
    }
}

TabBar.propTypes = {
    color: PropTypes.string,
    ...View.propTypes
}

TabBar.defaultProps = {
    color: Platform.OS === "android" ? commonColors.primary : "#f8f8f8"
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row"
    }
})