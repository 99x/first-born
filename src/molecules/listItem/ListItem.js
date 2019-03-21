import React, { Component } from "react";
import { View, StyleSheet, TouchableOpacity, Image, Platform, Dimensions } from "react-native";
import PropTypes from "prop-types";

import { Text } from "../../atoms/Text";
import { Icon } from "../../atoms/Icon";
import { commonColors } from "react-native-atom-elements/src/utils/color";

const { width } = Dimensions.get("window");

export class ListItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            expanded: false
        };
    }

    render() {
        const { title, description, image, onPress, block, backgroundColor, secondary, children, ...otherProps } = this.props;
        const { expanded } = this.state;

        const cardBackColor = backgroundColor ? backgroundColor : secondary ? "#7da7d9" : commonColors.white;

        const cardStyle = block ? [styles.containerBlock, { backgroundColor: cardBackColor }] : [styles.container, , { backgroundColor: cardBackColor }];

        const onListItemTap = children ? this.expandListItem : onPress ? onPress : undefined;

        return (
            <View style={{ width: "100%" }}>
                <TouchableOpacity style={cardStyle} disabled={!onListItemTap} onPress={onListItemTap} {...otherProps}>
                    {image &&
                        <View style={styles.imageContainer}>
                            <Image source={image} style={styles.image} />
                        </View>
                    }
                    <View style={styles.textContainer}>
                        <Text size="h6" color="rgba(33, 33, 33, 0.87)" bold >{title}</Text>
                        {description && <Text size="sub_heading" color="rgba(33, 33, 33, 0.4)">{description}</Text>}
                    </View>
                    <View style={styles.imageContainer}>
                        {children &&
                            <Icon name={expanded ? "arrow-dropup" : "arrow-dropdown"} size={20} color="#959595" />
                        }
                    </View>
                </TouchableOpacity>
                {expanded && children}
            </View>
        )
    }

    expandListItem = () => {
        this.setState({ expanded: !this.state.expanded });
    }

}

ListItem.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    image: PropTypes.any,
    block: PropTypes.bool,
    backgroundColor: PropTypes.string,
    secondary: PropTypes.bool,
    ...TouchableOpacity.propTypes
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        borderWidth: 0.5,
        borderColor: "rgba(33, 33, 33,  0.4)",
        paddingHorizontal: 5
    },
    containerBlock: {
        width,
        flex: 1,
        flexDirection: "row",
        borderTopWidth: 0.5,
        borderBottomWidth: 0.5,
        borderTopColor: "rgba(33, 33, 33,  0.4)",
        borderBottomColor: "rgba(33, 33, 33,  0.4)",
        paddingHorizontal: 15
    },
    textContainer: {
        flex: 3,
        flexDirection: 'column',
        padding: 15,
        alignItems: "flex-start"
    },
    imageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        height: 50,
        width: 50,
        borderRadius: 50 / 2
    }
})