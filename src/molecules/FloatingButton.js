import React, { Component } from "react";
import { View, StyleSheet, Platform, Dimensions } from "react-native";
import PropTypes from "prop-types";
import { Button } from "../atoms/Button";
import Icon from "react-native-vector-icons/Ionicons";

const { width, height } = Dimensions.get("window");

const color_overlay = "rgba(33, 33, 33, 0.8)";

export class FloatingButton extends Component {

    constructor(props) {
        super(props);
        this.state = {
            active: false
        }
    }

    toggleActive = () => {
        this.setState({ active: !this.state.active })
    }

    render() {
        const { children, iconName, onPress, color, ...otherProps } = this.props;

        const onButtonPress = onPress ? onPress : this.toggleActive;

        const buttonColor = color ? color : "#000"

        if (Platform.OS === "android") {
            return (
                <View style={this.state.active ? [styles.container, { backgroundColor: color_overlay }] : styles.container}>
                    {children && this.state.active && this.renderChildren(children)}
                    <View style={styles.floatingButtonAndroid}>
                        <Button rounded size={"large"} onPress={onButtonPress} color={this.state.active ? "red" : buttonColor} {...otherProps}>
                            <Icon name={iconName ? "md-" + iconName : !this.state.active ? "md-add" : "md-close"} size={22} />
                        </Button>
                    </View>
                </View>
            )
        }
        return (
            <View style={this.state.active ? [styles.container, { backgroundColor: color_overlay }] : styles.container}>
                {children && this.state.active && this.renderChildren(children)}
                <View style={styles.floatingButtonIos} >
                    <Button rounded size={"large"} onPress={onButtonPress} color={this.state.active ? "red" : buttonColor} {...otherProps}>
                        <Icon name={iconName ? "ios-" + iconName : !this.state.active ? "md-add" : "md-remove"} size={22} />
                    </Button>
                </View>
            </View>
        )
    }

    renderChildren(children) {
        if (Platform.OS === "android") {
            return (
                <View style={styles.floatingColumnAndroid} >
                    {children}
                </View>
            )
        }
        return (
            <View style={styles.floatingRowIos} >
                {children}
            </View>
        )
    }
}

FloatingButton.propTypes = {
    iconName: PropTypes.string,
    color: PropTypes.string,
    ...Button.propTypes
}

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        width,
        height
    },
    floatingButtonAndroid: {
        position: "absolute",
        bottom: 30,
        right: 20
    },
    floatingButtonIos: {
        position: "absolute",
        bottom: 30,
        right: (width / 2) - 35
    },
    floatingColumnAndroid: {
        flexDirection: 'column',
        justifyContent: "space-between",
        position: 'absolute',
        flex: 1,
        bottom: 100,
        right: 20,
        alignItems: "center"
    },
    floatingRowIos: {
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center",
        position: 'absolute',
        flex: 1,
        bottom: 90,
        paddingHorizontal: 20,
        width: "100%"
    }
})
