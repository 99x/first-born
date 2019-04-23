import "react-native";
import React from "react";
import renderer from "react-test-renderer";
import { AccordionElement } from "../../src/molecules/cards/AccordionElement";

jest.mock("Platform", () => {
    const Platform = require.requireActual("Platform");
    Platform.OS = "ios";
    return Platform;
});

it("renders accordion element with heading and title", () => {
    const tree = renderer
        .create(<AccordionElement title="Heading" description="description" />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

it("renders colored accordion element with heading and title", () => {
    const tree = renderer
        .create(
            <AccordionElement
                title="Heading"
                description="description"
                headerColor="aquamarine"
                bodyColor="aliceblue"
            />
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});

it("renders accordion element with heading, title and custom expand/collapse icons", () => {
    const tree = renderer
        .create(
            <AccordionElement
                title="Heading"
                description="description"
                icon="add"
                expandedIcon="remove"
            />
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});

it("renders colored accordion element with heading, title and custom expand/collapse icons", () => {
    const tree = renderer
        .create(
            <AccordionElement
                title="Heading"
                description="description"
                headerColor="aquamarine"
                bodyColor="aliceblue"
            />
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});
