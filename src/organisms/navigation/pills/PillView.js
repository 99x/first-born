import React, { Component } from "react";
import { View, StyleSheet, ScrollView, Animated } from "react-native";
import PropTypes from "prop-types";

import { PillBar } from "./PillBar";

export class PillView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activePill: 0
        };

        this.fadeAnim = new Animated.Value(1);
    }

    animate() {
        this.fadeAnim = new Animated.Value(0);
        Animated.timing(this.fadeAnim, {
            toValue: 1,
            duration: 250,
            useNativeDriver: true
        }).start();
    }

    handlePillChange = activePill => {
        this.setState({ activePill: activePill });
        this.animate();
    };

    render() {
        const { pillHeaders, color, ...otherProps } = this.props;

        return (
            <View style={styles.container}>
                <PillBar
                    pillHeaders={pillHeaders}
                    color={color}
                    onPillChange={this.handlePillChange}
                    activePill={this.state.activePill}
                />
                <ScrollView>
                    <Animated.View style={{ opacity: this.fadeAnim }}>
                        {this.renderScene()}
                    </Animated.View>
                </ScrollView>
            </View>
        );
    }

    renderScene() {
        return this.props.pillScenes[this.state.activePill].scene;
    }
}

PillView.propTypes = {
    pillScenes: PropTypes.array.isRequired,
    pillHeaders: PropTypes.array.isRequired,
    color: PropTypes.string,
    ...View.propTypes
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
