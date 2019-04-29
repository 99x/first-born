import "react-native";
import React from "react";
import renderer from "react-test-renderer";
import { ListView } from "../../src/organisms/ListView";
import { ListItem } from "../../src/molecules/listItem/ListItem";

jest.mock("Platform", () => {
    const Platform = require.requireActual("Platform");
    Platform.OS = "android";
    return Platform;
});

it("renders a list of listItems with heading", () => {
    const listData = [
        { title: "Heading 1" },
        { title: "Heading 2" },
        { title: "Heading 3" }
    ];

    const tree = renderer.create(<ListView data={listData} />).toJSON();
    expect(tree).toMatchSnapshot();
});

it("renders a list of listItems with heading and title", () => {
    const listData = [
        { title: "Heading 1", description: "Description 1" },
        { title: "Heading 2", description: "Description 2" },
        { title: "Heading 3", description: "Description 3" }
    ];

    const tree = renderer.create(<ListView data={listData} />).toJSON();
    expect(tree).toMatchSnapshot();
});

it("renders a list of listItems with heading, title and image", () => {
    const listData = [
        {
            title: "Heading 1",
            description: "Description 1",
            image: { source: require("../../firstBorn-logo.png") }
        },
        {
            title: "Heading 2",
            description: "Description 2",
            image: { source: require("../../firstBorn-logo.png") }
        },
        {
            title: "Heading 3",
            description: "Description 3",
            image: { source: require("../../firstBorn-logo.png") }
        }
    ];

    const tree = renderer.create(<ListView data={listData} />).toJSON();
    expect(tree).toMatchSnapshot();
});

it("renders a colored list of listItems with heading and title", () => {
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

it("renders a list of thin listItems with heading and title", () => {
    const listData = [
        { title: "Heading 1", description: "Description 1" },
        { title: "Heading 2", description: "Description 2" },
        { title: "Heading 3", description: "Description 3" }
    ];

    const tree = renderer.create(<ListView data={listData} thin />).toJSON();
    expect(tree).toMatchSnapshot();
});

it("renders a list of thin listItems with heading, title and image", () => {
    const listData = [
        {
            title: "Heading 1",
            description: "Description 1",
            image: { source: require("../../firstBorn-logo.png") }
        },
        {
            title: "Heading 2",
            description: "Description 2",
            image: { source: require("../../firstBorn-logo.png") }
        },
        {
            title: "Heading 3",
            description: "Description 3",
            image: { source: require("../../firstBorn-logo.png") }
        }
    ];

    const tree = renderer.create(<ListView data={listData} thin />).toJSON();
    expect(tree).toMatchSnapshot();
});

it("renders a colored list of thin listItems with heading and title", () => {
    const listData = [
        { title: "Heading 1", description: "Description 1" },
        { title: "Heading 2", description: "Description 2" },
        { title: "Heading 3", description: "Description 3" }
    ];

    const tree = renderer
        .create(<ListView data={listData} backgroundColor="aliceblue" thin />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

it("renders a list of listItems with heading and title by a user defined renderItem method", () => {
    const listData = [
        { title: "Heading 1", description: "Description 1" },
        { title: "Heading 2", description: "Description 2" },
        { title: "Heading 3", description: "Description 3" }
    ];

    const tree = renderer
        .create(
            <ListView
                data={listData}
                renderItem={({ item }) => <ListItem {...item} />}
            />
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});
