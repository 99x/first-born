import React, { Component } from "react";
import {
    TextInput,
    StyleSheet,
    View,
    Modal,
    Platform,
    DatePickerIOS,
    DatePickerAndroid,
    TimePickerAndroid
} from "react-native";
import PropTypes from "prop-types";
import { Icon } from "./Icon";
import { commonColors } from "../utils/color";
import { Text } from "./Text";

export class DatePicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            focused: false,
            error: false,
            defaultDate: props.defaultDate ? props.defaultDate : new Date(),
            chosenDate:
                !props.placeholder && props.defaultDate
                    ? props.defaultDate
                    : undefined
        };
    }

    render() {
        const {
            placeholder,
            color,
            modalTransparent,
            animationType,
            minimumDate,
            maximumDate,
            locale,
            timeZoneOffsetInMinutes,
            mode,
            noStyle,
            rounded,
            underline,
            defaultStyle,
            style,
            activeStyle,
            errorStyle,
            errorMessage,
            errorColor
        } = this.props;

        const { focused, chosenDate, defaultDate, error } = this.state;

        let inputStyle = [styles.input];
        let inputActiveStyle = [styles.input];
        let inputErrorStyle = [styles.input];

        if (noStyle) {
            inputStyle.push(style);
            inputActiveStyle.push(activeStyle);
            inputErrorStyle.push(errorStyle);
        } else if (underline) {
            inputStyle.push(styles.underline);
            inputActiveStyle.push({
                borderBottomColor: color,
                borderBottomWidth: 2
            });
            inputErrorStyle.push({
                borderBottomColor: errorColor,
                borderBottomWidth: 2
            });
        } else if (defaultStyle || rounded) {
            if (Platform.OS === "android") {
                inputStyle.push(styles.default, styles.defaultAndroid);
                inputActiveStyle.push(styles.default, styles.defaultAndroid, {
                    borderColor: color,
                    borderWidth: 2
                });
                inputErrorStyle.push(styles.default, styles.defaultAndroid, {
                    borderColor: errorColor,
                    borderWidth: 2
                });
            } else {
                inputStyle.push(styles.default, styles.defaultIos);
                inputActiveStyle.push(styles.default, styles.defaultIos, {
                    borderColor: color,
                    borderWidth: 2
                });
                inputErrorStyle.push(styles.default, styles.defaultIos, {
                    borderColor: errorColor,
                    borderWidth: 2
                });
            }

            if (rounded) {
                inputStyle.push(styles.rounded);
                inputActiveStyle.push(styles.rounded, {
                    borderColor: color,
                    borderWidth: 2
                });
                inputErrorStyle.push(styles.rounded, {
                    borderColor: errorColor,
                    borderWidth: 2
                });
            }
        }

        if (Platform.OS === "android") {
            return (
                <View style={styles.inputContainer}>
                    <View
                        style={
                            error
                                ? inputErrorStyle
                                : focused
                                ? inputActiveStyle
                                : inputStyle
                        }
                    >
                        <Text
                            ref={c => (this._root = c)}
                            style={
                                !chosenDate
                                    ? styles.inputPlaceholder
                                    : styles.inputValue
                            }
                            onPress={() =>
                                mode === "date"
                                    ? this.openAndroidDatePicker()
                                    : this.openAndroidTimePicker()
                            }
                        >
                            {chosenDate
                                ? this.formatChosenDate(chosenDate)
                                : placeholder}
                        </Text>
                        <View style={styles.iconContainer}>
                            <Icon
                                name="calendar"
                                onPress={() =>
                                    mode === "date"
                                        ? this.openAndroidDatePicker()
                                        : this.openAndroidTimePicker()
                                }
                                style={styles.icon}
                                color={focused ? color : commonColors.inputGrey}
                                size={20}
                            />
                        </View>
                    </View>
                    {error && errorMessage && (
                        <Text size="caption_big" color={errorColor}>
                            {errorMessage}
                        </Text>
                    )}
                </View>
            );
        }
        return (
            <View style={styles.inputContainer}>
                <View
                    style={
                        error
                            ? inputErrorStyle
                            : focused
                            ? inputActiveStyle
                            : inputStyle
                    }
                >
                    <Text
                        ref={c => (this._root = c)}
                        style={
                            !chosenDate
                                ? styles.inputPlaceholder
                                : styles.inputValue
                        }
                        onPress={() => this.openIosDatePicker()}
                    >
                        {chosenDate
                            ? this.formatChosenDate(chosenDate)
                            : placeholder}
                    </Text>
                    <View style={styles.iconContainer}>
                        <Icon
                            onPress={() => this.openIosDatePicker()}
                            name="calendar"
                            color={focused ? color : commonColors.inputGrey}
                            size={20}
                            style={styles.icon}
                        />
                    </View>
                </View>
                {error && errorMessage && (
                    <Text size="caption_big" color={errorColor}>
                        {errorMessage}
                    </Text>
                )}
                <Modal
                    supportedOrientations={["portrait", "landscape"]}
                    animationType={animationType}
                    transparent={modalTransparent}
                    visible={focused}
                    onRequestClose={() => {}}
                >
                    <Text
                        onPress={() => this.setState({ focused: false })}
                        style={{ flex: 1 }}
                    />
                    <DatePickerIOS
                        date={chosenDate ? chosenDate : defaultDate}
                        onDateChange={this.setDate.bind(this)}
                        minimumDate={minimumDate}
                        maximumDate={maximumDate}
                        mode={mode}
                        locale={locale}
                        timeZoneOffsetInMinutes={timeZoneOffsetInMinutes}
                        style={{ flex: 1, backgroundColor: commonColors.white }}
                    />
                    <Text
                        onPress={() => this.setState({ focused: false })}
                        style={{ flex: 1 }}
                    />
                </Modal>
            </View>
        );
    }

    setDate(date) {
        const { onDateChange, isValid } = this.props;
        this.setState({ chosenDate: new Date(date) });

        if (onDateChange) {
            onDateChange(date);
        }

        if (isValid) {
            this.setState({ error: !isValid(date) });
        }
    }

    openIosDatePicker() {
        this.setState({ focused: true });
    }

    async openAndroidTimePicker() {
        try {
            this.setState({ focused: true });
            const pickedTime = await TimePickerAndroid.open({
                is24Hour: this.props.is24Hour,
                mode: "default"
            });

            const { action, hour, minute } = pickedTime;

            if (action !== TimePickerAndroid.dismissedAction) {
                const currentDate = new Date();
                const selectedDate = new Date(
                    currentDate.getFullYear(),
                    currentDate.getMonth(),
                    currentDate.getDay(),
                    hour,
                    minute
                );
                this.setDate(selectedDate);
            }
            this.setState({ focused: false });
        } catch ({ code, message }) {
            console.warn("Cannot open time picker", message);
            this.setState({ focused: false });
        }
    }

    async openAndroidDatePicker() {
        try {
            this.setState({ focused: true });
            const pickedDate = await DatePickerAndroid.open({
                date: this.state.chosenDate
                    ? this.state.chosenDate
                    : this.state.defaultDate,
                minDate: this.props.minimumDate,
                maxDate: this.props.maximumDate,
                mode: "default"
            });

            const { action, year, month, day } = pickedDate;

            if (action === DatePickerAndroid.dateSetAction) {
                const selectedDate = new Date(year, month, day);
                this.setDate(selectedDate);
            }
            this.setState({ focused: false });
        } catch ({ code, message }) {
            console.warn("Cannot open date picker", message);
            this.setState({ focused: false });
        }
    }

    formatChosenDate(date) {
        if (this.props.formatChosenDate) {
            return this.props.formatChosenDate(date);
        }
        if (this.props.mode === "date") {
            return [
                date.getDate(),
                date.getMonth() + 1,
                date.getFullYear()
            ].join("/");
        } else {
            return [date.getHours(), date.getMinutes()].join(":");
        }
    }
}

