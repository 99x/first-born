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
            chosenValue: !props.placeholder && props.selectedValue ? props.selectedValue : undefined
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
        const { focused, chosenValue } = this.state;

        if (Platform.OS === "android") {
            return (
                <View style={focused ? [styles.pickerAndroid, { borderColor: color, borderWidth: 2 }] : styles.pickerAndroid} >
                    <Picker
                        style={{ height: 45 }}
                        ref={c => (this._root = c)}
                        {...otherProps}
                        selectedValue={chosenValue}
                        onValueChange={this.setValue.bind(this)}
                    >
                        {children}
                    </Picker>
                </View>
            )
        }
        return (
            <View>
                <View style={focused ? [styles.pickerIos, { borderColor: color, borderWidth: 2 }] : styles.pickerIos}>
                    <Text
                        ref={(c) => this._root = c}
                        style={styles.input}
                        onPress={() => this.setState({ focused: true })}
                    >
                        {chosenValue ? chosenValue : placeholder}
                    </Text>
                    <Ionicon onPress={() => this.setState({ focused: true })} name={focused ? "ios-arrow-up" : "ios-arrow-down"} style={styles.icon} color={commonColors.inputGrey} size={24} />
                </View>
                <Modal
                    supportedOrientations={['portrait', 'landscape']}
                    animationType={animationType}
                    transparent={modalTransparent}
                    visible={focused}
                    onRequestClose={() => { }}
                >
                    <Text
                        onPress={() => this.setState({ focused: false })}
                        style={{ flex: 1 }}
                    />
                    <Picker
                        ref={c => (this._root = c)}
                        {...otherProps}
                        selectedValue={chosenValue}
                        onValueChange={this.setValue.bind(this)}
                        style={{ flex: 1, backgroundColor: commonColors.white }}
                    >
                        {children}
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

PickerAE.defaultProps = {
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
        flex: 1,
        paddingLeft: 10
    }
});

export { PickerAE as Picker };
