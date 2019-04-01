import "react-native";
import React from "react";
import renderer from "react-test-renderer";
import { FormDatePicker } from "../../src/molecules/formElements/FormDatePicker";

jest.mock("Platform", () => {
    const Platform = require.requireActual("Platform");
    Platform.OS = "ios";
    return Platform;
});

it("renders regular FormDatePicker", () => {
    const tree = renderer
        .create(
            <FormDatePicker
                label="Date of Birth"
                defaultDate={new Date(1554104240475)}
            />
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});

it("renders colored FormDatePicker", () => {
    const tree = renderer
        .create(
            <FormDatePicker
                label="Date of Birth"
                color="red"
                defaultDate={new Date(1554104240475)}
            />
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});

it("renders FormDatePicker with placeholder", () => {
    const tree = renderer
        .create(
            <FormDatePicker
                label="Date of Birth"
                placeholder="placeholder"
                defaultDate={new Date(1554104240475)}
            />
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});
