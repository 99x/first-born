import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, Animated, Platform } from 'react-native';

import Icon from "react-native-vector-icons/Ionicons";

import { getTouchableComponent } from '../../utils/touchable';

class FloatingButtonItem extends Component {
    constructor(props) {
        super(props);

        this.animation = new Animated.Value(0);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.active !== this.props.active) {
            Animated.spring(this.animation, { toValue: nextProps.active ? 1 : 0 }).start();
        }
    }

    handleOnPress = () => {
        const { onPress } = this.props;
        onPress();
    };

    renderText() {
        const {
            // @deprecated in favor of textElevation
            text,
            position,
            textElevation,
            textBackground,
            textColor,
            textStyle,
            textProps,
            textContainerStyle
        } = this.props;

        if (text) {
            return (
                <View
                    key="text"
                    style={[
                        styles.textContainer,
                        styles[`${position}TextContainer`],
                        {
                            backgroundColor: textBackground,
                            elevation: textElevation,
                            shadowOffset: {
                                height: textElevation,
                            }
                        },
                        textContainerStyle
                    ]}
                >
                    <Text
                        style={[
                            styles.text,
                            {
                                color: textColor
                            },
                            textStyle
                        ]}
                        {...textProps}
                    >
                        {text}
                    </Text>
                </View>
            );
        }

        return null;
    }

    renderButton() {
        const { icon, color } = this.props;

        return (
            <View key="button" style={[styles.button, { backgroundColor: color }]}>
                {
                    !icon.includes("logo") ? <Icon name={Platform.OS === "android" ? "md-" + icon : "ios-" + icon} size={25} color={"#FFF"} /> : <Icon name={icon} size={22} color={"#FFF"} />
                }
            </View>
        );
    }

    render() {
        const {
            position,
            distanceToEdge,
            paddingTopBottom,
            margin
        } = this.props;
        const Touchable = getTouchableComponent(false);

        const animatedActionContainerStyle = {
            marginBottom: this.animation.interpolate({
                inputRange: [0, 1],
                outputRange: [5, 10]
            })
        };

        const components = [];
        const distanceToEdgeActionContainer = {};

        if (position === 'right') {
            components.push(this.renderText());
            components.push(this.renderButton());
            distanceToEdgeActionContainer.paddingRight = distanceToEdge + margin;
        } else {
            components.push(this.renderButton());
        }

        return (
            <Touchable activeOpacity={0.4} style={styles.container} onPress={this.handleOnPress}>
                <Animated.View
                    style={[
                        styles.actionContainer,
                        animatedActionContainerStyle,
                        styles[`${position}ActionContainer`],
                        distanceToEdgeActionContainer,
                        { paddingVertical: paddingTopBottom }
                    ]}
                >
                    {components}
                </Animated.View>
            </Touchable>
        );
    }
}

FloatingButtonItem.propTypes = {
    color: PropTypes.string,
    icon: PropTypes.any,
    name: PropTypes.string.isRequired,
    textContainerStyle: PropTypes.object,
    text: PropTypes.string,
    textStyle: PropTypes.object,
    textProps: PropTypes.object,
    textBackground: PropTypes.string,
    textColor: PropTypes.string,
    // not on doc
    textElevation: PropTypes.number,
    // not modified by user
    position: PropTypes.oneOf(['left', 'right', 'center']),
    active: PropTypes.bool,
    distanceToEdge: PropTypes.number,
    paddingTopBottom: PropTypes.number, // modified by parent property "actionsPaddingTopBottom"
    onPress: PropTypes.func,
    margin: PropTypes.number
};

FloatingButtonItem.defaultProps = {
    color: '#000',
    distanceToEdge: 30,
    textElevation: 5,
    textColor: '#444444',
    textBackground: '#ffffff',
    margin: 8
};

const styles = StyleSheet.create({
    container: {
        elevation: 0,
        flex: 1,
        flexDirection: 'column'
    },
    actionContainer: {
        elevation: 0,
        flex: 1,
        flexDirection: 'row',
        paddingLeft: 0,
        paddingRight: 0,
        paddingBottom: 8,
        paddingTop: 8
    },
    centerActionContainer: {
        paddingLeft: 10,
        paddingRight: 10
    },
    textContainer: {
        paddingHorizontal: 8,
        shadowOpacity: 0.35,
        shadowOffset: {
            width: 0,
            height: 5
        },
        shadowColor: '#000000',
        shadowRadius: 3,
        elevation: 5,
        borderRadius: 4,
        height: 22,
        marginTop: 8
    },
    leftTextContainer: {
        marginLeft: 14
    },
    rightTextContainer: {
        marginRight: 14
    },
    text: {
        fontSize: 14,
        lineHeight: 20
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        shadowOpacity: 0.35,
        shadowOffset: {
            width: 0,
            height: 5
        },
        shadowColor: '#000000',
        shadowRadius: 3,
        elevation: 5,
        width: 40,
        height: 40,
        padding: 5
    },
    icon: {
        width: 30,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default FloatingButtonItem;