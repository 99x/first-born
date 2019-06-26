import React, { Component } from "react";
import { View, StyleSheet, Platform } from "react-native";
import PropTypes from "prop-types";
import { deviceVariables } from "../../../variables/deviceVariables";
import { commonColors } from "../../../utils/color";
import { isIphoneX } from "../../../utils/platform";

export class TabBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            orientation:
                deviceVariables.height > deviceVariables.width
                    ? "portrait"
                    : "landscape"
        };
    }

    layoutChange(val) {
        let maxComp = Math.max(deviceVariables.width, deviceVariables.height);
        if (val.width >= maxComp) {
            this.setState({ orientation: "landscape" });
        } else {
            this.setState({ orientation: "portrait" });
        }
    }

    calculatePadder(mode, inset) {
        const insetValues =
            mode === "portrait" ? inset.portrait : inset.landscape;
        let bottomPadder = insetValues.bottomInset;
        return bottomPadder;
    }

    render() {
        const {
            color,
            activeColor,
            inactiveColor,
            children,
            top,
            ...otherProps
        } = this.props;

        let tabBarStyle = [styles.container, { backgroundColor: color }];

        if (isIphoneX() && !top) {
            tabBarStyle.push({
                paddingBottom:
                    this.calculatePadder(
                        this.state.orientation,
                        deviceVariables.Inset
                    ) * 0.55
            });
        }

        const newChildren = React.Children.map(children, child =>
            child
                ? React.cloneElement(child, {
                      ...child.props,
                      activeColor,
                      inactiveColor,
                      top
                  })
                : null
        );

        return (
            <View style={tabBarStyle} {...otherProps}>
                {newChildren && newChildren}
            </View>
        );
    }
}

TabBar.propTypes = {
    color: PropTypes.string,
    activeColor: PropTypes.string,
    inactiveColor: PropTypes.string,
    top: PropTypes.bool,
    ...View.propTypes
};

TabBar.defaultProps = {
    color: Platform.OS === "android" ? commonColors.primary : "#f8f8f8",
    top: false
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        ...Platform.select({
            ios: {
                borderTopColor: commonColors.inputGrey,
                borderTopWidth: 1
            }
        })
    }
});
