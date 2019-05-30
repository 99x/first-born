import "react-native";
import React from "react";
import renderer from "react-test-renderer";
import { TextArea } from "../../src/atoms/TextArea";

jest.mock("Platform", () => {
    const Platform = require.requireActual("Platform");
    Platform.OS = "ios";
    return Platform;
});

it("renders regular TextArea", () => {
    const tree = renderer.create(<TextArea />).toJSON();
    expect(tree).toMatchSnapshot();
});

it("renders underlined TextArea", () => {
    const tree = renderer.create(<TextArea underline />).toJSON();
    expect(tree).toMatchSnapshot();
});

it("renders unstyled TextArea", () => {
    const tree = renderer.create(<TextArea noStyle />).toJSON();
    expect(tree).toMatchSnapshot();
});

it("renders custom styled TextArea", () => {
    const tree = renderer
        .create(
            <TextArea
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
