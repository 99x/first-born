import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import PropTypes from "prop-types";

import { Picker } from "../../atoms/Picker";
import { Text } from "../../atoms/Text";

export class FormPicker extends Component {

    render() {
        const { label, children, ...otherProps } = this.props;

        return (
            <View style={styles.container}>
                <Text size="sub_heading" color="rgba(33, 33, 33, 0.87)">{label}</Text>
                <Picker {...otherProps}>
                    {children}
                </Picker>
            </View>
        )
    }
}

FormPicker.propTypes = {
    label: PropTypes.string.isRequired,
    ...Picker.propTypes
}

const styles = StyleSheet.create({
    container: {
        width: "100%"
    }
})
