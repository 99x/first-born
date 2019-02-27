import React, { Component } from "react";
import { StyleSheet, Platform, Picker, View } from "react-native";
import createReactClass from "create-react-class";
import Ionicon from "react-native-vector-icons/Ionicons";

class PickerAE extends Component {

    constructor(props) {
        super(props);
        this.state = {
            focused: false
        }
    }

    render() {
        const { color, ...otherProps } = this.props;

        const underLineColor = !color ? "#000" : color;

        if (Platform.OS === "android") {
            return (
                <View
                    style={this.state.focused ? [styles.pickerAndroid, { borderBottomColor: underLineColor, borderBottomWidth: 2 }] : [styles.pickerAndroid, { borderBottomColor: underLineColor, borderBottomWidth: 1 }]}
                    onResponderGrant={() => this.setState({ focused: true })}
                    onResponderTerminate={() => this.setState({ focused: false })}
                >
                    <Picker
                        ref={c => (this._root = c)}
                        mode="dropdown"
                        {...otherProps}>
                        {otherProps.children}
                    </Picker>
                    <Ionicon style={styles.icon} size={24} color={underLineColor} name={this.state.focused ? "md-arrow-dropup" : "md-arrow-dropdown"} />
                </View>
            )
        }
        return (
            <View style={styles.pickerIos}>
                <Picker
                    ref={c => (this._root = c)}
                    {...otherProps}>
                    {otherProps.children}
                </Picker>
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
        borderTopRightRadius: 3,
        borderTopLeftRadius: 3,
        marginVertical: 10,
    },
    pickerIos: {
        backgroundColor: "white",
        borderRadius: 10,
        paddingHorizontal: 5,
        marginVertical: 10,
        width: '100%',
        borderColor: "#e2e2e2",
        borderWidth: 0.9,
        height: 50
    },
    icon: {
        position: "absolute",
        top: 13,
        right: 18
    }
});

export { PickerAE as Picker };
