import React, { Component } from "react";
import { FlatList } from "react-native";
import PropTypes from "prop-types";
import { AccordionElement } from "../molecules/cards/AccordionElement";

export class Accordion extends Component {
    render() {
        const { horizontal, renderItem, ...otherProps } = this.props;

        return (
            <FlatList
                keyExtractor={this.keyExtractor}
                renderItem={
                    renderItem
                        ? renderItem
                        : ({ item }) => {
                              return (
                                  <AccordionElement
                                      {...item}
                                      isList
                                      {...otherProps}
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

Accordion.propTypes = {
    bodyColor: PropTypes.string,
    headerColor: PropTypes.string,
    expandedIcon: PropTypes.string,
    icon: PropTypes.string,
    ...FlatList.propTypes
};
