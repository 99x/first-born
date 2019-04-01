import "react-native";
import React from "react";
import renderer from "react-test-renderer";
import { ListItem } from "../../src/molecules/listItem/ListItem";

jest.mock("Platform", () => {
    const Platform = require.requireActual("Platform");
    Platform.OS = "ios";
    return Platform;
});

it("renders list item with heading", () => {
    const tree = renderer.create(<ListItem title="Heading" />).toJSON();
    expect(tree).toMatchSnapshot();
});

it("renders list item with heading and title", () => {
    const tree = renderer
        .create(<ListItem title="Heading" description="description" />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

it("renders expandable list item with heading and title", () => {
    const tree = renderer
        .create(
            <ListItem title="Heading" description="description">
                <ListItem
                    title="Child Heading"
                    description="Child description"
                />
            </ListItem>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});

it("renders colored list item with heading and title", () => {
    const tree = renderer
        .create(
            <ListItem
                title="Heading"
                description="description"
                color="aliceblue "
            />
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});
