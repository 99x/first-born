import "react-native";
import React from "react";
import renderer from "react-test-renderer";
import { Badge } from "../../src/atoms/Badge";
import { Text } from "../../src/atoms/Text";
import { Icon } from "../../src/atoms/Icon";

jest.mock("Platform", () => {
    const Platform = require.requireActual("Platform");
    Platform.OS = "ios";
    return Platform;
});

it("renders regular badge", () => {
    const tree = renderer
        .create(
            <Badge>
                <Text>+1</Text>
            </Badge>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});

it("renders colored badge", () => {
    const tree = renderer
        .create(
            <Badge color="red">
                <Text>+1</Text>
            </Badge>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});

it("renders icon badge", () => {
    const tree = renderer
        .create(
            <Badge>
                <Icon name="heart" />
            </Badge>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});

it("renders regular badge", () => {
    const tree = renderer
        .create(
            <Badge outline>
                <Text>+1</Text>
            </Badge>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});

it("renders colored badge", () => {
    const tree = renderer
        .create(
            <Badge color="red" outline>
                <Text>+1</Text>
            </Badge>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});

it("renders icon badge", () => {
    const tree = renderer
        .create(
            <Badge outline>
                <Icon name="heart" />
            </Badge>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});
