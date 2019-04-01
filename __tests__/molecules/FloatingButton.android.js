import "react-native";
import React from "react";
import renderer from "react-test-renderer";
import { FloatingButton } from "../../src/molecules/floatingButton/FloatingButton";

jest.mock("Platform", () => {
    const Platform = require.requireActual("Platform");
    Platform.OS = "android";
    return Platform;
});

it("renders regular FloatingButton with a single action", () => {
    const tree = renderer.create(<FloatingButton />).toJSON();
    expect(tree).toMatchSnapshot();
});

it("renders regular FloatingButton with specific icon", () => {
    const tree = renderer.create(<FloatingButton iconName="heart" />).toJSON();
    expect(tree).toMatchSnapshot();
});

it("renders regular FloatingButton with multiple actions", () => {
    const actions = [
        {
            text: "Accessibility",
            icon: "help",
            name: "bt_accessibility",
            position: 2
        },
        { text: "Location", icon: "pin", name: "bt_room", position: 1 },
        { text: "Video", icon: "videocam", name: "bt_videocam", position: 3 }
    ];

    const tree = renderer.create(<FloatingButton actions={actions} />).toJSON();
    expect(tree).toMatchSnapshot();
});
