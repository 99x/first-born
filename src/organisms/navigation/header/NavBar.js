import React, { Component } from "react";
import { View, StatusBar, Platform } from "react-native";
import PropTypes from "prop-types";
import { deviceVariables } from "../../../variables/deviceVariables";
import { commonColors, shadeColor } from "../../../utils/color";
import { isIphoneX } from "../../../utils/platform";

export class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            orientation: "portrait"
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

    calculateHeight(mode, inset) {
        const { toolbarHeight } = this.props;

        const insetValues =
            mode === "portrait" ? inset.portrait : inset.landscape;

        let oldHeight = null;

        if (toolbarHeight != undefined) {
            oldHeight = toolbarHeight;
        }

        let height = oldHeight + insetValues.bottomInset;

        if (!isIphoneX()) {
            height -= 20;
        }

        return height;
    }

    calculatePadder(mode, inset) {
        const { paddingTop } = this.props;
        const insetValues =
            mode === "portrait" ? inset.portrait : inset.landscape;
        const topPadder = paddingTop + insetValues.topInset;
        return topPadder;
    }

    render() {
        const {
            statusBarColor,
            statusBarContent,
            transparent,
            translucent,
            children,
            toolbarHeight,
            paddingTop,
            style,
            shadowProperties,
            ...otherProps
        } = this.props;
        const { orientation } = this.state;

        let navBarStyle = { ...style };

        if (!transparent) {
            navBarStyle = { ...navBarStyle, ...shadowProperties };
        }

        if (Platform.OS === "ios") {
            if (isIphoneX()) {
                return (
                    <View
                        onLayout={e => this.layoutChange(e.nativeEvent.layout)}
                        style={{
                            height: this.calculateHeight(
                                orientation,
                                deviceVariables.Inset
                            ),
                            paddingTop: this.calculatePadder(
                                orientation,
                                deviceVariables.Inset
                            ),
                            backgroundColor: statusBarColor
                        }}
                    >
                        <StatusBar
                            backgroundColor={shadeColor(statusBarColor, 0.2)}
                            barStyle={statusBarContent}
                            translucent={transparent ? true : translucent}
                        />

                        <View
                            ref={c => (this._root = c)}
                            {...otherProps}
                            style={navBarStyle}
                        >
                            {children && children}
                        </View>
                    </View>
                );
            }
            return (
                <View
                    onLayout={e => this.layoutChange(e.nativeEvent.layout)}
                    style={{
                        height: this.calculateHeight(
                            orientation,
                            deviceVariables.Inset
                        ),
                        paddingTop: paddingTop,
                        backgroundColor: statusBarColor
                    }}
                >
                    <StatusBar
                        backgroundColor={shadeColor(statusBarColor, 0.2)}
                        barStyle={statusBarContent}
                        translucent={transparent ? true : translucent}
                    />

                    <View
                        ref={c => (this._root = c)}
                        {...otherProps}
                        style={navBarStyle}
                    >
                        {children && children}
                    </View>
                </View>
            );
        }

        return (
            <View
                onLayout={e => this.layoutChange(e.nativeEvent.layout)}
                style={{
                    height: toolbarHeight,
                    paddingTop: paddingTop,
                    backgroundColor: statusBarColor
                }}
            >
                <StatusBar
                    backgroundColor={shadeColor(statusBarColor, 30)}
                    barStyle={statusBarContent}
                    translucent={transparent ? true : translucent}
                />

                <View
                    ref={c => (this._root = c)}
                    {...otherProps}
                    style={navBarStyle}
                >
                    {children && children}
                </View>
            </View>
        );
    }
}

NavBar.propTypes = {
    transparent: PropTypes.bool,
    statusBarColor: PropTypes.string,
    statusBarContent: PropTypes.oneOf(["light-content", "dark-content"]),
    ...View.propTypes
};

NavBar.defaultProps = {
    statusBarColor:
        Platform.OS === "android" ? commonColors.primary : "#f8f8f8",
    toolbarHeight: Platform.OS === "android" ? 56 : 64,
    paddingTop: Platform.OS === "android" ? 0 : 20,
    statusBarContent:
        Platform.OS === "android" ? "light-content" : "dark-content",
    style: {
        flex: 1,
        flexDirection: "row"
    },
    shadowProperties: {
        elevation: 3,
        shadowColor: commonColors.black,
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.4,
        shadowRadius: 1.2
    }
};
