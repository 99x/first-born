import "react-native";
import React from "react";
import renderer from "react-test-renderer";
import { FormTextArea } from "../../src/molecules/formElements/FormTextArea";

jest.mock("Platform", () => {
    const Platform = require.requireActual("Platform");
    Platform.OS = "android";
    return Platform;
});

it("renders regular FormTextArea", () => {
    const tree = renderer.create(<FormTextArea label="Address" />).toJSON();
    expect(tree).toMatchSnapshot();
});

it("renders colored FormTextArea", () => {
    const tree = renderer
        .create(<FormTextArea label="Address" color="red" />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

it("renders FormTextArea with placeholder", () => {
    const tree = renderer
        .create(<FormTextArea label="Address" placeholder="placeholder" />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
