"use strict";

import { StyleSheet, View, Animated, Dimensions, Image, Platform } from "react-native";
import React, { Component } from "react";
import PropTypes from "prop-types";
import { Text } from "../../../atoms/Text";
import { Button } from "../../../atoms/Button";

import { commonColors } from "../../../utils/color";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
    notificationContainer: {
        height: height * 0.09,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        width,
        position: "absolute",
        paddingRight: 0,
        paddingLeft: 10
    },
    notificationContainerIos: {
        borderRadius: 5,
        margin: 5,
        width: width - 10
    },
    notificationText: {
        color: commonColors.white,
        flex: 3,
    },
    buttonContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    buttonContainerIos: {
        borderLeftColor: '#616161',
        borderLeftWidth: 0.9
    }
});

export class SnackBar extends Component {
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
            backgroundColor: props.backgroundColor || "#333333",
            message: props.message,
            duration: props.duration || 10000,
            shouldHideAfterDelay:
                props.shouldHideAfterDelay == undefined
                    ? true
                    : props.shouldHideAfterDelay,
            durationToShow: props.durationToShow || 350,
            durationToHide: props.durationToHide || 350,
            onClickDismiss: props.onClickDismiss || true,
            action: this.getActionProps(props.action),
            position: props.position || 'bottom'
        };
    }

    getActionProps(action) {
        if (action) {
            return {
                title: action.title,
                onPress: () => this.handleButtonClick(action.onPress),
                color: action.color
            }
        }
        return {
            title: 'Close'.toUpperCase(),
            onPress: () => this.hideMessageBarAlert(),
            color: commonColors.error
        }
    }

    handleButtonClick = (action) => {
        if (action) {
            action();
        }

        if (this.state.onClickDismiss) {
            this.hideMessageBarAlert()
        }
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
        let containerStyle = styles.notificationContainer;
        let buttonContainerStyle = [styles.buttonContainer];

        if (Platform.OS === 'ios') {
            containerStyle = { ...containerStyle, ...styles.notificationContainerIos };
            buttonContainerStyle.push(styles.buttonContainerIos);
        }

        if (this.state.position === 'bottom') {
            containerStyle = { ...containerStyle, bottom: 0 };
        } else {
            containerStyle = { ...containerStyle, top: 0 };
        }

        return (
            <Animated.View
                style={[
                    containerStyle,
                    {
                        opacity: this.animatedValue,
                        backgroundColor: this.state.backgroundColor
                    }
                ]}
            >
                {this.renderMessage()}
                <View style={buttonContainerStyle}>
                    {this.renderButton()}
                </View>
            </Animated.View>
        );
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

    renderButton() {
        if (this.state.action) {
            const { title, ...otherActionProps } = this.state.action;
            return (
                <Button outline transparent style={{ margin: 0 }} {...otherActionProps} >
                    <Text style={{ textTransform: 'uppercase' }}>{title}</Text>
                </Button>
            );
        }
    }
}

SnackBar.propTypes = {
    message: PropTypes.string,
    backgroundColor: PropTypes.string,
    duration: PropTypes.number,
    shouldHideAfterDelay: PropTypes.bool,
    durationToShow: PropTypes.number,
    durationToHide: PropTypes.number,
    onClickDismiss: PropTypes.bool,
    action: PropTypes.shape({
        title: PropTypes.string,
        onPress: PropTypes.func,
        color: PropTypes.string
    })
};

SnackBar.defaultProps = {
    backgroundColor: commonColors.white,
};
