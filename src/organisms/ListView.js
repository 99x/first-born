import React, { Component } from "react";
import { FlatList } from "react-native";
import { ListItem } from "../molecules/listItem/ListItem";

export class ListView extends Component {

    render() {
        const { backgroundColor, horizontal, ...otherProps } = this.props;

        return (
            <FlatList
                style={{ marginTop: 5, width: "100%" }}
                keyExtractor={this.keyExtractor}
                renderItem={({ item }) => { return (<ListItem image={item.image} title={item.title} description={item.description} backgroundColor={backgroundColor} />) }}
                {...otherProps} />
        )
    }

    keyExtractor = () => (Math.floor(Math.random() * 1000000) + 1).toString();
}

ListView.propTypes = {
    ...FlatList.propTypes
}
