import React, { Component } from "react";
import { FlatList } from "react-native";
import PropTypes from "prop-types";
import { ListItem } from "../molecules/listItem/ListItem";
import { ThinListItem } from "../molecules/listItem/ThinListItem";

export class ListView extends Component {
    render() {
        const {
            backgroundColor,
            horizontal,
            renderItem,
            secondary,
            thin,
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
                            if (thin) {
                                return (
                                    <ThinListItem
                                        {...item}
                                        backgroundColor={backgroundColor}
                                        secondary={secondary}
                                    />
                                );
                            }
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
    thin: PropTypes.bool,
    ...FlatList.propTypes
};

ListView.defaultProps = {
    thin: false
}