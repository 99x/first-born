import "react-native";
import React from "react";
import renderer from "react-test-renderer";
import { FormDatePicker } from "../../src/molecules/formElements/FormDatePicker";

jest.mock("Platform", () => {
    const Platform = require.requireActual("Platform");
    Platform.OS = "android";
    return Platform;
});

it("renders regular FormDatePicker", () => {
    const tree = renderer
        .create(<FormDatePicker label="Date of Birth" />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

it("renders colored FormDatePicker", () => {
    const tree = renderer
        .create(<FormDatePicker label="Date of Birth" color="red" />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

it("renders FormDatePicker with placeholder", () => {
    const tree = renderer
        .create(
            <FormDatePicker label="Date of Birth" placeholder="placeholder" />
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});
