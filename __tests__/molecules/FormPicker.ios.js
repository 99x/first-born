import "react-native";
import React from "react";
import renderer from "react-test-renderer";
import { FormPicker } from "../../src/molecules/formElements/FormPicker";
import { Picker } from "../../src/atoms/Picker";

jest.mock("Platform", () => {
    const Platform = require.requireActual("Platform");
    Platform.OS = "ios";
    return Platform;
});

it("renders regular FormPicker", () => {
    const tree = renderer
        .create(
            <FormPicker label="Number">
                <Picker.Item value="1" label="1" />
                <Picker.Item value="2" label="2" />
                <Picker.Item value="3" label="3" />
            </FormPicker>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});

it("renders colored FormPicker", () => {
    const tree = renderer
        .create(
            <FormPicker label="Number" color="red">
                <Picker.Item value="1" label="1" />
                <Picker.Item value="2" label="2" />
                <Picker.Item value="3" label="3" />
            </FormPicker>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});

it("renders FormPicker with placeholder", () => {
    const tree = renderer
        .create(
            <FormPicker label="Number" placeholder="placeholder">
                <Picker.Item value="1" label="1" />
                <Picker.Item value="2" label="2" />
                <Picker.Item value="3" label="3" />
            </FormPicker>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});
