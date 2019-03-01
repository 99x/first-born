import React, { Component } from "react";
import { StyleSheet, Platform, Picker, View, Modal, Text } from "react-native";
import createReactClass from "create-react-class";
import Ionicon from "react-native-vector-icons/Ionicons";

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
        const { color, placeholder, animationType, modalTransparent, selectedValue, ...otherProps } = this.props;

        const underLineColor = !color ? "#000" : color;

        if (Platform.OS === "android") {
            return (
                <View
                    style={this.state.focused ? [styles.pickerAndroid, { borderBottomColor: underLineColor, borderBottomWidth: 2 }] : [styles.pickerAndroid, { borderBottomColor: underLineColor, borderBottomWidth: 0.5 }]}
                    onResponderGrant={() => this.setState({ focused: true })}
                    onResponderTerminate={() => this.setState({ focused: false })}
                >
                    <Picker
                        ref={c => (this._root = c)}
                        mode="dropdown"
                        {...otherProps}
                        selectedValue={this.state.chosenValue}
                        onValueChange={this.setValue.bind(this)}
                    >
                        {otherProps.children}
                    </Picker>
                    <Ionicon style={styles.icon} size={24} color={underLineColor} name={this.state.focused ? "md-arrow-dropup" : "md-arrow-dropdown"} />
                </View>
            )
        }
        return (
            <View>
                <View style={styles.pickerIos}>
                    <Text
                        ref={(c) => this._root = c}
                        style={styles.input}
                        onPress={() => this.setState({ focused: true })}
                    >
                        {this.state.chosenValue ? this.state.chosenValue : !placeholder ? "Select Option" : placeholder}
                    </Text>
                    <Ionicon onPress={() => this.setState({ focused: true })} name={this.state.focused ? "ios-arrow-dropup" : "ios-arrow-dropdown"} style={styles.icon} color={"#e2e2e2"} size={24} />
                </View>
                <Modal
                    supportedOrientations={['portrait', 'landscape']}
                    animationType={animationType ? animationType : "fade"}
                    transparent={modalTransparent}
                    visible={this.state.focused}
                    onRequestClose={() => { }}
                >
                    <Text
                        onPress={() => this.setState({ focused: false })}
                        style={{ backgroundColor: "#F5FCFF", flex: 1 }}
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
                        style={{ backgroundColor: "#F5FCFF", flex: 1 }}
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

const styles = StyleSheet.create({
    pickerAndroid: {
        width: "100%",
        marginVertical: 10,
    },
    pickerIos: {
        width: "100%",
        flexDirection: 'row',
        borderRadius: 10,
        marginVertical: 10,
        borderColor: "#e2e2e2",
        borderWidth: 0.9,
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        paddingHorizontal: 5,
        backgroundColor: "white"
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
