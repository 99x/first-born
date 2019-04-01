import "react-native";
import { View } from "react-native";
import React from "react";
import renderer from "react-test-renderer";
import { Text } from "../../src/atoms/Text";
import { PillView } from "../../src/organisms/navigation/pills/PillView";

jest.mock("Platform", () => {
    const Platform = require.requireActual("Platform");
    Platform.OS = "android";
    return Platform;
});

it("renders PillView with titles", () => {
    const pillScenes = [
        {
            scene: (
                <View>
                    <Text>View 1</Text>
                </View>
            )
        },
        {
            scene: (
                <View>
                    <Text>View 2</Text>
                </View>
            )
        },
        {
            scene: (
                <View>
                    <Text>View 3</Text>
                </View>
            )
        }
    ];

    const pillHeaders = [
        { title: "View 1" },
        { title: "View 2" },
        { title: "View 3" }
    ];

    const tree = renderer
        .create(<PillView pillHeaders={pillHeaders} pillScenes={pillScenes} />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

it("renders PillView with icons", () => {
    const pillScenes = [
        {
            scene: (
                <View>
                    <Text>View 1</Text>
                </View>
            )
        },
        {
            scene: (
                <View>
                    <Text>View 2</Text>
                </View>
            )
        },
        {
            scene: (
                <View>
                    <Text>View 3</Text>
                </View>
            )
        }
    ];

    const pillHeaders = [{ icon: "home" }, { icon: "card" }, { icon: "list" }];

    const tree = renderer
        .create(<PillView pillHeaders={pillHeaders} pillScenes={pillScenes} />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

it("renders PillView with titles and icons", () => {
    const pillScenes = [
        {
            scene: (
                <View>
                    <Text>View 1</Text>
                </View>
            )
        },
        {
            scene: (
                <View>
                    <Text>View 2</Text>
                </View>
            )
        },
        {
            scene: (
                <View>
                    <Text>View 3</Text>
                </View>
            )
        }
    ];

    const pillHeaders = [
        { title: "View 1", icon: "home" },
        { title: "View 2", icon: "card" },
        { title: "View 3", icon: "list" }
    ];

    const tree = renderer
        .create(<PillView pillHeaders={pillHeaders} pillScenes={pillScenes} />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
