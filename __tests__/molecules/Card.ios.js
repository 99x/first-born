import "react-native";
import React from "react";
import renderer from "react-test-renderer";
import { Card } from "../../src/molecules/cards/Card";

jest.mock("Platform", () => {
    const Platform = require.requireActual("Platform");
    Platform.OS = "ios";
    return Platform;
});

it("renders card with heading", () => {
    const tree = renderer.create(<Card title="Heading" />).toJSON();
    expect(tree).toMatchSnapshot();
});

it("renders card with heading and title", () => {
    const tree = renderer
        .create(<Card title="Heading" description="description" />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

it("renders colored card with heading and title", () => {
    const tree = renderer
        .create(
            <Card
                title="Heading"
                description="description"
                color="aliceblue "
            />
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});
