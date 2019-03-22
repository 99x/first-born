import React, { Component } from "react";
import { View, StyleSheet, TouchableOpacity, Image, Platform, Dimensions } from "react-native";
import PropTypes from "prop-types";

import { Text } from "../../atoms/Text";
import { commonColors } from "react-native-atom-elements/src/utils/color";

const { width } = Dimensions.get("window");

export class Card extends Component {

    render() {
        const { title, description, image, onPress, block, backgroundColor, style, ...otherProps } = this.props;

        let cardStyle = block ? [styles.containerBlock, { backgroundColor }] : [styles.container, { backgroundColor }];

        if (style) {
            cardStyle.push(style);
        }

        return (
            <TouchableOpacity style={cardStyle} disabled={!onPress} onPress={onPress} {...otherProps}>
                {image && <Image source={image} style={styles.image} />}
                <View style={styles.textContainer}>
                    <Text size="h6" color={commonColors.darkGrey} bold >{title}</Text>
                    {description && <Text size="sub_heading" color={commonColors.lightGrey}>{description}</Text>}
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

Card.defaultProps = {
    backgroundColor: commonColors.white
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        ...Platform.select({
            android: {
                borderRadius: 3,
                elevation: 3,
            },
            ios: {
                borderRadius: 10,
                shadowOpacity: 0.75,
                shadowRadius: 5,
                shadowColor: commonColors.black,
                shadowOffset: { height: 5, width: 5 },
            }
        }),
        overflow: "hidden",
        margin: 5
    },
    containerBlock: {
        width,
        overflow: "hidden",
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderTopColor: commonColors.lightGrey,
        borderBottomColor: commonColors.lightGrey,
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
        ...Platform.select({
            android: {
                height: 150,
                borderTopLeftRadius: 3,
                borderTopRightRadius: 3
            },
            ios: {
                height: 200,
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10
            }
        }),
    }
})