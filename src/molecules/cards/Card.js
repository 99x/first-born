import React, { Component } from "react";
import { View, StyleSheet, TouchableOpacity, Image, Platform, Dimensions } from "react-native";
import PropTypes from "prop-types";

import { Text } from "../../atoms/Text";
import { commonColors } from "react-native-atom-elements/src/utils/color";

const { width } = Dimensions.get("window");

export class Card extends Component {

    render() {
        const { title, description, image, onPress, block, backgroundColor, style, ...otherProps } = this.props;

        const cardBackColor = backgroundColor ? backgroundColor : commonColors.white;

        let cardStyle = block ? [styles.containerBlock, { backgroundColor: cardBackColor }] : [styles.container, , { backgroundColor: cardBackColor }];

        if (style) {
            cardStyle.push(style);
        }

        return (
            <TouchableOpacity style={cardStyle} disabled={!onPress} onPress={onPress} {...otherProps}>
                {image && <Image source={image} style={styles.image} />}
                <View style={styles.textContainer}>
                    <Text size="h6" color="rgba(33, 33, 33, 0.87)" bold >{title}</Text>
                    {description && <Text size="sub_heading" color="rgba(33, 33, 33, 0.4)">{description}</Text>}
                </View>
            </TouchableOpacity>
        )
    }
}

Card.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    image: PropTypes.any,
    block: PropTypes.bool,
    backgroundColor: PropTypes.string,
    ...TouchableOpacity.propTypes
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        shadowColor: "#000",
        shadowOffset: { width: 3, height: 3 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 3,
        borderRadius: 3,
        overflow: "hidden",
        marginBottom: 5
    },
    containerBlock: {
        width,
        overflow: "hidden",
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderTopColor: "rgba(33, 33, 33,  0.4)",
        borderBottomColor: "rgba(33, 33, 33,  0.4)",
        marginBottom: 5
    },
    textContainer: {
        padding: 20,
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },
    image: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 150,
        borderTopLeftRadius: 3,
        borderTopRightRadius: 3
    }
})