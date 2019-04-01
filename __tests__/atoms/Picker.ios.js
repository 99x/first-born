import "react-native";
import React from "react";
import renderer from "react-test-renderer";
import { Picker } from "../../src/atoms/Picker";

jest.mock("Platform", () => {
    const Platform = require.requireActual("Platform");
    Platform.OS = "ios";
    return Platform;
});

it("renders regular Picker", () => {
    const tree = renderer
        .create(
            <Picker>
                <Picker.Item value="1" label="1" />
                <Picker.Item value="2" label="2" />
                <Picker.Item value="3" label="3" />
            </Picker>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});

it("renders colored Picker", () => {
    const tree = renderer
        .create(
            <Picker color="red">
                <Picker.Item value="1" label="1" />
                <Picker.Item value="2" label="2" />
                <Picker.Item value="3" label="3" />
            </Picker>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});

it("renders Picker with placeholder", () => {
    const tree = renderer
        .create(
            <Picker placeholder="placeholder">
                <Picker.Item value="1" label="1" />
                <Picker.Item value="2" label="2" />
                <Picker.Item value="3" label="3" />
            </Picker>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});
