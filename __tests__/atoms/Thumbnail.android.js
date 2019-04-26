import "react-native";
import React from "react";
import renderer from "react-test-renderer";
import { Thumbnail } from "../../src/atoms/Thumbnail";

jest.mock("Platform", () => {
    const Platform = require.requireActual("Platform");
    Platform.OS = "android";
    return Platform;
});

it("renders small thumbnail", () => {
    const tree = renderer
        .create(
            <Thumbnail
                size="small"
                source={require("../../firstBorn-logo.png")}
            />
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});

it("renders small rounded thumbnail", () => {
    const tree = renderer
        .create(
            <Thumbnail
                size="small"
                source={require("../../firstBorn-logo.png")}
                rounded
            />
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});

it("renders medium thumbnail", () => {
    const tree = renderer
        .create(<Thumbnail source={require("../../firstBorn-logo.png")} />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

it("renders medium rounded thumbnail", () => {
    const tree = renderer
        .create(
            <Thumbnail source={require("../../firstBorn-logo.png")} rounded />
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});

it("renders large thumbnail", () => {
    const tree = renderer
        .create(
            <Thumbnail
                size="large"
                source={require("../../firstBorn-logo.png")}
            />
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});

it("renders large rounded thumbnail", () => {
    const tree = renderer
        .create(
            <Thumbnail
                size="large"
                source={require("../../firstBorn-logo.png")}
                rounded
            />
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});

it("renders extra large thumbnail", () => {
    const tree = renderer
        .create(
            <Thumbnail
                size="exlarge"
                source={require("../../firstBorn-logo.png")}
            />
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});

it("renders extra large rounded thumbnail", () => {
    const tree = renderer
        .create(
            <Thumbnail
                size="exlarge"
                source={require("../../firstBorn-logo.png")}
                rounded
            />
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});
