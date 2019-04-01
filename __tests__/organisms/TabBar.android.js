import "react-native";
import React from "react";
import renderer from "react-test-renderer";
import { Text } from "../../src/atoms/Text";
import { Icon } from "../../src/atoms/Icon";
import { TabBar } from "../../src/organisms/navigation/footer/TabBar";
import { TabItem } from "../../src/organisms/navigation/footer/TabItem";

jest.mock("Platform", () => {
    const Platform = require.requireActual("Platform");
    Platform.OS = "android";
    return Platform;
});

it("renders TabBar with tab titles", () => {
    const tree = renderer
        .create(
            <TabBar>
                <TabItem active>
                    <Text>ONE</Text>
                </TabItem>
                <TabItem>
                    <Text>TWO</Text>
                </TabItem>
                <TabItem>
                    <Text>THREE</Text>
                </TabItem>
                <TabItem>
                    <Text>FOUR</Text>
                </TabItem>
            </TabBar>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});

it("renders TabBar with icons", () => {
    const tree = renderer
        .create(
            <TabBar>
                <TabItem active>
                    <Icon name="heart" />
                </TabItem>
                <TabItem>
                    <Icon name="star" />
                </TabItem>
                <TabItem>
                    <Icon name="square" />
                </TabItem>
                <TabItem>
                    <Icon name="egg" />
                </TabItem>
            </TabBar>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});

it("renders TabBar with tab titles and icons", () => {
    const tree = renderer
        .create(
            <TabBar>
                <TabItem active>
                    <Icon name="heart" />
                    <Text>ONE</Text>
                </TabItem>
                <TabItem>
                    <Icon name="star" />
                    <Text>TWO</Text>
                </TabItem>
                <TabItem>
                    <Icon name="square" />
                    <Text>THREE</Text>
                </TabItem>
                <TabItem>
                    <Icon name="egg" />
                    <Text>FOUR</Text>
                </TabItem>
            </TabBar>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});
