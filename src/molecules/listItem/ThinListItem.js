import React, { Component } from "react";
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Image,
    Platform
} from "react-native";
import PropTypes from "prop-types";

import { Text } from "../../atoms/Text";
import { Icon } from "../../atoms/Icon";
import { commonColors } from "../../utils/color";
import { deviceVariables } from "../../variables/deviceVariables";
import { Thumbnail } from "../../atoms/Thumbnail";

export class ThinListItem extends Component {
    render() {
        const {
            title,
            description,
            image,
            icon,
            backgroundColor,
            arrow,
            rounded,
            onPress,
            ...otherProps
        } = this.props;

        const listItemStyle = [styles.container, { backgroundColor }];

        return (
            <TouchableOpacity style={listItemStyle}
                disabled={!onPress}
                onPress={onPress} {...otherProps}>
                {image && rounded && (
                    <View style={styles.imageContainer}>
                        <Thumbnail size="small" {...image} rounded style={{ marginLeft: 10 }} />
                    </View>
                )}
                {image && !rounded && (
                    <View style={styles.imageContainer}>
                        <Thumbnail {...image} customSize={60} />
                    </View>
                )}
                {icon && (
                    <View style={styles.imageContainer}>
                        <Icon size={20} {...icon} />
                    </View>
                )}
                <View style={styles.textContainer}>
                    <Text color={commonColors.darkGrey} bold>
                        {title}
                    </Text>
                    {description && (
                        <Text size="footnote" color={commonColors.lightGrey}>
                            {description}
                        </Text>
                    )}
                </View>
                {arrow && (
                    <View style={styles.imageContainer}>
                        <Icon
                            type={
                                Platform.OS === "ios" ? "ionicon" : "material"
                            }
                            name={
                                Platform.OS === "ios"
                                    ? "arrow-forward"
                                    : "keyboard-arrow-right"
                            }
                            size={25}
                            color={commonColors.inputGrey}
                        />
                    </View>
                )}
            </TouchableOpacity>
        );
    }
}

ThinListItem.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    image: PropTypes.shape({
        ...Thumbnail.propTypes
    }),
    icon: PropTypes.shape({
        ...Icon.propTypes
    }),
    backgroundColor: PropTypes.string,
    arrow: PropTypes.bool,
    rounded: PropTypes.bool,
    ...TouchableOpacity.propTypes
};

ThinListItem.defaultProps = {
    backgroundColor: commonColors.white,
    arrow: false,
    rounded: true
};

const styles = StyleSheet.create({
    container: {
        width: deviceVariables.width,
        flex: 1,
        flexDirection: "row",
        borderTopWidth: 0.5,
        borderBottomWidth: 0.5,
        borderTopColor: commonColors.lightGrey,
        borderBottomColor: commonColors.lightGrey,
        paddingRight: 10
    },
    textContainer: {
        flex: 4,
        flexDirection: "column",
        paddingVertical: 10,
        paddingHorizontal: 15,
        alignItems: "flex-start"
    },
    imageContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});
