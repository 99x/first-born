import "react-native";
import React from "react";
import renderer from "react-test-renderer";
import { Icon } from "../../src/atoms/Icon";

jest.mock("Platform", () => {
    const Platform = require.requireActual("Platform");
    Platform.OS = "ios";
    return Platform;
});

it("renders regular icon", () => {
    const tree = renderer.create(<Icon name="heart" />).toJSON();
    expect(tree).toMatchSnapshot();
});

it("renders colored icon", () => {
    const tree = renderer.create(<Icon name="heart" color="red" />).toJSON();
    expect(tree).toMatchSnapshot();
});
