import React, { Component } from "react";
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Animated,
    Platform
} from "react-native";
import PropTypes from "prop-types";

import { Text } from "../../atoms/Text";
import { Icon } from "../../atoms/Icon";
import { commonColors } from "../../utils/color";

export class AccordionElement extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: props.expanded
        };
        this.fadeAnim = new Animated.Value(0);
    }

    animate() {
        this.fadeAnim = new Animated.Value(0);
        Animated.timing(this.fadeAnim, {
            toValue: 1,
            duration: 250,
            useNativeDriver: true
        }).start();
    }

    handleShowHide = () => {
        this.setState({ expanded: !this.state.expanded });
        this.animate();
    };

    render() {
        const {
            title,
            description,
            image,
            onPress,
            block,
            bodyColor,
            headerColor,
            style,
            isList,
            ...otherProps
        } = this.props;

        const { expanded } = this.state;

        let cardStyle = [
            styles.container,
            { borderColor: headerColor, borderWidth: 1 }
        ];
        const headerStyle = [
            styles.titleContainer,
            { backgroundColor: headerColor }
        ];
        const bodyStyle = {
            ...styles.bodyContainer,
            backgroundColor: bodyColor
        };

        if (!isList) {
            cardStyle.push({ borderRadius: 5 });
        }

        if (style) {
            cardStyle.push(style);
        }

        return (
            <View style={cardStyle}>
                <TouchableOpacity
                    onPress={this.handleShowHide}
                    style={headerStyle}
                    {...otherProps}
                >
                    <Text
                        color={commonColors.darkGrey}
                        bold
                        style={{ flex: 1 }}
                    >
                        {title}
                    </Text>
                    {this.renderIcon()}
                </TouchableOpacity>
                {expanded && (
                    <Animated.View
                        style={[bodyStyle, { opacity: this.fadeAnim }]}
                    >
                        <Text size="footnote" color={commonColors.darkGrey}>
                            {description}
                        </Text>
                    </Animated.View>
                )}
            </View>
        );
    }

    renderIcon() {
        const { expandedIcon, icon } = this.props;
        const { expanded } = this.state;
        return (
            <Icon
                name={expanded ? expandedIcon : icon}
                size={20}
                color={commonColors.inputGrey}
            />
        );
    }
}

AccordionElement.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    bodyColor: PropTypes.string,
    headerColor: PropTypes.string,
    expanded: PropTypes.bool,
    expandedIcon: PropTypes.string,
    icon: PropTypes.string,
    isList: PropTypes.bool,
    ...TouchableOpacity.propTypes
};

AccordionElement.defaultProps = {
    bodyColor: commonColors.white,
    headerColor: commonColors.lightGrey,
    isList: false,
    expanded: false,
    expandedIcon: Platform.OS === "ios" ? "arrow-up" : "arrow-dropup",
    icon: Platform.OS === "ios" ? "arrow-down" : "arrow-dropdown"
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flex: 1,
        flexDirection: "column",
        overflow: "hidden"
    },
    titleContainer: {
        paddingVertical: 5,
        paddingHorizontal: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden"
    },
    bodyContainer: {
        flexDirection: "row",
        flex: 1,
        padding: 20,
        overflow: "hidden"
    }
});
