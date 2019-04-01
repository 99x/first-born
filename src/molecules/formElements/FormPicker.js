import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import PropTypes from "prop-types";

import { Picker } from "../../atoms/Picker";
import { Text } from "../../atoms/Text";
import { commonColors } from "../../utils/color";

export class FormPicker extends Component {
    render() {
        const { label, children, data, ...otherProps } = this.props;

        return (
            <View style={styles.container}>
                <Text size="sub_heading" color={commonColors.darkGrey}>
                    {label}
                </Text>
                <Picker {...otherProps}>
                    {children
                        ? children
                        : data
                        ? data.map((dataElement, key) => (
                              <Picker.Item {...dataElement} key={key} />
                          ))
                        : null}
                </Picker>
            </View>
        );
    }
}

FormPicker.propTypes = {
    label: PropTypes.string.isRequired,
    date: PropTypes.array,
    ...Picker.propTypes
};

const styles = StyleSheet.create({
    container: {
        width: "100%"
    }
});
