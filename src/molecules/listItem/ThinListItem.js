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

export class ThinListItem extends Component {
    render() {
        const {
            title,
            description,
            image,
            icon,
            backgroundColor,
            arrow,
            ...otherProps
        } = this.props;

        const listItemStyle = [styles.container, { backgroundColor }];

        return (
            <TouchableOpacity style={listItemStyle} {...otherProps}>
                {image && (
                    <View style={styles.imageContainer}>
                        <Image style={styles.image} {...image} />
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
                            size={20}
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
        ...Image.propTypes
    }),
    icon: PropTypes.shape({
        ...Icon.propTypes
    }),
    backgroundColor: PropTypes.string,
    arrow: PropTypes.bool,
    ...TouchableOpacity.propTypes
};

ThinListItem.defaultProps = {
    backgroundColor: commonColors.white,
    arrow: false
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
        paddingLeft: 5,
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
        justifyContent: "center",
        alignItems: "center"
    },
    image: {
        height: 30,
        width: 30,
        borderRadius: 30 / 2
    }
});
