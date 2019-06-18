"use strict";

import { StyleSheet, View, Animated, Dimensions, Image } from "react-native";
import React, { Component } from "react";
import PropTypes from "prop-types";
import { Icon } from "../../../atoms/Icon";
import { Text } from "../../../atoms/Text";

import { commonColors } from "../../../utils/color";
import { getFontSize } from "first-born/src/variables/textSizeVariables";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
    notificationContainer: {
        padding: 5,
        paddingVertical: 10,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        width,
        position: "absolute",
        top: 0
    },
    notificationText: {
        fontWeight: "bold",
        color: commonColors.white
    },
    iconStyle: {
        paddingRight: 10
    },
    imageStyle: {
        width: 18,
        height: 18
    }
});

export class Notification extends Component {
    constructor(props) {
        super(props);

        this.animatedValue = new Animated.Value(0);
        this.notifyAlertHiddenCallback = null;
        this.alertShown = false;
        this.timeoutHide = null;

        this.state = this.getStateByProps(props);
    }

    componentWillReceiveProps(nextProps) {
        this.setNewState(nextProps);
    }

    setNewState(state) {
        this.setState(this.getStateByProps(state));
    }

    getStateByProps(props) {
        return {
            color: props.color || "#007bff",
            icon: props.icon || { name: "alert" },
            image: props.image || undefined,
            message: props.message,
            duration: props.duration || 3000,
            shouldHideAfterDelay:
                props.shouldHideAfterDelay == undefined
                    ? true
                    : props.shouldHideAfterDelay,
            durationToShow: props.durationToShow || 350,
            durationToHide: props.durationToHide || 350,
            fontSize: props.fontSize || getFontSize("sub_heading"),
            fontWeight: props.fontWeight || "bold",
            textColor: props.textColor || commonColors.white,
        };
    }

    showMessageBarAlert() {
        if (this.alertShown || this.state.message === null) {
            return;
        }

        this.alertShown = true;

        Animated.timing(this.animatedValue, {
            toValue: 1,
            duration: this.state.durationToShow
        }).start(this._showMessageBarAlertComplete());
    }

    _showMessageBarAlertComplete() {
        if (this.state.shouldHideAfterDelay) {
            this.timeoutHide = setTimeout(() => {
                this.hideMessageBarAlert();
            }, this.state.duration);
        }
    }

    hideMessageBarAlert() {
        if (!this.alertShown) {
            return;
        }

        clearTimeout(this.timeoutHide);

        Animated.timing(this.animatedValue, {
            toValue: 0,
            duration: this.state.durationToHide
        }).start(this._hideMessageBarAlertComplete());
    }

    _hideMessageBarAlertComplete() {
        this.alertShown = false;
    }

    render() {
        return (
            <Animated.View
                style={[
                    styles.notificationContainer,
                    {
                        opacity: this.animatedValue,
                        backgroundColor: this.state.color
                    }
                ]}
            >
                {this.renderIcon()}
                {this.renderMessage()}
            </Animated.View>
        );
    }

    renderIcon() {
        const { icon, image, textColor } = this.state;
        if (image) {
            return (
                <View style={styles.iconStyle}>
                    <Image {...image} style={styles.imageStyle} />
                </View>
            );
        }
        return (
            <View style={styles.iconStyle}>
                <Icon {...icon} color={textColor} />
            </View>
        );
    }

    renderMessage() {
        if (this.state.message !== null) {
            const { fontSize, fontWeight, textColor } = this.state;
            const textFontSize = typeof fontSize === "string" ? getFontSize(fontSize) : fontSize
            return (
                <Text style={[styles.notificationText, { fontSize: textFontSize, fontWeight }]} color={textColor} >
                    {this.state.message}
                </Text>
            );
        }
    }
}

Notification.propTypes = {
    message: PropTypes.string,
    icon: PropTypes.shape({
        ...Icon.propTypes
    }),
    color: PropTypes.string,
    image: PropTypes.shape({
        ...Image.propTypes
    }),
    duration: PropTypes.number,
    shouldHideAfterDelay: PropTypes.bool,
    durationToShow: PropTypes.number,
    durationToHide: PropTypes.number,
    fontWeight: PropTypes.string,
    fontSize: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    textColor: PropTypes.string
};

Notification.defaultProps = {
    color: commonColors.white,
    image: undefined
};
