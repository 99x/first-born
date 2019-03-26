import React, { Component } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import PropTypes from "prop-types";

import { PillBar } from "./PillBar";

export class PillView extends Component {

    constructor(props) {
        super(props);

        this.state = {
            activePill: 0
        }
    }

    handlePillChange = (activePill) => {
        this.setState({ activePill: activePill });
    }

    render() {
        const { pillHeaders, color, ...otherProps } = this.props;

        return (
            <View style={styles.container}>
                <PillBar pillHeaders={pillHeaders} color={color} onPillChange={this.handlePillChange} activePill={this.state.activePill} />
                <ScrollView>
                    {this.renderScene()}
                </ScrollView>
            </View>
        )
    }

    renderScene() {
        return this.props.pillScenes[this.state.activePill].scene
    }
}

PillView.propTypes = {
    pillScenes: PropTypes.array.isRequired,
    pillHeaders: PropTypes.array.isRequired,
    color: PropTypes.string,
    ...View.propTypes
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})