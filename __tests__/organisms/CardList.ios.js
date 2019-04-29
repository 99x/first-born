import "react-native";
import React from "react";
import renderer from "react-test-renderer";
import { CardList } from "../../src/organisms/CardList";
import { Card } from "../../src/molecules/cards/Card";

jest.mock("Platform", () => {
    const Platform = require.requireActual("Platform");
    Platform.OS = "ios";
    return Platform;
});

it("renders a list of cards with heading", () => {
    const listData = [
        { title: "Heading 1" },
        { title: "Heading 2" },
        { title: "Heading 3" }
    ];

    const tree = renderer.create(<CardList data={listData} />).toJSON();
    expect(tree).toMatchSnapshot();
});

it("renders a list of cards with heading and title", () => {
    const listData = [
        { title: "Heading 1", description: "Description 1" },
        { title: "Heading 2", description: "Description 2" },
        { title: "Heading 3", description: "Description 3" }
    ];

    const tree = renderer.create(<CardList data={listData} />).toJSON();
    expect(tree).toMatchSnapshot();
});

it("renders a horizontal list of cards with heading and title", () => {
    const listData = [
        { title: "Heading 1", description: "Description 1" },
        { title: "Heading 2", description: "Description 2" },
        { title: "Heading 3", description: "Description 3" }
    ];

    const tree = renderer
        .create(<CardList data={listData} horizontal />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

it("renders a colored list of cards with heading and title", () => {
    const listData = [
        { title: "Heading 1", description: "Description 1" },
        { title: "Heading 2", description: "Description 2" },
        { title: "Heading 3", description: "Description 3" }
    ];

    const tree = renderer
        .create(<CardList data={listData} backgroundColor="aliceblue" />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

it("renders a list of cards with heading and title by a user defined renderItem method", () => {
    const listData = [
        { title: "Heading 1", description: "Description 1" },
        { title: "Heading 2", description: "Description 2" },
        { title: "Heading 3", description: "Description 3" }
    ];

    const tree = renderer
        .create(
            <CardList
                data={listData}
                renderItem={({ item }) => <Card {...item} />}
            />
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});
