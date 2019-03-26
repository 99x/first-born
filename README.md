# firstBorn
![](https://github.com/99xt/firstBorn/blob/master/firstBorn-logo.png)

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
| **`color`** | Color of the icon.                                                                | _white_     |

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
| **`color`** | Color of the `TextInput` `onFocus`.                              | _primary_     |

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

#### Form Elements

##### FormDatePicker

Uses the Atom `DatePicker`.

```html
<FormDatePicker onDateChange={this.handleDateChange} color="#F0F" label="Date" />
```

Additional Props;

| Prop        | Description                                                                       | Default     |
| ----------- | --------------------------------------------------------------------------------- | ----------- |
| **`label`** | Label to display name of input. **(Required)**                                      | _None_      |

##### FormInput

Uses the Atom `Input`.

```html
<FormInput onChangeText={this.handleTextChange} label="Name" />
```

Additional Props;

| Prop        | Description                                                                       | Default     |
| ----------- | --------------------------------------------------------------------------------- | ----------- |
| **`label`** | Label to display name of input. **(Required)**                                 | _None_      |

##### FormPicker

Uses the Atom `DatePicker`.

```html
<FormPicker color="#00F" onValueChange={this.handleValueChange} selectedValue={this.state.pickerValue} label="Number" data={this.state.pickerData} />
```

Additional Props;

| Prop        | Description                                                                       | Default     |
| ----------- | --------------------------------------------------------------------------------- | ----------- |
| **`label`** | Label to display name of input. **(Required)**                                      | _None_      |
| **`data`**  | An array containing objects with values and labels for each `Picker.Item`.        | _None_      |

##### FormTextArea

Uses the Atom `DatePicker`.

```html
<FormTextArea color="#0F0" onChangeText={this.handleTextChange} label="Description" />
```

Additional Props;

| Prop        | Description                                                                       | Default     |
| ----------- | --------------------------------------------------------------------------------- | ----------- |
| **`label`** | Label to display name of input. **(Required)**                                      | _None_      |


#### Notifications

```html
<Notification ref={"alert"} />
```

To use the Notification Component and pass data to it, you will need to register a Notification manager in `componentDidMount` and unreguster it in `componentWillUnmount`.

```js
componentDidMount() {
    NotificationBarManager.registerMessageBar(this.refs.alert);
}

componentWillUnmount() {
    NotificationBarManager.unregisterMessageBar();
}
```

To trigger the Notification display, you will need to run the Notification manager method `showAlert`.

```js
handleShowNotification = () => {
    NotificationBarManager.showAlert({
        message: 'Your alert message goes here' // required
    });
}
```
The data that can be passed to the notification are;

| Prop        | Description                                                                       | Default     |
| ----------- | --------------------------------------------------------------------------------- | ----------- |
| **`message`**  | Message to display. **(Required)** | _None_      |
| **`shouldHideAfterDelay`**  | If notification should hide after display or keep being shown. | _false_      |
| **`durationToHide`**  | Animation duration for the notification to completely hide. | `350`      |
| **`durationToShow`**  | Animation duration for the notification to completely show. | `350`      |
| **`duration`**  | Duration of time to display the alert | `3000`       |
| **`image`**  |Image to be displayed next to notification message | _None_      |
| **`icon`**  | Icon to be displayed next to notification message | `'alert'`      |
| **`color`** | Background color of the Notification body.                              | `'#007bff'`      |

#### List Item

A List Item that displays a title (required), description and image.

```html
<ListItem title="Heading" description="Description" image={require("../assets/images/scenery.jpg")} >
    <ListItem title="Heading" onPress={this.handleButtonClick} description="Description" /> //Nested List Item
</ListItem>
```

You can use any [TouchableOpacity property](https://facebook.github.io/react-native/docs/touchableopacity.html) and the following:

| Prop        | Description                                                             | Default     |
| ----------- | ----------------------------------------------------------------------- | ----------- |
| **`title`**  |Description of List Item. **(Required)** | _None_  |
| **`description`** | Description of List Item.                                      | _None_  |
| **`image`** | Image to display in List Item.   | _None_      |
| **`block`** | If the List Item has full width of the device.    | _false_      |
| **`backgroundColor`** | Background color of List Item.    | _white_      |
| **`secondary`** | If the List Item is nested inside another.    | _false_      |

#### Floating Action Button

This molecule makes use of the `Text` and `Icon` Atoms

###### One action

```html
<FloatingButton onPress={this.handleAction} image={require("./assets/images/accessibility.png")} />
```

###### Multiple actions

```html
<FloatingButton actions={this.actions} />
```
The props for the main `FloatingButton` are;

| Prop        | Description                                                             | Default     |
| ----------- | ----------------------------------------------------------------------- | ----------- |
| color | Background color of main button. | _primary_ |
| distanceToEdge | Distance from edge of device for FAB positioning. | `30` |
| mainVerticalDistance | Distance of FAB from the bottom of the screen | `0` |
| visible | If the FAB and its children are visible. | _true_ |
| overlayColor | The overlay color of the background. | _overlay_ |
| position | The position of the FAB (center, right). | `'right'` |
| showBackground | Show background behind the FAB. | _true_ |
| openOnMount | If FAB should be expanded when page mounts. | _false_ |
| actionsPaddingTopBottom | Spacing between child action items. | `8` |
| iconHeight | Height of button icon. | `15` |
| iconWidth | Width of button icon. | `15` |
| listenKeyboard | If listeners are to be added for the Keyboard component. | _false_ |
| dismissKeyboardOnPress | If keyboard should be dismissed on button click.  | _false_ |
| onPress | User defined action to run when FAB main button is clicked. | _None_ |
| onClose | User defined action to run when FAB is closed. | _None_ |
| onOpen | User defined action to run when FAB is expanded. | _None_ |
| onPressBackdrop | User defined action to run when the background of the expanded FAB is clicked. | _None_ |
| onStateChange | User defined action to run when the component state changes | _None_ |
| image | Image to display on FAB main button. | _None_ |
| iconName | Icon to display on FAB main button. | _None_ |
| tabs | If the page also includes a footer navigation | _false_ |
| action | Array of objects which correlate to a FloatingButtonItem | _false_ |

The props for the nested `FloatingButtonItems`, which is being sent through the `actions` prop are;

| Prop        | Description                                                             | Default     |
| ----------- | ----------------------------------------------------------------------- | ----------- |
| color | Background color of main button. | _primary_ |
| image | Image to display on FAB main button. | _None_ |
| icon | Icon to display on FAB main button. | _None_ |
| name | Unique name for each button. **(Required)**  | _None_ |
| textContainerStyle | Style of text container | _None_ |
| text | Text to be displayed next to button. | _None_ |
| textStyle | Style of text. | _None_ |
| textProps | Other text props. | `'right'` |
| textBackground | Background color of text. | _white_ |
| textColor | Font color of text. | _darkGrey_ |
| textElevation | Shadow of text element. | `5` |
| position | The position of the FAB (center, right). | _None_ |
| active | If FAB is expanded or not. | _None_ |
| distanceToEdge | Distance from edge of device for FAB positioning. | `30` |
| paddingTopBottom | Vertical padding of each action item.  | _None_ |
| onPress | User defined action to run when FAB child action button is clicked. | _None_ |
| margin | Padding right of each action item, if the position of FAB is `'right'` | `8` |

#### Card

A Card that displays a title (required), description and image.

```html
<Card title="Heading" description="Description" image={require("../assets/images/scenery.jpg")} />
```

You can use any [TouchableOpacity property](https://facebook.github.io/react-native/docs/touchableopacity.html) and the following:

| Prop        | Description                                                             | Default     |
| ----------- | ----------------------------------------------------------------------- | ----------- |
| **`title`**  |Description of Card. **(Required)** | _None_  |
| **`description`** | Description of Card.                                      | _None_  |
| **`image`** | Image to display in Card.   | _None_      |
| **`block`** | If the Card has full width of the device.    | _false_      |
| **`backgroundColor`** | Background color of Card.    | _white_      |

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
