import "react-native";
import React from "react";
import renderer from "react-test-renderer";
import { Text } from "../../src/atoms/Text";

jest.mock("Platform", () => {
    const Platform = require.requireActual("Platform");
    Platform.OS = "ios";
    return Platform;
});

it("renders h1 text", () => {
    const tree = renderer.create(<Text size="h1">Hello</Text>).toJSON();
    expect(tree).toMatchSnapshot();
});

it("renders h2 text", () => {
    const tree = renderer.create(<Text size="h2">Hello</Text>).toJSON();
    expect(tree).toMatchSnapshot();
});

it("renders h3 text", () => {
    const tree = renderer.create(<Text size="h3">Hello</Text>).toJSON();
    expect(tree).toMatchSnapshot();
});

it("renders h4 text", () => {
    const tree = renderer.create(<Text size="h4">Hello</Text>).toJSON();
    expect(tree).toMatchSnapshot();
});

it("renders h5 text", () => {
    const tree = renderer.create(<Text size="h5">Hello</Text>).toJSON();
    expect(tree).toMatchSnapshot();
});

it("renders h6 text", () => {
    const tree = renderer.create(<Text size="h6">Hello</Text>).toJSON();
    expect(tree).toMatchSnapshot();
});

it("renders regular text", () => {
    const tree = renderer.create(<Text>Hello</Text>).toJSON();
    expect(tree).toMatchSnapshot();
});

it("renders callout text", () => {
    const tree = renderer.create(<Text size="callout">Hello</Text>).toJSON();
    expect(tree).toMatchSnapshot();
});

it("renders sub_heading text", () => {
    const tree = renderer
        .create(<Text size="sub_heading">Hello</Text>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

it("renders footnote text", () => {
    const tree = renderer.create(<Text size="footnote">Hello</Text>).toJSON();
    expect(tree).toMatchSnapshot();
});

it("renders caption_big text", () => {
    const tree = renderer
        .create(<Text size="caption_big">Hello</Text>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

it("renders caption_small text", () => {
    const tree = renderer
        .create(<Text size="caption_small">Hello</Text>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
