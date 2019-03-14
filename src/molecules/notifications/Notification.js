"use strict"

import { AppRegistry, StyleSheet, Text, View, TouchableOpacity, Animated, Dimensions, Image, } from 'react-native';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Icon } from "../../atoms/Icon";
import { commonColors } from "../../utils/color";

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    notificationContainer: {
        height: height * 0.05,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        width,
        position: 'absolute',
        top: 0
    },
    notificationText: {
        fontWeight: 'bold',
        color: commonColors.white
    },
    iconStyle: {
        paddingRight: 10
    }
});

export class Notification extends Component {

    constructor(props) {
        super(props)

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
            color: props.color || '#007bff',
            icon: props.icon || "alert",
            message: props.message,
            duration: props.duration || 3000,
            shouldHideAfterDelay: (props.shouldHideAfterDelay == undefined) ? true : props.shouldHideAfterDelay,
            durationToShow: props.durationToShow || 350,
            durationToHide: props.durationToHide || 350
        };
    }

    showMessageBarAlert() {
        // If an alert is already shonw or doesn't have a message, do nothing
        if (this.alertShown || (this.state.message === null)) {
            return;
        }

        this.alertShown = true;

        Animated.timing(this.animatedValue, {
            toValue: 1,
            duration: this.state.durationToShow
        }).start(this._showMessageBarAlertComplete());
    }

    _showMessageBarAlertComplete() {
        // If the duration is null, do not hide the
        if (this.state.shouldHideAfterDelay) {
            this.timeoutHide = setTimeout(() => {
                this.hideMessageBarAlert();
            }, this.state.duration);
        }
    }

    isMessageBarShown() {
        return this.alertShown;
    }

    hideMessageBarAlert() {
        if (!this.alertShown) {
            return;
        }

        clearTimeout(this.timeoutHide);

        // Animate the alert to hide it to the top of the screen
        Animated.timing(this.animatedValue, {
            toValue: 0,
            duration: this.state.durationToHide
        }).start(this._hideMessageBarAlertComplete());
    }

    _hideMessageBarAlertComplete() {
        // The alert is not shown anymore
        this.alertShown = false;
    }

    _apllyAnimationTypeTransformation() {
        var animationY = this.animatedValue.interpolate({
            inputRange: [0, 1],
            outputRange: [-height, 0]
        });
        this.animationTypeTransform = [{ translateY: animationY }];
    }

    render() {
        this._apllyAnimationTypeTransformation();

        return (
            <Animated.View style={[styles.notificationContainer, { transform: this.animationTypeTransform, backgroundColor: this.state.color }]}>
                {this.renderIcon()}
                {this.renderMessage()}
            </Animated.View>
        );
    }

    renderIcon() {
        const { icon } = this.state;
        return (
            <View style={styles.iconStyle}>
                <Icon name={icon} />
            </View>
        )
    }

    renderMessage() {
        if (this.state.message !== null) {
            return (
                <Text style={styles.notificationText}>
                    {this.state.message}
                </Text>
            );
        }
    }
}

Notification.propTypes = {
    icon: PropTypes.string,
    color: PropTypes.string
}
