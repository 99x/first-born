import React, { Component } from "react";
import PropTypes from "prop-types";
import { StyleSheet, View, Animated, Image } from "react-native";
import { Icon } from "../../atoms/Icon";
import { Text } from "../../atoms/Text";

import { getTouchableComponent } from "../../utils/touchable";
import { commonColors } from "../../utils/color";

class FloatingButtonItem extends Component {
    constructor(props) {
        super(props);
        this.animation = new Animated.Value(0);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.active !== this.props.active) {
            Animated.spring(this.animation, {
                toValue: nextProps.active ? 1 : 0
            }).start();
        }
    }

    handleOnPress = () => {
        const { onPress } = this.props;
        onPress();
    };

    renderText() {
        const {
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
                                height: textElevation
                            }
                        },
                        textContainerStyle
                    ]}
                >
                    <Text
                        style={[styles.text, { color: textColor }, textStyle]}
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
        const { icon, color, image } = this.props;

        if (image) {
            return (
                <View
                    key="button"
                    style={[styles.button, { backgroundColor: color }]}
                >
                    <Image source={image} style={styles.imageStyle} />
                </View>
            );
        }

        return (
            <View
                key="button"
                style={[styles.button, { backgroundColor: color }]}
            >
                <Icon name={icon} size={25} color={commonColors.white} />
            </View>
        );
    }

    render() {
        const {
            position,
            distanceToEdge,
            paddingTopBottom,
            margin,
            tabs
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

        if (position === "right") {
            components.push(this.renderText());
            components.push(this.renderButton());
            if (tabs) {
                distanceToEdgeActionContainer.paddingRight = 20 + margin;
            } else {
                distanceToEdgeActionContainer.paddingRight =
                    distanceToEdge + margin;
            }
        } else {
            components.push(this.renderButton());
        }

        return (
            <Touchable
                activeOpacity={0.4}
                style={styles.container}
                onPress={this.handleOnPress}
            >
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
    position: PropTypes.oneOf(["left", "right", "center"]),
    active: PropTypes.bool,
    distanceToEdge: PropTypes.number,
    paddingTopBottom: PropTypes.number, // modified by parent property "actionsPaddingTopBottom"
    onPress: PropTypes.func,
    margin: PropTypes.number,
    image: PropTypes.any
};

FloatingButtonItem.defaultProps = {
    color: commonColors.primary,
    distanceToEdge: 30,
    textElevation: 5,
    textColor: commonColors.darkGrey,
    textBackground: commonColors.white,
    margin: 8,
    image: undefined
};

const styles = StyleSheet.create({
    container: {
        elevation: 0,
        flex: 1,
        flexDirection: "column"
    },
    actionContainer: {
        elevation: 0,
        flex: 1,
        flexDirection: "row",
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
        shadowColor: commonColors.black,
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
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20,
        shadowOpacity: 0.35,
        shadowOffset: {
            width: 0,
            height: 5
        },
        shadowColor: commonColors.black,
        shadowRadius: 3,
        elevation: 5,
        width: 40,
        height: 40,
        padding: 5
    },
    imageStyle: {
        width: 25,
        height: 25
    }
});

export default FloatingButtonItem;
