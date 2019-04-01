import "react-native";
import React from "react";
import renderer from "react-test-renderer";
import { TextArea } from "../../src/atoms/TextArea";

jest.mock("Platform", () => {
    const Platform = require.requireActual("Platform");
    Platform.OS = "android";
    return Platform;
});

it("renders regular TextArea", () => {
    const tree = renderer.create(<TextArea />).toJSON();
    expect(tree).toMatchSnapshot();
});

it("renders colored TextArea", () => {
    const tree = renderer.create(<TextArea color="red" />).toJSON();
    expect(tree).toMatchSnapshot();
});

it("renders TextArea with placeholder", () => {
    const tree = renderer
        .create(<TextArea placeholder="placeholder" />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