DatePicker.propTypes = {
    color: PropTypes.string,
    isValid: PropTypes.func,
    errorMessage: PropTypes.string,
    formatChosenDate: PropTypes.func,
    onDateChange: PropTypes.func,
    defaultDate: PropTypes.object,
    minimumDate: PropTypes.object,
    maximumDate: PropTypes.object,
    locale: PropTypes.string,
    is24Hour: PropTypes.bool,
    modalTransparent: PropTypes.bool,
    animationType: PropTypes.string,
    mode: PropTypes.oneOf(["date", "time"]),
    activeStyle: PropTypes.object,
    errorStyle: PropTypes.object,
    rounded: PropTypes.bool,
    underline: PropTypes.bool,
    defaultStyle: PropTypes.bool,
    noStyle: PropTypes.bool,
    ...TextInput.propTypes
};

DatePicker.defaultProps = {
    modalTransparent: true,
    color: commonColors.primary,
    animationType: "fade",
    placeholder: "Select Date",
    mode: "date",
    is24Hour: true,
    errorColor: commonColors.error,
    defaultStyle: true
};

const styles = StyleSheet.create({
    inputContainer: {
        width: "100%",
        marginBottom: 5
    },
    icon: {
        marginRight: 5
    },
    iconContainer: {
        alignItems: "center",
        justifyContent: "center"
    },
    inputPlaceholder: {
        flex: 1,
        color: commonColors.inputGrey
    },
    inputValue: {
        flex: 1,
        color: commonColors.black
    },
    input: {
        marginTop: 10,
        marginBottom: 5,
        width: "100%",
        height: 45,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    default: {
        borderColor: commonColors.inputGrey,
        borderWidth: 0.9
    },
    defaultAndroid: {
        paddingHorizontal: 5,
        borderRadius: 10
    },
    defaultIos: {
        paddingHorizontal: 10,
        borderRadius: 15
    },
    underline: {
        borderBottomColor: commonColors.inputGrey,
        borderBottomWidth: 0.9
    },
    rounded: {
        borderRadius: 45 / 2,
        paddingHorizontal: 10
    }
});
