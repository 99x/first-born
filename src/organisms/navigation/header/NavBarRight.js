import React, { Component } from "react";
import { View, StyleSheet } from "react-native";

export class NavBarRight extends Component {

    render() {

        const { children, ...otherProps } = this.props;

        return (
            <View style={styles.container} {...otherProps} >
                {children && children}
            </View>
        );
    }
}

NavBarRight.propTypes = {
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    }
})