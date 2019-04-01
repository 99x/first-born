import "react-native";
import React from "react";
import renderer from "react-test-renderer";
import { ListView } from "../../src/organisms/ListView";

jest.mock("Platform", () => {
    const Platform = require.requireActual("Platform");
    Platform.OS = "android";
    return Platform;
});

it("renders a list of cards with heading", () => {
    const listData = [
        { title: "Heading 1" },
        { title: "Heading 2" },
        { title: "Heading 3" }
    ];

    const tree = renderer.create(<ListView data={listData} />).toJSON();
    expect(tree).toMatchSnapshot();
});

it("renders a list of cards with heading and title", () => {
    const listData = [
        { title: "Heading 1", description: "Description 1" },
        { title: "Heading 2", description: "Description 2" },
        { title: "Heading 3", description: "Description 3" }
    ];

    const tree = renderer.create(<ListView data={listData} />).toJSON();
    expect(tree).toMatchSnapshot();
});

it("renders a colored list of cards with heading and title", () => {
    const listData = [
        { title: "Heading 1", description: "Description 1" },
        { title: "Heading 2", description: "Description 2" },
        { title: "Heading 3", description: "Description 3" }
    ];

    const tree = renderer
        .create(<ListView data={listData} backgroundColor="aliceblue" />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
