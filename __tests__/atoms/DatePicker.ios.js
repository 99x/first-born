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
