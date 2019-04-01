import React, { Component } from "react";
import { View, StyleSheet, Platform } from "react-native";
import { Text } from "../../../atoms/Text";
import { commonColors } from "../../../utils/color";

export class NavBarBody extends Component {
    render() {
        const { style, children, color, ...otherProps } = this.props;

        const newChildren = React.Children.map(children, child =>
            child && child.type === Text
                ? React.cloneElement(child, {
                      ...child.props,
                      style: { ...child.props.style },
                      size: "h6",
                      bold: true,
                      color
                  })
                : null
        );

        return (
            <View style={styles.container} {...otherProps}>
                {newChildren && newChildren}
            </View>
        );
    }
}

NavBarBody.defaultProps = {
    color: Platform.OS === "android" ? commonColors.white : commonColors.black
};

const styles = StyleSheet.create({
    container: {
        flex: 3,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    }
});
