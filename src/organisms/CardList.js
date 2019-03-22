import React, { Component } from "react";
import { FlatList, Dimensions, View, Platform } from "react-native";
import { Card } from "../molecules/cards/Card";

const { width } = Dimensions.get("window");

export class CardList extends Component {

    render() {
        const { backgroundColor, horizontal, margin, ...otherProps } = this.props;

        return (
            <FlatList
                style={{ marginTop: 5 }}
                keyExtractor={this.keyExtractor}
                renderItem={({ item }) => {
                    return (
                        <View style={{ marginRight: margin }}>
                            <Card image={item.image} title={item.title} description={item.description} backgroundColor={backgroundColor} style={{ width: width - 40 }} />
                        </View>
                    )
                }}
                horizontal
                {...otherProps} />
        )
    }

    keyExtractor = () => (Math.floor(Math.random() * 1000000) + 1).toString();
}

CardList.propTypes = {
    ...FlatList.propTypes
}

CardList.defaultProps = {
    margin: Platform.OS === "ios" ? 15 : 10
}
