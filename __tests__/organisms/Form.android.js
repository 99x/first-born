import "react-native";
import React from "react";
import renderer from "react-test-renderer";
import { Form } from "../../src/organisms/Form";
import { FormPicker } from "../../src/molecules/formElements/FormPicker";
import { Picker } from "../../src/atoms/Picker";

jest.mock("Platform", () => {
    const Platform = require.requireActual("Platform");
    Platform.OS = "android";
    return Platform;
});

jest.mock("Picker", () => {
    // eslint-disable-next-line import/no-unresolved
    const React = require("React");
    const PropTypes = require("prop-types");
    return class MockPicker extends React.Component {
        static Item = props =>
            React.createElement("Item", props, props.children);
        static propTypes = { children: PropTypes.any };
        static defaultProps = { children: "" };

        render() {
            return React.createElement(
                "Picker",
                this.props,
                this.props.children
            );
        }
    };
});

it("renders a form with input types text", () => {
    const formElements = [
        { label: "Full Name", type: "text", placeholder: "John Doe" }
    ];

    const tree = renderer.create(<Form formElements={formElements} />).toJSON();
    expect(tree).toMatchSnapshot();
});

it("renders a form with input types, text and textarea", () => {
    const formElements = [
        { label: "Full Name", type: "text", placeholder: "John Doe" },
        { label: "Address", type: "textarea" }
    ];

    const tree = renderer.create(<Form formElements={formElements} />).toJSON();
    expect(tree).toMatchSnapshot();
});

it("renders a form with input types, text, textarea and picker", () => {
    const pickerData = [
        { value: "1", label: "1" },
        { value: "2", label: "2" },
        { value: "3", label: "3" }
    ];

    const formElements = [
        { label: "Full Name", type: "text", placeholder: "John Doe" },
        { label: "Type", type: "picker", pickerData: pickerData },
        { label: "Address", type: "textarea" }
    ];

    const tree = renderer.create(<Form formElements={formElements} />).toJSON();
    expect(tree).toMatchSnapshot();
});

it("renders a form with all input types", () => {
    const pickerData = [
        { value: "1", label: "1" },
        { value: "2", label: "2" },
        { value: "3", label: "3" }
    ];

    const formElements = [
        { label: "Full Name", type: "text", placeholder: "John Doe" },
        { label: "Type", type: "picker", pickerData: pickerData },
        { label: "Date", type: "date" },
        { label: "Address", type: "textarea" }
    ];

    const tree = renderer.create(<Form formElements={formElements} />).toJSON();
    expect(tree).toMatchSnapshot();
});
