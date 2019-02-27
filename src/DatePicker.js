import React, { Component } from "react";
import { TextInput, Text, StyleSheet, View, Modal, Platform, DatePickerIOS, DatePickerAndroid } from "react-native";
import PropTypes from "prop-types";
import Ionicon from "react-native-vector-icons/Ionicons";

export class DatePicker extends Component {

    constructor(props) {
        super(props);
        this.state = {
            focused: false,
            modalVisible: false,
            defaultDate: props.defaultDate ? props.defaultDate : new Date(),
            chosenDate: !props.placeholder && props.defaultDate ? props.defaultDate : undefined
        }
    }

    render() {
        const { placeholder, color, modalTransparent, animationType, minimumDate, maximumDate, locale, timeZoneOffsetInMinutes } = this.props;

        const underLineColor = !color ? "#000" : color

        if (Platform.OS === "android") {
            return (
                <View style={this.state.focused ? [styles.datePickerAndroid, { borderBottomColor: underLineColor, borderBottomWidth: 2 }] : [styles.datePickerAndroid, { borderBottomColor: underLineColor, borderBottomWidth: 1 }]}>
                    <Text
                        ref={(c) => this._root = c}
                        style={styles.input}
                        onPress={() => this.openAndroidDatePicker()}
                    >
                        {this.state.chosenDate ? this.formatChosenDate(this.state.chosenDate) : !placeholder ? "Select Date" : placeholder}
                    </Text>
                    <Ionicon name="md-calendar" onPress={() => this.openAndroidDatePicker()} style={styles.icon} color={underLineColor} size={20} />
                </View>
            )
        }
        return (
            <View>
                <View style={styles.datePickerIos} >
                    <Text
                        ref={(c) => this._root = c}
                        style={styles.input}
                        onPress={() => this.openIosDatePicker()}
                    >
                        {this.state.chosenDate ? this.formatChosenDate(this.state.chosenDate) : !placeholder ? "Select Date" : placeholder}
                    </Text>
                    <Ionicon onPress={() => this.openIosDatePicker()} name="ios-calendar" style={styles.icon} color={underLineColor} size={20} />
                </View>
                <Modal
                    supportedOrientations={['portrait', 'landscape']}
                    animationType={animationType}
                    transparent={modalTransparent}
                    visible={this.state.modalVisible}
                    onRequestClose={() => { }}
                >
                    <Text
                        onPress={() => this.setState({ modalVisible: false })}
                        style={{ backgroundColor: "#F5FCFF", flex: 1 }}
                    />
                    <DatePickerIOS
                        date={this.state.chosenDate ? this.state.chosenDate : this.state.defaultDate}
                        onDateChange={this.setDate.bind(this)}
                        minimumDate={minimumDate}
                        maximumDate={maximumDate}
                        mode="date"
                        locale={locale}
                        timeZoneOffsetInMinutes={timeZoneOffsetInMinutes}
                    />
                </Modal>
            </View>
        )
    }

    setDate(date) {
        this.setState({ chosenDate: new Date(date) });
        if (this.props.onDateChange) {
            this.props.onDateChange(date);
        }
    }

    openIosDatePicker() {
        this.setState({ modalVisible: true });
    }

    async openAndroidDatePicker() {
        try {
            this.setState({ focused: true });
            const pickedDate = await DatePickerAndroid.open({
                date: this.state.chosenDate ? this.state.chosenDate : this.state.defaultDate,
                minDate: this.props.minimumDate,
                maxDate: this.props.maximumDate,
                mode: this.props.androidMode
            });

            const { action, year, month, day } = pickedDate;

            if (action === DatePickerAndroid.dateSetAction) {
                const selectedDate = new Date(year, month, day);
                this.setDate(selectedDate);
                this.setState({ focused: false });
            }
        } catch ({ code, message }) {
            console.warn('Cannot open date picker', message);
            this.setState({ focused: false });
        }
    }

    formatChosenDate(date) {
        if (this.props.formatChosenDate) {
            return this.props.formatChosenDate(date);
        }
        return [
            date.getDate(),
            date.getMonth() + 1,
            date.getFullYear(),
        ].join('/');
    }

}

DatePicker.propTypes = {
    color: PropTypes.string,
    formatChosenDate: PropTypes.func,
    onDateChange: PropTypes.func,
    defaultDate: PropTypes.object,
    minimumDate: PropTypes.object,
    maximumDate: PropTypes.object,
    locale: PropTypes.string,
    modalTransparent: PropTypes.bool,
    androidMode: PropTypes.string,
    animationType:PropTypes.string,
    ...TextInput.propTypes
}

const styles = StyleSheet.create({
    datePickerAndroid: {
        width: "100%",
        flexDirection: 'row',
        borderTopRightRadius: 3,
        borderTopLeftRadius: 3,
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        paddingHorizontal: 5,
    },
    datePickerIos: {
        backgroundColor: "white",
        borderRadius: 10,
        paddingHorizontal: 5,
        marginVertical: 10,
        flex: 1,
        borderColor: "#e2e2e2",
        borderWidth: 0.9,
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 50
    },
    icon: {
        paddingRight: 12
    },
    input: {
        flex: 1
    }
})
