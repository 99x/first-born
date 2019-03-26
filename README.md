![](https://github.com/99xt/firstBorn/blob/master/firstBorn-logo.png)
# firstBorn

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes

### Prerequisites

This module can only be used in a React Native app.
To use it, you will need a React Native app with it's dependencies installed.
The following modules need to be added as a dev dependency as well.

 - `create-react-class`
 - `react-native-vector-icons`

### Installing

After installing all dependencies in your app, move into the `node_modules` folder.
```
cd node_modules
```
Clone the firstBorn repository into the root of `node_modules`.
```
git clone https://github.com/99xt/firstBorn.git
```
Update the `package.json` to contain the following line inside `dependencies`.
```
"firstBorn": "file:/node_modules/firstBorn"
```
No additonal steps are required to configure it seperately for each platform (Android/iOS).

## Usage

Import components like this;

```js
import { Button } from "firstBorn";
```

### Utils

#### Colors

| Color | Android | iOS |
| ----- | ------- | --- |
| white | #FFF| #FFF |
| black | #000| #000 |
| primary | #486c86| #486c86 |
| secondary | #8dd9d5| #8dd9d5 |
| error | #e74c3c| #e74c3c |
| inputGrey | rgba(33, 33, 33, 0.5)| rgba(33, 33, 33, 0.5) |
| darkGrey | rgba(33, 33, 33, 0.87)|rgba(33, 33, 33, 0.87) |
| lightGrey | rgba(33, 33, 33, 0.4)| rgba(33, 33, 33, 0.4) |
| overlay | rgba(68, 68, 68, 0.6)| rgba(68, 68, 68, 0.6) |
| secondaryBackground | rgba(125, 167, 217, 0.2)| #ecf8fa |

### Atoms

#### Text

```html
<Text>Hello</Text>
```
You can use any [Text property](http://facebook.github.io/react-native/docs/text.html) and the following:

| Prop        | Description                                                                       | Default     |
| ----------- | --------------------------------------------------------------------------------- | ----------- |
| **`size`**  | Size of the text, picked from predefined sizes, according to underlying platform. | `'p'`       |
| **`bold`**  | If text is bold or not.                                                           | _false_     |
| **`color`** | Color of the text.                                                                |_black_    |

| Size | Android | iOS |
| ----- | -------| -------|
|  h1|  96   |      34   |
|  h2 |  60   |      28   |
|  h3 |  48   |      24   |
|  h4 |  34   |      22   |
|  h5 |  24   |      20   |
|  h6 |  20   |      17   |
|  p |  16   |      16   |
|  callout |  15   |      16   |
|  sub_heading |  14   |      15   |
|  footnote |  13   |      13   |
|  caption_big |  12   |      12   |
|  caption_small |  11   |      11   |

#### Icon

The Ionicons component from `react-native-vector-icons` is used.

```html
<Icon name='heart'>
```
You can use any [Text property](http://facebook.github.io/react-native/docs/text.html) and the following:

| Prop        | Description                                                                       | Default     |
| ----------- | --------------------------------------------------------------------------------- | ----------- |
| **`size`**  | Size of the icon.                                                                 | `'p'`       |
| **`name`**  | Similar to the name attribute in `react-native-vector-icons`, but does not require the prefix `md` or `ios`. | _None_      |
| **`color`** | Color of the icon.                                                                | _black_     |

#### Button

Only accepts `Text` and `Icon` atoms and `react-native Image` .

```html
<Button onPress={this.handleButtonClick} block >
    <Text>Click Me</Text>
</Button>
```

You can use any [TouchableOpacity property](https://facebook.github.io/react-native/docs/touchableopacity.html) and the following:

| Prop        | Description                                                             | Default     |
| ----------- | ----------------------------------------------------------------------- | ----------- |
| **`size`**  | Size of the button, picked from predefined sizes small, default and large. | `'default'` |
| **`color`** | Color of the button.                                                    | _primary_|
| **`rounded`** | If the button has rounded corners.    | _false_      |
| **`block`** | If the button has full width.    | _false_      |
| **`ouline`** | If the button is transparent, but with a colored border and children.    | _false_      |
| **`rounded`** | If the button is transparent, but with colored children.    | _false_      |

#### DatePicker

Renders a `Text`, that displays a date picker modal when the `onPress` method is triggered.

```html
<DatePicker onDateChange={this.handleDateChange} color="#F0F" />
```
You can use any [TextInput property](http://facebook.github.io/react-native/docs/textinput.html) and the following:

| Prop        | Description                                                                       | Default     |
| ----------- | --------------------------------------------------------------------------------- | ----------- |
| **`placeholder`**  | Display this string if value not selected yet. iOS only. | `'Select Date'`      |
| **`formatChosenDate`**  | User defined function that returns a formatted date. | _None_       |
| **`onDateChange`**  | User defined function to run when selected date changes. | _None_      |
| **`defaultDate`**  | Initially picked date. | _None_      |
| **`minimumDate`**  | Minimum in date range. | _None_      |
| **`maximumDate`**  | Maximum in date range. | _None_      |
| **`modalTransparent`**  | If DatePicker modal is transparent. iOS only. | _true_      |
| **`animationType`**  | Type of entry/exit animation for DatePicker modal. iOS only. | `'fade'`       |
| **`locale`**  | Locale of DatePicker. iOS only. | _None_      |
| **`androidMode`**  | Type DatePicker mode. Android only. |_None_      |
| **`color`** | Color of the `TextInput` `onFocus`.                              |_primary_     |

#### Input

```html
<Input onChangeText={this.handleTextChange} placeholder="Name" />
```
You can use any [TextInput property](http://facebook.github.io/react-native/docs/textinput.html) and the following:

| Prop        | Description                                                                       | Default     |
| ----------- | --------------------------------------------------------------------------------- | ----------- |
| **`isValid`**  | User defined validation function, that returns true for valid text             | _None_       |
| **`color`** | Color of the `TextInput` `onFocus`.                              | `'primary'`     |

#### Picker

In Android, display a dropdown picker.
In iOS, renders a `Text`, that displays a picker modal when the `onPress` method is triggered.
```html
<Picker color="#00F" onValueChange={this.handleValueChange} selectedValue={this.state.pickerValue}>
    <Picker.Item value="1" label="1" />
    <Picker.Item value="2" label="2" />
    <Picker.Item value="3" label="3" />
</Picker>
```
You can use any [Picker property](http://facebook.github.io/react-native/docs/picker.html) and the following:

| Prop        | Description                                                                       | Default     |
| ----------- | --------------------------------------------------------------------------------- | ----------- |
| **`placeholder`**  | Display this string if value not selected yet. iOS only. | `'Select Option'`      |
| **`modalTransparent`**  | If DatePicker modal is transparent. iOS only. | _true_      |
| **`animationType`**  | Type of entry/exit animation for DatePicker modal. iOS only. | `'fade'`       |
| **`mode`**  | Type picker mode ('dialog', 'dropdown'). Android only. |`'dropdown'`     |
| **`color`** | Color of the `TextInput` `onFocus`.                              |_primary_     |

#### TextArea

Renders a `TextInput`, that increases in height with the height of the text entered.

```html
<TextArea color="#0F0" onChangeText={this.handleTextChange} placeholder="Description" />
```
You can use any [TextInput property](http://facebook.github.io/react-native/docs/textinput.html) and the following:

| Prop        | Description                                                                       | Default     |
| ----------- | --------------------------------------------------------------------------------- | ----------- |
| **`color`** | Color of the `TextInput` `onFocus`.                                               | _primary_ |
 
### Molecules

### Organisms

## Contributing
Please read [CONTRIBUTING.md](https://github.com/99xt/firstBorn/blob/master/CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. 

## Authors

* **Sameeha Rahman** - *Initial work* - [samsam-026](https://github.com/samsam-026)
* **Muditha Batagoda** - *Initial Design* - [mudithabatagoda](https://github.com/mudithabatagoda)

See also the list of [contributors](https://github.com/99xt/firstBorn/graphs/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/99xt/firstBorn/blob/master/LICENSE) file for details
