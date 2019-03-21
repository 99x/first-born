import React, { Component } from "react";
import { FlatList, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import { Card } from "react-native-atom-elements/src/molecules/cards/Card";

export class CardList extends Component {

    render() {
        const { backgroundColor, horizontal, ...otherProps } = this.props;

        return (
            <FlatList
                style={{ marginTop: 5 }}
                keyExtractor={this.keyExtractor}
                renderItem={({ item }) => { return (<Card image={item.image} title={item.title} description={item.description} backgroundColor={backgroundColor} />) }}
                {...otherProps} />
        )
    }

    keyExtractor = (item) => (item).toString();
}

CardList.propTypes = {
    ...FlatList.propTypes
}
