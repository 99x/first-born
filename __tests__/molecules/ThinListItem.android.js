import "react-native";
import React from "react";
import renderer from "react-test-renderer";
import { ThinListItem } from "../../src/molecules/listItem/ThinListItem";

jest.mock("Platform", () => {
    const Platform = require.requireActual("Platform");
    Platform.OS = "android";
    return Platform;
});

it("renders thin list item with heading", () => {
    const tree = renderer.create(<ThinListItem title="Heading" />).toJSON();
    expect(tree).toMatchSnapshot();
});

it("renders thin list item with heading and title", () => {
    const tree = renderer
        .create(<ThinListItem title="Heading" description="description" />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

it("renders thin list item with heading, title and image", () => {
    const tree = renderer
        .create(
            <ThinListItem
                title="Heading"
                description="description"
                image={{ source: require("../../firstBorn-logo.png") }}
            />
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});

it("renders thin list item with heading, title and arrow", () => {
    const tree = renderer
        .create(
            <ThinListItem title="Heading" description="description" arrow />
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});

it("renders thin list item with heading, title, image and arrow", () => {
    const tree = renderer
        .create(
            <ThinListItem
                title="Heading"
                description="description"
                image={{ source: require("../../firstBorn-logo.png") }}
                arrow
            />
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});

it("renders colored thin list item with heading and title", () => {
    const tree = renderer
        .create(
            <ThinListItem
                title="Heading"
                description="description"
                color="aliceblue "
            />
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});
