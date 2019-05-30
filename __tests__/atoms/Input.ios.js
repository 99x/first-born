import "react-native";
import React from "react";
import renderer from "react-test-renderer";
import { Input } from "../../src/atoms/Input";

jest.mock("Platform", () => {
    const Platform = require.requireActual("Platform");
    Platform.OS = "ios";
    return Platform;
});

it("renders regular Input", () => {
    const tree = renderer.create(<Input />).toJSON();
    expect(tree).toMatchSnapshot();
});

it("renders underlined Input", () => {
    const tree = renderer.create(<Input underlined />).toJSON();
    expect(tree).toMatchSnapshot();
});

it("renders rounded Input", () => {
    const tree = renderer.create(<Input rounded />).toJSON();
    expect(tree).toMatchSnapshot();
});

it("renders unstyled Input", () => {
    const tree = renderer.create(<Input noStyle />).toJSON();
    expect(tree).toMatchSnapshot();
});

it("renders custom styled Input", () => {
    const tree = renderer
        .create(
            <Input
                noStyle
                style={{
                    borderWidth: 1,
                    borderColor: "black",
                    borderRadius: 3
                }}
            />
        )
        .toJSON();
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
