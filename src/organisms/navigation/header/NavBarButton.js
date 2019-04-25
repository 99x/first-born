import React, { Component } from "react";
import { Platform, Image, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import { Button } from "../../../atoms/Button";
import { Icon } from "../../../atoms/Icon";
import { Text } from "../../../atoms/Text";
import { commonColors } from "../../../utils/color";

export class NavBarButton extends Component {
    render() {
        const { type, children, ...otherProps } = this.props;

        let newChildren = [];

        if (children) {
            newChildren = React.Children.map(children, child =>
                child && child.type === Text
                    ? React.cloneElement(child, { ...child.props, size: "p" })
                    : child && child.type === Icon
                    ? React.cloneElement(child, { ...child.props, size: 25 })
                    : child && child.type === Image
                    ? React.cloneElement(child, {
                          ...child.props,
                          style: { width: 25, height: 25 }
                      })
                    : null
            );
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

        return (
            <Button {...otherProps} outline transparent>
                {newChildren && newChildren}
            </Button>
        );
    }
}

NavBarButton.propTypes = {
    color: PropTypes.string,
    type: PropTypes.oneOf(["back", "search", "drawer"]),
    ...TouchableOpacity.propTypes
};

NavBarButton.defaultProps = {
    type: undefined,
    color: Platform.OS === "android" ? commonColors.white : "#0a60ff"
};
