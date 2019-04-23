import "react-native";
import React from "react";
import renderer from "react-test-renderer";
import { Accordion } from "../../src/organisms/Accordion";
import { AccordionElement } from "../../src/molecules/cards/AccordionElement";

jest.mock("Platform", () => {
    const Platform = require.requireActual("Platform");
    Platform.OS = "android";
    return Platform;
});

it("renders an accordion with heading and title", () => {
    const listData = [
        { title: "Heading 1", description: "Description 1" },
        { title: "Heading 2", description: "Description 2" },
        { title: "Heading 3", description: "Description 3" }
    ];

    const tree = renderer.create(<Accordion data={listData} />).toJSON();
    expect(tree).toMatchSnapshot();
});

it("renders an accordion with heading, title and custom expand/collapse icons", () => {
    const listData = [
        { title: "Heading 1", description: "Description 1" },
        { title: "Heading 2", description: "Description 2" },
        { title: "Heading 3", description: "Description 3" }
    ];

    const tree = renderer
        .create(<Accordion data={listData} icon="add" expandedIcon="remove" />)
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
        .create(
            <Accordion
                data={listData}
                headerColor="aquamarine"
                bodyColor="aliceblue"
            />
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});

it("renders a colored list of cards with heading, title and custom expand/collapse icons", () => {
    const listData = [
        { title: "Heading 1", description: "Description 1" },
        { title: "Heading 2", description: "Description 2" },
        { title: "Heading 3", description: "Description 3" }
    ];

    const tree = renderer
        .create(
            <Accordion
                data={listData}
                headerColor="aquamarine"
                bodyColor="aliceblue"
                icon="add"
                expandedIcon="remove"
            />
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});

it("renders an accordion with heading and title by a user defined renderItem method", () => {
    const listData = [
        { title: "Heading 1", description: "Description 1" },
        { title: "Heading 2", description: "Description 2" },
        { title: "Heading 3", description: "Description 3" }
    ];

    const tree = renderer
        .create(
            <Accordion
                data={listData}
                renderItem={({ item }) => <AccordionElement {...item} />}
            />
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});
