import React, { Component } from "react";
import { FlatList } from "react-native";
import PropTypes from "prop-types";
import { ListItem } from "../molecules/listItem/ListItem";

export class ListView extends Component {
    render() {
        const {
            backgroundColor,
            horizontal,
            renderItem,
            secondary,
            ...otherProps
        } = this.props;

        return (
            <FlatList
                style={{ width: "100%" }}
                keyExtractor={this.keyExtractor}
                renderItem={
                    renderItem
                        ? renderItem
                        : ({ item }) => {
                              return (
                                  <ListItem
                                      {...item}
                                      backgroundColor={backgroundColor}
                                      secondary={secondary}
                                  />
                              );
                          }
                }
                {...otherProps}
            />
        );
    }

    keyExtractor = () => (Math.floor(Math.random() * 1000000) + 1).toString();
}

ListView.propTypes = {
    backgroundColor: PropTypes.string,
    ...FlatList.propTypes
};
