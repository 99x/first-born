import React, { Component } from "react";
import { Platform, Image, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import { Button } from "../../../atoms/Button";
import { Icon } from "../../../atoms/Icon";
import { Text } from "../../../atoms/Text";

export class NavBarButton extends Component {

    render() {
        const { type, children, ...otherProps } = this.props;

        let newChildren = []

        if (children) {

            newChildren = React.Children.map(children, child => child && child.type === Text ?
                React.cloneElement(child, { size: "p", ...child.props }) : child && child.type === Icon ?
                    React.cloneElement(child, { size: 25, ...child.props }) : child && child.type === Image ?
                        React.cloneElement(child, { style: { width: 25, height: 25 }, ...child.props }) : null);

        } else if (type) {

            switch (type) {
                case "back":
                    newChildren.push(<Icon name="arrow-back" size={25} />);
                    break;
                case "search":
                    newChildren.push(<Icon name="search" size={25} />);
                    break;
                case "drawer":
                    newChildren.push(<Icon name="menu" size={25} />);
                    break;
            }

            if (Platform.OS === "ios" && type === "back") {
                newChildren.push(<Text>Back</Text>);
            }

        }

        if (Platform.OS === "android") {
            return (
                <Button {...otherProps} transparent>
                    {newChildren && newChildren}
                </Button>
            );
        } else {
            return (
                <Button {...otherProps} outline transparent color="#0a60ff">
                    {newChildren && newChildren}
                </Button>
            );
        }
    }
}

NavBarButton.propTypes = {
    type: PropTypes.oneOf(["back", "search", "drawer"]),
    ...TouchableOpacity.propTypes
}

NavBarButton.defaultProps = {
    type: undefined
}
