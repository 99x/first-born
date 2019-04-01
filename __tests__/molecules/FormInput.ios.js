import "react-native";
import React from "react";
import renderer from "react-test-renderer";
import { FormInput } from "../../src/molecules/formElements/FormInput";

jest.mock("Platform", () => {
    const Platform = require.requireActual("Platform");
    Platform.OS = "ios";
    return Platform;
});

it("renders regular FormInput", () => {
    const tree = renderer.create(<FormInput label="Name" />).toJSON();
    expect(tree).toMatchSnapshot();
});

it("renders colored FormInput", () => {
    const tree = renderer
        .create(<FormInput label="Name" color="red" />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

it("renders FormInput with placeholder", () => {
    const tree = renderer
        .create(<FormInput label="Name" placeholder="placeholder" />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
