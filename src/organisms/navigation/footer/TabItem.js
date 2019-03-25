import React, { Component } from "react";
import { Platform, StyleSheet, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";

import { Text } from "../../../atoms/Text";
import { commonColors } from "../../../utils/color";
import { Icon } from "../../../atoms/Icon";

export class TabItem extends Component {


    constructor(props) {
        super(props);

        this.state = {
            active: props.active ? true : false
        }
    }

    handleOnPress = () => {
        const { onPress } = this.props;
        this.setState({ active: true });
        if (onPress) {
            onPress();
        }
    }

    render() {
        const { label, children, activeColor, inactiveColor, ...otherProps } = this.props;
        const { active } = this.state;

        let newChildren = [];

        const color = active ? activeColor : inactiveColor;

        if (children) {

            newChildren = React.Children.map(children, child => child && child.type === Text ?
                React.cloneElement(child, { ...child.props, size: "footnote", color }) : child && child.type === Icon ?
                    React.cloneElement(child, { ...child.props, size: 28, color }) :
                    child);

        }

        return (
            <TouchableOpacity style={styles.container} {...otherProps} onPress={this.handleOnPress}>
                {newChildren && newChildren}
            </TouchableOpacity>
        )
    }
}

TabItem.propTypes = {
    activeColor: PropTypes.string,
    inactiveColor: PropTypes.string,
    active: PropTypes.bool,
    ...TouchableOpacity.propTypes
}

TabItem.defaultProps = {
    activeColor: Platform.OS === "android" ? commonColors.white : "#0a60ff",
    inactiveColor: Platform.OS === "android" ? "rgba(209, 216, 224, 0.8)" : "#8e8e93",
    active: false
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 10
    }
})