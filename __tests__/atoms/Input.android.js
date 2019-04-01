import "react-native";
import React from "react";
import renderer from "react-test-renderer";
import { Input } from "../../src/atoms/Input";

jest.mock("Platform", () => {
    const Platform = require.requireActual("Platform");
    Platform.OS = "android";
    return Platform;
});

it("renders regular Input", () => {
    const tree = renderer.create(<Input />).toJSON();
    expect(tree).toMatchSnapshot();
});

it("renders colored Input", () => {
    const tree = renderer.create(<Input color="red" />).toJSON();
    expect(tree).toMatchSnapshot();
});

it("renders Input with placeholder", () => {
    const tree = renderer.create(<Input placeholder="placeholder" />).toJSON();
    expect(tree).toMatchSnapshot();
});
