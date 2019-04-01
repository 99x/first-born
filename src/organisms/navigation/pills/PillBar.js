import React, { Component } from "react";
import { View, StyleSheet, Platform, Image } from "react-native";
import PropTypes from "prop-types";

import { Text } from "../../../atoms/Text";
import { Icon } from "../../../atoms/Icon";
import { PillItem } from "./PillItem";
import { commonColors } from "../../../utils/color";

export class PillBar extends Component {
    render() {
        const {
            color,
            pillHeaders,
            onPillChange,
            activePill,
            ...otherProps
        } = this.props;

        return (
            <View
                style={
                    Platform.OS === "android"
                        ? styles.container
                        : [
                              styles.container,
                              {
                                  borderColor: color,
                                  borderRadius: 15,
                                  borderWidth: 1.5
                              }
                          ]
                }
            >
                {pillHeaders &&
                    pillHeaders.map((pill, index) => {
                        return (
                            <PillItem
                                activeColor={color}
                                onPress={() => onPillChange(index)}
                                active={index === activePill}
                                {...otherProps}
                            >
                                {this.getIcon(pill)}
                                {pill && pill.title && (
                                    <Text>{pill.title}</Text>
                                )}
                            </PillItem>
                        );
                    })}
            </View>
        );
    }

    getIcon(pill) {
        const { icon, image } = pill;

        if (image) {
            return <Image source={image} />;
        } else if (icon) {
            return <Icon name={icon} />;
        }
        return null;
    }
}

PillBar.propTypes = {
    color: PropTypes.string,
    ...PillItem.propTypes
};

PillBar.defaultProps = {
    color: Platform.OS === "android" ? commonColors.primary : "#0a60ff"
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        marginTop: 35,
        marginBottom: 5,
        marginHorizontal: Platform.OS === "android" ? 0 : 20,
        overflow: "hidden"
    }
});
