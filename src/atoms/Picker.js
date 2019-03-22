import React, { Component } from "react";
import { StyleSheet, Platform, Picker, View, Modal } from "react-native";
import createReactClass from "create-react-class";
import Ionicon from "react-native-vector-icons/Ionicons";
import { commonColors } from "../utils/color";
import { Text } from "./Text";

class PickerAE extends Component {

    constructor(props) {
        super(props);
        this.state = {
            focused: false,
            chosenValue: props.selectedValue ? props.selectedValue : undefined
        }
    }

    setValue = (value) => {
        this.setState({ chosenValue: value });
        if (this.props.onValueChange) {
            this.props.onValueChange(value);
        }
    }

    render() {
        const { color, placeholder, animationType, modalTransparent, selectedValue, children, ...otherProps } = this.props;

        if (Platform.OS === "android") {
            return (
                <View style={this.state.focused ? [styles.pickerAndroid, { borderColor: color, borderWidth: 2 }] : styles.pickerAndroid} >
                    <Picker
                        style={{ height: 45 }}
                        ref={c => (this._root = c)}
                        {...otherProps}
                        selectedValue={this.state.chosenValue}
                        onValueChange={this.setValue.bind(this)}
                    >
                        {children}
                    </Picker>
                </View>
            )
        }
        return (
            <View>
                <View style={this.state.focused ? [styles.pickerIos, { borderColor: color, borderWidth: 2 }] : styles.pickerIos}>
                    <Text
                        ref={(c) => this._root = c}
                        style={styles.input}
                        onPress={() => this.setState({ focused: true })}
                    >
                        {this.state.chosenValue ? this.state.chosenValue : placeholder}
                    </Text>
                    <Ionicon onPress={() => this.setState({ focused: true })} name={this.state.focused ? "ios-arrow-dropup" : "ios-arrow-dropdown"} style={styles.icon} color={commonColors.inputGrey} size={24} />
                </View>
                <Modal
                    supportedOrientations={['portrait', 'landscape']}
                    animationType={animationType}
                    transparent={modalTransparent}
                    visible={this.state.focused}
                    onRequestClose={() => { }}
                >
                    <Text
                        onPress={() => this.setState({ focused: false })}
                        style={{ flex: 1 }}
                    />
                    <Picker
                        ref={c => (this._root = c)}
                        {...otherProps}
                        selectedValue={this.state.chosenValue}
                        onValueChange={this.setValue.bind(this)}
                    >
                        {otherProps.children}
                    </Picker>
                    <Text
                        onPress={() => this.setState({ focused: false })}
                        style={{ flex: 1 }}
                    />
                </Modal>
            </View>
        )
    }
}

PickerAE.Item = createReactClass({
    render() {
        return <Picker.Item {...this.props} />;
    }
});

PickerAE.propTypes = {
    ...Picker.propTypes
}

Picker.defaultProps = {
    modalTransparent: true,
    color: commonColors.primary,
    animationType: "fade",
    mode: "dropdown",
    placeholder: "Select Option"
}

const styles = StyleSheet.create({
    pickerAndroid: {
        width: "100%",
        marginVertical: 10,
        borderRadius: 10,
        paddingHorizontal: 5,
        borderColor: commonColors.inputGrey,
        borderWidth: 0.9
    },
    pickerIos: {
        width: "100%",
        flexDirection: 'row',
        borderRadius: 15,
        marginVertical: 10,
        borderColor: commonColors.inputGrey,
        borderWidth: 0.9,
        justifyContent: 'center',
        alignItems: 'center',
        height: 45,
        paddingHorizontal: 5
    },
    icon: {
        position: "absolute",
        top: 13,
        right: 18
    },
    input: {
        flex: 1
    }
});

export { PickerAE as Picker };
