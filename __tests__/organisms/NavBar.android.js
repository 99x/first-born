import "react-native";
import React from "react";
import renderer from "react-test-renderer";
import { Text } from "../../src/atoms/Text";
import { Icon } from "../../src/atoms/Icon";
import { NavBar } from "../../src/organisms/navigation/header/NavBar";
import { NavBarLeft } from "../../src/organisms/navigation/header/NavBarLeft";
import { NavBarRight } from "../../src/organisms/navigation/header/NavBarRight";
import { NavBarBody } from "../../src/organisms/navigation/header/NavBarBody";
import { NavBarButton } from "../../src/organisms/navigation/header/NavBarButton";

jest.mock("Platform", () => {
    const Platform = require.requireActual("Platform");
    Platform.OS = "android";
    return Platform;
});

it("renders NavBar with title", () => {
    const tree = renderer
        .create(
            <NavBar>
                <NavBarLeft />
                <NavBarBody>
                    <Text>Title</Text>
                </NavBarBody>
                <NavBarRight />
            </NavBar>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});

it("renders NavBar with back button", () => {
    const tree = renderer
        .create(
            <NavBar>
                <NavBarLeft>
                    <NavBarButton type="back" />
                </NavBarLeft>
                <NavBarBody>
                    <Text>Title</Text>
                </NavBarBody>
                <NavBarRight />
            </NavBar>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});

it("renders NavBar with drawer button", () => {
    const tree = renderer
        .create(
            <NavBar>
                <NavBarLeft>
                    <NavBarButton type="drawer" />
                </NavBarLeft>
                <NavBarBody>
                    <Text>Title</Text>
                </NavBarBody>
                <NavBarRight />
            </NavBar>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});

it("renders NavBar with search button", () => {
    const tree = renderer
        .create(
            <NavBar>
                <NavBarLeft>
                    <NavBarButton type="search" />
                </NavBarLeft>
                <NavBarBody>
                    <Text>Title</Text>
                </NavBarBody>
                <NavBarRight />
            </NavBar>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});

it("renders NavBar with custom button", () => {
    const tree = renderer
        .create(
            <NavBar>
                <NavBarLeft />
                <NavBarBody>
                    <Text>Title</Text>
                </NavBarBody>
                <NavBarRight>
                    <NavBarButton>
                        <Icon name="heart" />
                    </NavBarButton>
                </NavBarRight>
            </NavBar>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});
