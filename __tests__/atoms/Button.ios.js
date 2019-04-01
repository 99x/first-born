import "react-native";
import React from "react";
import renderer from "react-test-renderer";
import { Button } from "../../src/atoms/Button";
import { Text } from "../../src/atoms/Text";
import { Icon } from "../../src/atoms/Icon";

jest.mock("Platform", () => {
    const Platform = require.requireActual("Platform");
    Platform.OS = "ios";
    return Platform;
});

it("renders regular button", () => {
    const tree = renderer
        .create(
            <Button>
                <Text>Click Me</Text>
            </Button>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});

it("renders icon button", () => {
    const tree = renderer
        .create(
            <Button>
                <Icon name="heart" />
                <Text>Click Me</Text>
            </Button>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});

it("renders rounded button", () => {
    const tree = renderer
        .create(
            <Button rounded>
                <Text>Click Me</Text>
            </Button>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});

it("renders transparent button", () => {
    const tree = renderer
        .create(
            <Button transparent>
                <Text>Click Me</Text>
            </Button>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});

it("renders block button", () => {
    const tree = renderer
        .create(
            <Button block>
                <Text>Click Me</Text>
            </Button>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});

it("renders outline button", () => {
    const tree = renderer
        .create(
            <Button outline>
                <Text>Click Me</Text>
            </Button>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});

it("renders small button", () => {
    const tree = renderer
        .create(
            <Button size="small">
                <Text>Click Me</Text>
            </Button>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});

it("renders large button", () => {
    const tree = renderer
        .create(
            <Button size="large">
                <Text>Click Me</Text>
            </Button>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});
