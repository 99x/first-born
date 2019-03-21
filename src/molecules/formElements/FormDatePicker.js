import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import PropTypes from "prop-types";

import { DatePicker } from "../../atoms/DatePicker";
import { Text } from "../../atoms/Text";

export class FormDatePicker extends Component {

    render() {
        const { label, ...otherProps } = this.props;

        return (
            <View style={styles.container}>
                <Text size="sub_heading" color="rgba(33, 33, 33, 0.87)">{label}</Text>
                <DatePicker {...otherProps} />
            </View>
        )
    }
}

FormDatePicker.propTypes = {
    label: PropTypes.string.isRequired,
    ...DatePicker.propTypes
}

const styles = StyleSheet.create({
    container: {
        width: "100%"
    }
})