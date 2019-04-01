import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import PropTypes from "prop-types";

import { Input } from "../../atoms/Input";
import { Text } from "../../atoms/Text";
import { commonColors } from "../../utils/color";

export class FormInput extends Component {
    render() {
        const { label, ...otherProps } = this.props;

        return (
            <View style={styles.container}>
                <Text size="sub_heading" color={commonColors.darkGrey}>
                    {label}
                </Text>
                <Input {...otherProps} />
            </View>
        );
    }
}

FormInput.propTypes = {
    label: PropTypes.string.isRequired,
    ...Input.propTypes
};

const styles = StyleSheet.create({
    container: {
        width: "100%"
    }
});
