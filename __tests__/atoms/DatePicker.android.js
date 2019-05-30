import "react-native";
import React from "react";
import renderer from "react-test-renderer";
import { DatePicker } from "../../src/atoms/DatePicker";

jest.mock("Platform", () => {
    const Platform = require.requireActual("Platform");
    Platform.OS = "android";
    return Platform;
});

it("renders regular DatePicker", () => {
    const tree = renderer.create(<DatePicker />).toJSON();
    expect(tree).toMatchSnapshot();
});

it("renders underlined DatePicker", () => {
    const tree = renderer.create(<DatePicker underline />).toJSON();
    expect(tree).toMatchSnapshot();
});

it("renders rounded DatePicker", () => {
    const tree = renderer.create(<DatePicker rounded />).toJSON();
    expect(tree).toMatchSnapshot();
});

it("renders unstyled DatePicker", () => {
    const tree = renderer.create(<DatePicker noStyle />).toJSON();
    expect(tree).toMatchSnapshot();
});

it("renders custom styled DatePicker", () => {
    const tree = renderer
        .create(
            <DatePicker
                noStyle
                style={{
                    borderWidth: 1,
                    borderColor: "black",
                    borderRadius: "3"
                }}
            />
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});

it("renders colored DatePicker", () => {
    const tree = renderer.create(<DatePicker color="red" />).toJSON();
    expect(tree).toMatchSnapshot();
});

it("renders DatePicker with placeholder", () => {
    const tree = renderer
        .create(<DatePicker placeholder="placeholder" />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
