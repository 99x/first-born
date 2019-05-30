import "react-native";
import React from "react";
import renderer from "react-test-renderer";
import { DatePicker } from "../../src/atoms/DatePicker";

jest.mock("Platform", () => {
    const Platform = require.requireActual("Platform");
    Platform.OS = "ios";
    return Platform;
});

it("renders regular DatePicker", () => {
    const tree = renderer
        .create(<DatePicker defaultDate={new Date(1554104240475)} />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

it("renders underlined DatePicker", () => {
    const tree = renderer
        .create(<DatePicker defaultDate={new Date(1554104240475)} underline />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

it("renders rounded DatePicker", () => {
    const tree = renderer
        .create(<DatePicker defaultDate={new Date(1554104240475)} rounded />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

it("renders unstyled DatePicker", () => {
    const tree = renderer
        .create(<DatePicker defaultDate={new Date(1554104240475)} noStyle />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

it("renders custom styled DatePicker", () => {
    const tree = renderer
        .create(
            <DatePicker
                defaultDate={new Date(1554104240475)}
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

it("renders colored DatePicker", () => {
    const tree = renderer
        .create(
            <DatePicker color="red" defaultDate={new Date(1554104240475)} />
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});

it("renders DatePicker with placeholder", () => {
    const tree = renderer
        .create(
            <DatePicker
                placeholder="placeholder"
                defaultDate={new Date(1554104240475)}
            />
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});
