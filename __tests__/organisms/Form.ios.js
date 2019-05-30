import "react-native";
import React from "react";
import renderer from "react-test-renderer";
import { Form } from "../../src/organisms/Form";

jest.mock("Platform", () => {
    const Platform = require.requireActual("Platform");
    Platform.OS = "ios";
    return Platform;
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
        { label: "Date", type: "date", defaultDate: new Date(1554104240475) },
        { label: "Address", type: "textarea" }
    ];

    const tree = renderer.create(<Form formElements={formElements} />).toJSON();
    expect(tree).toMatchSnapshot();
});

it("renders a form with all underlined input types", () => {
    const pickerData = [
        { value: "1", label: "1" },
        { value: "2", label: "2" },
        { value: "3", label: "3" }
    ];

    const formElements = [
        { label: "Full Name", type: "text", placeholder: "John Doe" },
        { label: "Type", type: "picker", pickerData: pickerData },
        { label: "Date", type: "date", defaultDate: new Date(1554104240475) },
        { label: "Address", type: "textarea" }
    ];

    const tree = renderer
        .create(<Form formElements={formElements} underline />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

it("renders a form with all rounded input types", () => {
    const pickerData = [
        { value: "1", label: "1" },
        { value: "2", label: "2" },
        { value: "3", label: "3" }
    ];

    const formElements = [
        { label: "Full Name", type: "text", placeholder: "John Doe" },
        { label: "Type", type: "picker", pickerData: pickerData },
        { label: "Date", type: "date", defaultDate: new Date(1554104240475) },
        { label: "Address", type: "textarea" }
    ];

    const tree = renderer
        .create(<Form formElements={formElements} rounded />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

it("renders a form with all unstyled input types", () => {
    const pickerData = [
        { value: "1", label: "1" },
        { value: "2", label: "2" },
        { value: "3", label: "3" }
    ];

    const formElements = [
        { label: "Full Name", type: "text", placeholder: "John Doe" },
        { label: "Type", type: "picker", pickerData: pickerData },
        { label: "Date", type: "date", defaultDate: new Date(1554104240475) },
        { label: "Address", type: "textarea" }
    ];

    const tree = renderer
        .create(<Form formElements={formElements} noStyle />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

it("renders a form with all custom styled input types", () => {
    const pickerData = [
        { value: "1", label: "1" },
        { value: "2", label: "2" },
        { value: "3", label: "3" }
    ];

    const formElements = [
        { label: "Full Name", type: "text", placeholder: "John Doe" },
        { label: "Type", type: "picker", pickerData: pickerData },
        { label: "Date", type: "date", defaultDate: new Date(1554104240475) },
        { label: "Address", type: "textarea" }
    ];

    const tree = renderer
        .create(
            <Form
                formElements={formElements}
                noStyle
                style={{
                    borderWidth: 1,
                    borderColor: "black",
                    borderRadius: "3"
                }}
            />
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});
