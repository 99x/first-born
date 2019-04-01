import React, { Component } from "react";
import { FlatList, View, Platform } from "react-native";
import PropTypes from "prop-types";
import { Card } from "../molecules/cards/Card";
import { deviceVariables } from "../variables/deviceVariables";

export class CardList extends Component {
    render() {
        const {
            backgroundColor,
            horizontal,
            margin,
            ...otherProps
        } = this.props;

        return (
            <FlatList
                style={horizontal ? { marginTop: 5 } : {}}
                keyExtractor={this.keyExtractor}
                renderItem={({ item }) => {
                    return (
                        <View
                            style={
                                horizontal
                                    ? { marginRight: margin }
                                    : { marginBottom: margin }
                            }
                        >
                            <Card
                                {...item}
                                backgroundColor={backgroundColor}
                                style={
                                    horizontal
                                        ? { width: deviceVariables.width - 40 }
                                        : { width: deviceVariables.width - 10 }
                                }
                                {...otherProps}
                            />
                        </View>
                    );
                }}
                horizontal={horizontal ? true : false}
                {...otherProps}
            />
        );
    }

    keyExtractor = () => (Math.floor(Math.random() * 1000000) + 1).toString();
}

CardList.propTypes = {
    backgroundColor: PropTypes.string,
    ...FlatList.propTypes
};

CardList.defaultProps = {
    margin: Platform.OS === "ios" ? 15 : 10
};
