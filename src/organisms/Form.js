import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import PropTypes from "prop-types";

import { Picker } from "../atoms/Picker";

import { FormDatePicker } from "../molecules/formElements/FormDatePicker";
import { FormInput } from "../molecules/formElements/FormInput";
import { FormPicker } from "../molecules/formElements/FormPicker";
import { FormTextArea } from "../molecules/formElements/FormTextArea";

export class Form extends Component {
    render() {
        const { color, formElements, ...otherProps } = this.props;

        const inputColor = color ? color : "#486c86";

        return (
            <View style={styles.container}>
                {formElements.map((element, key) => {
                    return (
                        <View style={styles.formElementContainer} key={key}>
                            {this.renderElements(element, inputColor, otherProps)}
                        </View>
                    );
                })}
            </View>
        );
    }

    renderElements(element, color, styleProps) {
        element.color = color;
        const { type, pickerData, ...otherProps } = element;

        switch (type) {
            case "text":
                return <FormInput {...styleProps} {...otherProps} />;
            case "textarea":
                return <FormTextArea {...styleProps} {...otherProps} />;
            case "date":
                return <FormDatePicker {...styleProps} {...otherProps} />;
            case "picker":
                return (
                    <FormPicker {...styleProps} {...otherProps}>
                        {pickerData.map((dataElement, key) => (
                            <Picker.Item {...dataElement} key={key} />
                        ))}
                    </FormPicker>
                );
        }
    }
}

Form.propTypes = {
    color: PropTypes.string,
    activeStyle: PropTypes.object,
    errorStyle: PropTypes.object,
    rounded: PropTypes.bool,
    underline: PropTypes.bool,
    defaultStyle: PropTypes.bool,
    noStyle: PropTypes.bool,
    errorColor: PropTypes.string,
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%"
    },
    formElementContainer: {
        marginTop: 10
    }
});
