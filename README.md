# first-born
![first-born Logo](https://user-images.githubusercontent.com/24349997/55307073-f5018300-5473-11e9-8f34-7d41680783fe.png)

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes

### Prerequisites

This module can only be used in a React Native app.
To use it, you will need a React Native app with it's dependencies installed.
The following modules need to be added as a dev dependency as well.

 - `create-react-class`
 - `react-native-vector-icons`

### Installing

To install first-born run the following command in the terminal;
```
npm install --save @99xt/first-born
```
You will additionally require to install the following modules as well.
```
npm install --save create-react-class react-native-vector-icons
```
Follow [this guide](https://github.com/oblador/react-native-vector-icons#installation) to configure `react-native-vector-icons` for your project. 

No other steps are required to configure `first-born` separately for each platform (Android/iOS).

## Development Testing

To test the repo, first clone it;
```
git clone https://github.com/99xt/first-born.git
```

Move into the folder;
```
cd first-born
```

Install dependencies;
```
npm install
```

And run the test script;
```
npm run test
```

## Usage

Import components like this;

```js
import { Button } from "@99xt/first-born";
```

### Utils

#### Colors

| Color               | Android                  | iOS                    |
|---------------------|--------------------------|------------------------|
| white               | #FFF                     | #FFF                   |
| black               | #000                     | #000                   |
| primary             | #486c86                  | #486c86                |
| secondary           | #8dd9d5                  | #8dd9d5                |
| error               | #e74c3c                  | #e74c3c                |
| inputGrey           | rgba(33, 33, 33, 0.5)    | rgba(33, 33, 33, 0.5)  |
| darkGrey            | rgba(33, 33, 33, 0.87)   | rgba(33, 33, 33, 0.87) |
| lightGrey           | rgba(33, 33, 33, 0.4)    | rgba(33, 33, 33, 0.4)  |
| overlay             | rgba(68, 68, 68, 0.6)    | rgba(68, 68, 68, 0.6)  |
| secondaryBackground | rgba(125, 167, 217, 0.2) | #ecf8fa                |

### Atoms

#### Text

```html
<Text>Hello</Text>
```
##### Android 
![Android Text](https://user-images.githubusercontent.com/24349997/55306378-ab179d80-5471-11e9-94dc-53328e7061d5.PNG "Android Text") 

##### iOS
![iOS Text](https://user-images.githubusercontent.com/24349997/55306381-abb03400-5471-11e9-98bd-934208893883.png "iOS Text")

You can use any [Text property](http://facebook.github.io/react-native/docs/text.html) and the following:

| Prop         | Description                                                                       | Default  |
|--------------|-----------------------------------------------------------------------------------|----------|
| **`size`**   | Size of the text, picked from predefined sizes, according to underlying platform. | `'p'`    |
| **`bold`**   | If text is bold or not.                                                           | _false_  |
| **`color`**  | Color of the text.                                                                | _black_  |
| **`margin`** | If the text requires a margin or not.                                             | _false_  |
| **`align`**  | Alignment of text ('left', 'right', 'center')                                     | `'left'` |

| Size          | Android | iOS |
|---------------|---------|-----|
| h1            | 96      | 34  |
| h2            | 60      | 28  |
| h3            | 48      | 24  |
| h4            | 34      | 22  |
| h5            | 24      | 20  |
| h6            | 20      | 17  |
| p             | 16      | 16  |
| callout       | 15      | 16  |
| sub_heading   | 14      | 15  |
| footnote      | 13      | 13  |
| caption_big   | 12      | 12  |
| caption_small | 11      | 11  |

#### Icon

The All Icon components (all font styles) from `react-native-vector-icons` is used.

```html
<Icon name='heart'/>
```
##### Android
![Android Icon](https://user-images.githubusercontent.com/24349997/55306382-ace16100-5471-11e9-96fb-bca1ff545b03.PNG "Android Icon") 

##### iOS
![iOS Icon](https://user-images.githubusercontent.com/24349997/55306384-aeab2480-5471-11e9-9129-0e1650e60c60.png "iOS Icon")

You can use any [TouchableOpacity property](http://facebook.github.io/react-native/docs/touchableopacity.html) and the following:

| Prop        | Description                                                                                                                                                                                     | Default |
|-------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|
| **`size`**  | Size of the icon.                                                                                                                                                                               | `18`    |
| **`name`**  | Similar to the name attribute in `react-native-vector-icons`. Does not require the prefix `md` or `ios` for Ionicons.                                                                           | _None_  |
| **`color`** | Color of the icon.                                                                                                                                                                              | _white_ |
| **`type`**  | Type of the icon font style. ('zocial', 'octicon', 'material', 'material-community', 'ionicon', 'foundation', 'evilicon', 'entypo', 'font-awesome', 'simple-line-icon', 'feather', 'antdesign') | _white_ |

#### Badge

Only accepts `Text` and `Icon` atoms and `react-native Image` .

```html
<Badge>
    <Text>+1</Text>
</Badge>
<Badge color="red">
    <Icon name="heart" />
</Badge>
```

##### Android
![Android Badge](https://user-images.githubusercontent.com/24349997/55612807-b71f9a00-57a6-11e9-9f1e-bbc6bb4e2f75.png "Android Badge") 

##### iOS
![iOS Badge](https://user-images.githubusercontent.com/4241926/55614817-7d04c700-57ab-11e9-91ec-1122dd7a35b6.png "iOS Badge") 

You can use any [View property](https://facebook.github.io/react-native/docs/view.html) and the following:

| Prop        | Description          | Default   |
|-------------|----------------------|-----------|
| **`color`** | Color of the button. | _primary_ |

#### Thumbnail

An Image component that displays either a square or circular image.

```html
<Thumbnail source={require("path/to/image.png")}/>
```

You can use any [Image property](http://facebook.github.io/react-native/docs/image.html) and the following:

| Prop             | Description                                                                                 | Default    |
|------------------|---------------------------------------------------------------------------------------------|------------|
| **`size`**       | Size of the image. ('small', 'medium', 'large', 'exlarge')                                  | `'medium'` |
| **`customSize`** | Size of the image, if it does not fit the above defined sizes.                              | _None_     |
| **`rounded`**    | If the image is to be a circle.                                                             | _false_    |
| **`onEdit`**     | Props to handle an image change of the thumbnail. You can use all `Button` atom properties. | _None_     |

#### Button

Only accepts `Text` and `Icon` atoms and `react-native Image` .

```html
<Button onPress={this.handleButtonClick} block >
    <Text>Click Me</Text>
</Button>
```

##### Android
![Android Button](https://user-images.githubusercontent.com/24349997/55306156-c3d38380-5470-11e9-9663-88f991e1a857.PNG "Android Button") 

##### iOS
![iOS Button](https://user-images.githubusercontent.com/24349997/55306333-7f94b300-5471-11e9-9f3c-3a068a7f7f72.png "iOS Button")

You can use any [TouchableOpacity property](https://facebook.github.io/react-native/docs/touchableopacity.html) and the following:

| Prop          | Description                                                                | Default     |
|---------------|----------------------------------------------------------------------------|-------------|
| **`size`**    | Size of the button, picked from predefined sizes small, default and large. | `'default'` |
| **`color`**   | Color of the button.                                                       | _primary_   |
| **`rounded`** | If the button has rounded corners.                                         | _false_     |
| **`block`**   | If the button has full width.                                              | _false_     |
| **`ouline`**  | If the button is transparent, but with a colored border and children.      | _false_     |
| **`rounded`** | If the button is transparent, but with colored children.                   | _false_     |

#### DatePicker

Renders a `Text`, that displays a date picker modal when the `onPress` method is triggered.

```html
<DatePicker onDateChange={this.handleDateChange} />
```

##### Android
![Android Date Picker](https://user-images.githubusercontent.com/24349997/55306512-2e38f380-5472-11e9-8e1a-323ce50250b7.PNG "Android Date Picker") 

##### iOS
![iOS Date Picker](https://user-images.githubusercontent.com/24349997/55306515-2f6a2080-5472-11e9-95e9-42f49b9fb01a.png "iOS Date Picker")

You can use any [TextInput property](http://facebook.github.io/react-native/docs/textinput.html) and the following:

| Prop                   | Description                                                         | Default         |
|------------------------|---------------------------------------------------------------------|-----------------|
| **`placeholder`**      | Display this string if value not selected yet. iOS only.            | `'Select Date'` |
| **`formatChosenDate`** | User defined function that returns a formatted date.                | _None_          |
| **`onDateChange`**     | User defined function to run when selected date changes.            | _None_          |
| **`defaultDate`**      | Initially picked date.                                              | _None_          |
| **`minimumDate`**      | Minimum in date range.                                              | _None_          |
| **`maximumDate`**      | Maximum in date range.                                              | _None_          |
| **`modalTransparent`** | If DatePicker modal is transparent. iOS only.                       | _true_          |
| **`animationType`**    | Type of entry/exit animation for DatePicker modal. iOS only.        | `'fade'`        |
| **`locale`**           | Locale of DatePicker. iOS only.                                     | _None_          |
| **`mode`**             | Type of picker ('date', 'time').                                    | `'date'`        |
| **`color`**            | Color of the `TextInput` when in focus.                             | _primary_       |
| **`isValid`**          | User defined validation function, that returns true for valid input | _None_          |
| **`errorMessage`**     | Error message to display below input, if validation fails           | _None_          |
| **`rounded`**          | If DatePicker style is rounded edges.                               | _false_         |
| **`underline`**        | If DatePicker style is an underline.                                | _false_         |
| **`defaultStyle`**     | If DatePicker style is default as seen above.                       | _true_          |
| **`noStyle`**          | If DatePicker has no framework defined style.                       | _false_         |
| **`style`**            | Custom DatePicker inactive style. (Style object)                    | _None_          |
| **`activeStyle`**      | Custom DatePicker active style. (Style object)                      | _None_          |
| **`errorStyle`**       | Custom DatePicker error style. (Style object)                       | _None_          |

#### Input

```html
<Input onChangeText={this.handleTextChange} placeholder="Name" />
```

##### Android
![Android Input](https://user-images.githubusercontent.com/24349997/55306524-3729c500-5472-11e9-84e0-6c84edfcaa78.PNG "Android Input") 

##### iOS
![iOS Input](https://user-images.githubusercontent.com/24349997/55306526-38f38880-5472-11e9-9057-a0f87ce1b93d.png "iOS Input")

You can use any [TextInput property](http://facebook.github.io/react-native/docs/textinput.html) and the following:

| Prop               | Description                                                        | Default   |
|--------------------|--------------------------------------------------------------------|-----------|
| **`color`**        | Color of the `TextInput` when in focus.                            | _primary_ |
| **`isValid`**      | User defined validation function, that returns true for valid text | _None_    |
| **`errorMessage`** | Error message to display below input, if validation fails          | _None_    |
| **`rounded`**      | If Input style is rounded edges.                                   | _false_   |
| **`underline`**    | If Input style is an underline.                                    | _false_   |
| **`defaultStyle`** | If Input style is default as seen above.                           | _true_    |
| **`noStyle`**      | If Input has no framework defined style.                           | _false_   |
| **`style`**        | Custom Input inactive style. (Style object)                        | _None_    |
| **`activeStyle`**  | Custom Input active style. (Style object)                          | _None_    |
| **`errorStyle`**   | Custom  Input error style. (Style object)                          | _None_    |

#### Picker

In Android, display a dropdown picker.
In iOS, renders a `Text`, that displays a picker modal when the `onPress` method is triggered.
```html
<Picker onValueChange={this.handleValueChange} selectedValue={this.state.pickerValue}>
    <Picker.Item value="1" label="1" />
    <Picker.Item value="2" label="2" />
    <Picker.Item value="3" label="3" />
</Picker>
```

##### Android
![Android Picker](https://user-images.githubusercontent.com/24349997/55306530-3bee7900-5472-11e9-95c0-1df0967f0946.PNG "Android Picker") 

##### iOS
![iOS Picker](https://user-images.githubusercontent.com/24349997/55306531-3c870f80-5472-11e9-91e1-127eceb96764.png "iOS Picker")

You can use any [Picker property](http://facebook.github.io/react-native/docs/picker.html) and the following:

| Prop                   | Description                                                         | Default           |
|------------------------|---------------------------------------------------------------------|-------------------|
| **`placeholder`**      | Display this string if value not selected yet. iOS only.            | `'Select Option'` |
| **`modalTransparent`** | If Picker modal is transparent. iOS only.                           | _true_            |
| **`animationType`**    | Type of entry/exit animation for Picker modal. iOS only.            | `'fade'`          |
| **`mode`**             | Type of picker mode ('dialog', 'dropdown'). Android only.           | `'dropdown'`      |
| **`color`**            | Color of the `TextInput` when in focus.                             | _primary_         |
| **`isValid`**          | User defined validation function, that returns true for valid input | _None_            |
| **`errorMessage`**     | Error message to display below input, if validation fails           | _None_            |
| **`rounded`**          | If Picker style is rounded edges.                                   | _false_           |
| **`underline`**        | If Picker style is an underline.                                    | _false_           |
| **`defaultStyle`**     | If Picker style is default as seen above.                           | _true_            |
| **`noStyle`**          | If Picker has no framework defined style.                           | _false_           |
| **`style`**            | Custom Picker inactive style. (Style object)                        | _None_            |
| **`activeStyle`**      | Custom Picker active style. (Style object)                          | _None_            |
| **`errorStyle`**       | Custom Picker error style. (Style object)                           | _None_            |

#### TextArea

Renders a `TextInput`, that increases in height with the height of the text entered.

```html
<TextArea onChangeText={this.handleTextChange} placeholder="Description" />
```

##### Android
![Android TextArea](https://user-images.githubusercontent.com/24349997/55306535-3e50d300-5472-11e9-9e48-5f07e08b7e76.PNG "Android TextArea") 

##### iOS
![iOS TextArea](https://user-images.githubusercontent.com/24349997/55306538-3f820000-5472-11e9-883d-12256652fb17.png "iOS TextArea")

You can use any [TextInput property](http://facebook.github.io/react-native/docs/textinput.html) and the following:

| Prop               | Description                                                        | Default   |
|--------------------|--------------------------------------------------------------------|-----------|
| **`color`**        | Color of the `TextInput` when in focus.                            | _primary_ |
| **`isValid`**      | User defined validation function, that returns true for valid text | _None_    |
| **`errorMessage`** | Error message to display below input, if validation fails          | _None_    |
| **`underline`**    | If DatePicker style is an underline.                               | _false_   |
| **`defaultStyle`** | If DatePicker style is default as seen above.                      | _true_    |
| **`noStyle`**      | If DatePicker has no framework defined style.                      | _false_   |
| **`style`**        | Custom DatePicker inactive style. (Style object)                   | _None_    |
| **`activeStyle`**  | Custom DatePicker active style. (Style object)                     | _None_    |
| **`errorStyle`**   | Custom DatePicker error style. (Style object)                      | _None_    |
 
### Molecules

#### Form Elements

##### FormDatePicker

Uses the Atom `DatePicker`.

```html
<FormDatePicker onDateChange={this.handleDateChange} label="Date" />
```

##### Android
![Android Form Date Picker](https://user-images.githubusercontent.com/24349997/55306633-8243d800-5472-11e9-8e7c-c40a0b064bfd.PNG "Android Form Date Picker") 

##### iOS
![iOS Form Date Picker](https://user-images.githubusercontent.com/24349997/55306635-82dc6e80-5472-11e9-96db-cf3ed146c5ad.png "iOS Form Date Picker")

Additional Props;

| Prop        | Description                                    | Default |
|-------------|------------------------------------------------|---------|
| **`label`** | Label to display name of input. **(Required)** | _None_  |

##### FormInput

Uses the Atom `Input`.

```html
<FormInput onChangeText={this.handleTextChange} label="Name" />
```

##### Android
![Android Form Input](https://user-images.githubusercontent.com/24349997/55306636-82dc6e80-5472-11e9-9ab2-6ced79bd2825.PNG "Android Form Input") 

##### iOS
![iOS Form Input](https://user-images.githubusercontent.com/24349997/55306637-82dc6e80-5472-11e9-999e-55f8517b8736.png "iOS Form Input")

Additional Props;

| Prop        | Description                                    | Default |
|-------------|------------------------------------------------|---------|
| **`label`** | Label to display name of input. **(Required)** | _None_  |

##### FormPicker

Uses the Atom `Picker`.

```html
<FormPicker onValueChange={this.handleValueChange} selectedValue={pickerValue} label="Number" data={pickerData} />
```

##### Android
![Android Form Picker](https://user-images.githubusercontent.com/24349997/55306638-82dc6e80-5472-11e9-8aa9-781de9941d82.PNG "Android Form Picker") 

##### iOS
![iOS Form Picker](https://user-images.githubusercontent.com/24349997/55306639-83750500-5472-11e9-9604-2304727f0bcd.png "iOS Form Picker")

Additional Props;

| Prop        | Description                                                                | Default |
|-------------|----------------------------------------------------------------------------|---------|
| **`label`** | Label to display name of input. **(Required)**                             | _None_  |
| **`data`**  | An array containing objects with values and labels for each `Picker.Item`. | _None_  |

##### FormTextArea

Uses the Atom `TextArea`.

```html
<FormTextArea onChangeText={this.handleTextChange} label="Description" />
```

##### Android
![Android Form TextArea](https://user-images.githubusercontent.com/24349997/55306640-83750500-5472-11e9-9846-28a245f22504.PNG "Android Form TextArea") 

##### iOS
![iOS Form TextArea](https://user-images.githubusercontent.com/24349997/55306641-83750500-5472-11e9-8aa2-db66455f1c85.png "iOS Form TextArea")

Additional Props;

| Prop        | Description                                    | Default |
|-------------|------------------------------------------------|---------|
| **`label`** | Label to display name of input. **(Required)** | _None_  |


#### Simple Notifications

```html
<Notification ref={"alert"} />
```

To use the Notification Component and pass data to it, you will need to register a Notification manager in `componentDidMount` and unregister it in `componentWillUnmount`.

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

##### Android
![Android Notification](https://user-images.githubusercontent.com/24349997/55306644-840d9b80-5472-11e9-803f-63f11c6df951.PNG "Android Notification")

##### iOS
 ![iOS Notification](https://user-images.githubusercontent.com/24349997/55306624-8112ab00-5472-11e9-9b71-ab06b5f6cbf0.png "iOS Notification")

The data that can be passed to the notification are;

| Prop                       | Description                                                    | Default     |
|----------------------------|----------------------------------------------------------------|-------------|
| **`message`**              | Message to display. **(Required)**                             | _None_      |
| **`shouldHideAfterDelay`** | If notification should hide after display or keep being shown. | _true_      |
| **`durationToHide`**       | Animation duration for the notification to completely hide.    | `350`       |
| **`durationToShow`**       | Animation duration for the notification to completely show.    | `350`       |
| **`duration`**             | Duration of time to display the alert                          | `3000`      |
| **`image`**                | Image to be displayed next to notification message             | _None_      |
| **`icon`**                 | Icon to be displayed next to notification message              | `'alert'`   |
| **`color`**                | Background color of the Notification body.                     | `'#007bff'` |

#### SnackBars

```html
<SnackBar ref={"alert"} />
```

To use the SnackBar Component and pass data to it, you will need to register a SnackBar manager in `componentDidMount` and unregister it in `componentWillUnmount`.

```js
componentDidMount() {
    SnackManager.registerMessageBar(this.refs.alert);
}

componentWillUnmount() {
    SnackManager.unregisterMessageBar();
}
```

To trigger the SnackBar display, you will need to run the SnackBar manager method `showAlert`.

```js
handleShowSnackBar = () => {
    SnackManager.showAlert({
        message: 'Your alert message goes here' // required
    });
}
```

##### Android
![Android SnackBar](https://user-images.githubusercontent.com/24349997/56493489-de979600-650c-11e9-94c7-1b85c551b32d.png "Android SnackBar")

##### iOS
 ![iOS SnackBar](https://user-images.githubusercontent.com/24349997/56493776-d55af900-650d-11e9-8692-d2b632e4a768.png "iOS SnackBar")

The data that can be passed to the SnackBar are;

| Prop                       | Description                                                                    | Default     |
|----------------------------|--------------------------------------------------------------------------------|-------------|
| **`message`**              | Message to display. **(Required)**                                             | _None_      |
| **`shouldHideAfterDelay`** | If SnackBar should hide after display or keep being shown.                     | _true_      |
| **`durationToHide`**       | Animation duration for the SnackBar to completely hide.                        | `350`       |
| **`durationToShow`**       | Animation duration for the SnackBar to completely show.                        | `350`       |
| **`duration`**             | Duration of time to display the alert                                          | `3000`      |
| **`backgroundColor`**      | Background color of the SnackBar body.                                         | `'#333333'` |
| **`onClickDismiss`**       | If SnackBar should hide after clicking the action button.                      | _true_      |
| **`position`**             | Position of SnackBar notification ('bottom', 'top').                           | `'bottom'`  |
| **`action`**               | An object denoting the method to run when the snack alerts button is clicked . | see below   |

The data to be passed to the action prop of a SnackBar;

| Prop          | Description                               | Default                       |
|---------------|-------------------------------------------|-------------------------------|
| **`title`**   | Title of the button                       | `'Close'`                     |
| **`onPress`** | Method to run when the button is clicked. | internal method to hide alert |
| **`color`**   | Button's text color                       | _error_                       |

#### ListItem

A List Item that displays a title (required), description and image. This molecule makes use of the `Text` Atom.

```html
<ListItem title="Heading" description="Description" image={{ source: require("path/to/image.png")}} >
    <ListItem title="Heading" onPress={this.handleButtonClick} description="Description" /> //Nested List Item
</ListItem>
```

##### Android
![Android ListItem](https://user-images.githubusercontent.com/24349997/55306642-840d9b80-5472-11e9-8ca9-b8c8d5294102.PNG "Android ListItem") 

##### iOS
![iOS ListItem](https://user-images.githubusercontent.com/24349997/55306643-840d9b80-5472-11e9-9478-0d33fe6d22e8.png "iOS ListItem")

You can use any [TouchableOpacity property](https://facebook.github.io/react-native/docs/touchableopacity.html) and the following:

| Prop                  | Description                                                                     | Default |
|-----------------------|---------------------------------------------------------------------------------|---------|
| **`title`**           | Description of List Item. **(Required)**                                        | _None_  |
| **`description`**     | Description of List Item.                                                       | _None_  |
| **`image`**           | Image to display in List Item. You can use all `react-native Image` properties. | _None_  |
| **`block`**           | If the List Item has full width of the device.                                  | _false_ |
| **`backgroundColor`** | Background color of List Item.                                                  | _white_ |
| **`secondary`**       | If the List Item is nested inside another.                                      | _false_ |
| **`rounded`**         | If the image displayed on the ListItem is rouned or not.                        | _false_ |

#### ThinListItem

A List Item that displays a title (required), description and image. This molecule makes use of the `Text` Atom. Similar to the above molecule but smaller with a few added features

```html
<ThinListItem title="Heading" description="Description" image={{ source: require("path/to/image.png") }} />
```

You can use any [TouchableOpacity property](https://facebook.github.io/react-native/docs/touchableopacity.html) and the following:

| Prop                  | Description                                                                     | Default |
|-----------------------|---------------------------------------------------------------------------------|---------|
| **`title`**           | Description of List Item. **(Required)**                                        | _None_  |
| **`description`**     | Description of List Item.                                                       | _None_  |
| **`image`**           | Image to display in List Item. You can use all `react-native Image` properties. | _None_  |
| **`icon`**            | Icon to display in List Item. You can use all `Icon` properties.                | _None_  |
| **`arrow`**           | If the List Item has an arrow at the right of the item.                         | _false_ |
| **`backgroundColor`** | Background color of List Item.                                                  | _white_ |
| **`rounded`**         | If the image displayed on the ListItem is rouned or not.                        | _false_ |

#### Floating Action Button

This molecule makes use of the `Text` and `Icon` Atoms.

###### One action

```html
<FloatingButton onPress={this.handleAction} image={require("path/to/image.png")} />
```

###### Multiple actions

```js

actions = [
    { text: 'Accessibility', image: require("path/to/image.png"), name: 'bt_accessibility', position: 2, onPress: () => this.handleAccessibility() },
    { text: 'Location', icon: "pin", name: 'bt_room', position: 1, onPress: () => this.handleLocation() },
    { text: 'Video', icon: "videocam", name: 'bt_videocam', position: 3, onPress: () => this.handleVideo() }
];

<FloatingButton actions={actions} />
```

##### Android
![Android FAB](https://user-images.githubusercontent.com/24349997/55306629-81ab4180-5472-11e9-860e-3693bcd3d8f8.PNG "Android FAB") ![Android FAB Expanded](https://user-images.githubusercontent.com/24349997/55306630-81ab4180-5472-11e9-9948-dc4223961298.PNG "Android FAB Expanded")

##### iOS
![iOS FAB](https://user-images.githubusercontent.com/24349997/55306632-8243d800-5472-11e9-94b9-a4b0c17842fc.png "iOS FAB") ![iOS FAB Expanded](https://user-images.githubusercontent.com/24349997/55306631-8243d800-5472-11e9-9315-ad5d91d913f0.png "iOS FAB Expanded")

The props for the main `FloatingButton` are;

| Prop                    | Description                                                                    | Default   |
|-------------------------|--------------------------------------------------------------------------------|-----------|
| color                   | Background color of main button.                                               | _primary_ |
| distanceToEdge          | Distance from edge of device for FAB positioning.                              | `30`      |
| mainVerticalDistance    | Distance of FAB from the bottom of the screen                                  | `0`       |
| visible                 | If the FAB and its children are visible.                                       | _true_    |
| overlayColor            | The overlay color of the background.                                           | _overlay_ |
| position                | The position of the FAB (center, right).                                       | `'right'` |
| showBackground          | Show background behind the FAB.                                                | _true_    |
| openOnMount             | If FAB should be expanded when page mounts.                                    | _false_   |
| actionsPaddingTopBottom | Spacing between child action items.                                            | `8`       |
| iconHeight              | Height of button icon.                                                         | `15`      |
| iconWidth               | Width of button icon.                                                          | `15`      |
| listenKeyboard          | If listeners are to be added for the Keyboard component.                       | _false_   |
| dismissKeyboardOnPress  | If keyboard should be dismissed on button click.                               | _false_   |
| onPress                 | User defined action to run when FAB main button is clicked.                    | _None_    |
| onClose                 | User defined action to run when FAB is closed.                                 | _None_    |
| onOpen                  | User defined action to run when FAB is expanded.                               | _None_    |
| onPressBackdrop         | User defined action to run when the background of the expanded FAB is clicked. | _None_    |
| onStateChange           | User defined action to run when the component state changes                    | _None_    |
| image                   | Image to display on FAB main button.                                           | _None_    |
| iconName                | Icon to display on FAB main button.                                            | _None_    |
| tabs                    | If the page also includes a footer navigation                                  | _false_   |
| action                  | Array of objects which correlate to a FloatingButtonItem                       | _false_   |

The props for the nested `FloatingButtonItems`, which is being sent through the `actions` prop are;

| Prop               | Description                                                            | Default    |
|--------------------|------------------------------------------------------------------------|------------|
| color              | Background color of main button.                                       | _primary_  |
| image              | Image to display on FAB main button.                                   | _None_     |
| icon               | Icon to display on FAB main button.                                    | _None_     |
| name               | Unique name for each button. **(Required)**                            | _None_     |
| textContainerStyle | Style of text container                                                | _None_     |
| text               | Text to be displayed next to button.                                   | _None_     |
| textStyle          | Style of text.                                                         | _None_     |
| textProps          | Other text props.                                                      | `'right'`  |
| textBackground     | Background color of text.                                              | _white_    |
| textColor          | Font color of text.                                                    | _darkGrey_ |
| textElevation      | Shadow of text element.                                                | `5`        |
| position           | The position of the FAB (center, right).                               | _None_     |
| active             | If FAB is expanded or not.                                             | _None_     |
| distanceToEdge     | Distance from edge of device for FAB positioning.                      | `30`       |
| paddingTopBottom   | Vertical padding of each action item.                                  | _None_     |
| onPress            | User defined action to run when FAB child action button is clicked.    | _None_     |
| margin             | Padding right of each action item, if the position of FAB is `'right'` | `8`        |

#### Card

A Card that displays a title (required), description and image.

```html
<Card title="Heading" description="Description" image={{ source: require("path/to/image.png")}} />
```

##### Android
![Android Card](https://user-images.githubusercontent.com/24349997/55306626-8112ab00-5472-11e9-8fad-5aaa7b981ffa.PNG "Android Card") 

##### iOS
![iOS Card](https://user-images.githubusercontent.com/24349997/55306628-81ab4180-5472-11e9-8ec7-16f185bb82b2.png "iOS Card")

You can use any [TouchableOpacity property](https://facebook.github.io/react-native/docs/touchableopacity.html) and the following:

| Prop                  | Description                                                                | Default |
|-----------------------|----------------------------------------------------------------------------|---------|
| **`title`**           | Description of Card. **(Required)**                                        | _None_  |
| **`description`**     | Description of Card.                                                       | _None_  |
| **`image`**           | Image to display in Card. You can use all `react-native Image` properties. | _None_  |
| **`block`**           | If the Card has full width of the device.                                  | _false_ |
| **`backgroundColor`** | Background color of Card.                                                  | _white_ |

### Organisms

#### Form

```js
formElements = [
    { label: "Full Name", type: "text", onChangeText: (value) => this.handleTextChange(value), placeholder: "John Doe" },
    { label: "Email", type: "text", onChangeText: (value) => this.handleTextChange(value), placeholder: "john.doe@gmail.com", isValid: (value) => this.checkInputValidity(value) },
    { label: "Type", type: "picker", onValueChange: (value) => this.handleValueChange(value), pickerData: this.pickerData },
    { label: "Date", type: "date", onDateChange: (value) => this.handleDateChange(value) },
    { label: "Address", type: "textarea", onChangeText: (value) => this.handleTextChange(value) },
];

<Form formElements={formElements} />
```

##### Android
![Android Form](https://user-images.githubusercontent.com/24349997/55306877-5d039980-5473-11e9-93f2-850d9ac47ddd.PNG "Android Form") 

##### iOS
![iOS Form](https://user-images.githubusercontent.com/24349997/55306878-5d039980-5473-11e9-9ec6-6db8356ff79e.png "iOS Form")

The `Form` Component iterates through the `formElements` array, to render the fields according to the type of input specified in each object. 
The form object only has one extra prop;

| Prop               | Description                                        | Default   |
|--------------------|----------------------------------------------------|-----------|
| **`color`**        | Color of all form elements when in focus.          | _primary_ |
| **`rounded`**      | If form element style is rounded edges.            | _false_   |
| **`underline`**    | If form element style is an underline.             | _false_   |
| **`defaultStyle`** | If form element style is default as seen above.    | _true_    |
| **`noStyle`**      | If form element has no framework defined style.    | _false_   |
| **`style`**        | Custom form element inactive style. (Style object) | _None_    |
| **`activeStyle`**  | Custom form element active style. (Style object)   | _None_    |
| **`errorStyle`**   | Custom form element error style. (Style object)    | _None_    |

But each type of input has corresponding proptypes to the molecules named below;

| Type         | Molecule Component                |
|--------------|-----------------------------------|
| `'text'`     | [FormInput](#forminput)           |
| `'textarea'` | [FormTextArea](#formtextarea)     |
| `'date'`     | [FormDatePicker](#formdatepicker) |
| `'picker'`   | [FormPicker](#formpicker)         |

#### ListView
A vertical list of ListItem molecules

```js
listData = [
    { title: "Heading 1", description: "Description 1", image: { source: require("path/to/image.png")} },
    { title: "Heading 2", description: "Description 2", image: { source: require("path/to/image.png")} },
    { title: "Heading 3", description: "Description 3", image: { source: require("path/to/image.png")} }
];

<ListView data={listData} />
```

You can also pass a custom `renderItem` method to the `ListView`, to render `ListItems` with other `TouchableOpacity` props, like `onPress`;

```js
handleListItemClick = (title, description) => {
    Alert.alert(title, description);
}

<ListView data={listData} renderItem={({item}) => <ListItem {...item} onPress={() => handleListItemClick(item.title, item.description)} />} />
```

##### Android
![Android ListView](https://user-images.githubusercontent.com/24349997/55306879-5d039980-5473-11e9-821e-c23d21244299.PNG "Android ListView") 

##### iOS
![iOS ListView](https://user-images.githubusercontent.com/24349997/55306880-5d9c3000-5473-11e9-8701-0cfdef3200b8.png "iOS ListView")

You can use any [FlatList property](http://facebook.github.io/react-native/docs/flatlist.html) and the following:

| Prop                  | Description                                              | Default |
|-----------------------|----------------------------------------------------------|---------|
| **`backgroundColor`** | Background color of all cards.                           | _white_ |
| **`thin`**            | If the `'ThinListItem'` is the component to be rendered. | _false_ |
| **`rounded`**         | If the image displayed on the ListItem is rouned or not. | _false_ |

The data to be sent to the ListView needs to contain the same fields as the props of [ListItem](#listitem) component.

#### CardList
A vertical/horizontal List of Card molecules.

```js
listData = [
    { title: "Heading 1", description: "Description 1", image: { source: require("path/to/image.png")} },
    { title: "Heading 2", description: "Description 2", image: { source: require("path/to/image.png")} },
    { title: "Heading 3", description: "Description 3", image: { source: require("path/to/image.png")} }
];

<CardList data={listData} />
```

You can also pass a custom `renderItem` method to the `CardList`, to render `Cards` with other `TouchableOpacity` props, like `onPress`;

```js
handleListItemClick = (title, description) => {
    Alert.alert(title, description);
}

<CardList data={listData} renderItem={({item}) => <Card {...item} onPress={() => handleListItemClick(item.title, item.description)} />} />
```

##### Android
![Android CardList](https://user-images.githubusercontent.com/24349997/55306875-5c6b0300-5473-11e9-826b-78fd3a8bb7b2.PNG "Android CardList") 

##### iOS
![iOS CardList](https://user-images.githubusercontent.com/24349997/55306876-5c6b0300-5473-11e9-86c0-8c2fb2f64e90.png "iOS CardList")

You can use any [FlatList property](http://facebook.github.io/react-native/docs/flatlist.html) and the following:

| Prop                  | Description                    | Default |
|-----------------------|--------------------------------|---------|
| **`backgroundColor`** | Background color of all cards. | _white_ |

The data to be sent to the CardList needs to contain the same fields as the props of [Card](#card) component.

#### NavBar
The Navigation Header makes use of the `Text` and `Icon` atom.

```js
<NavBar>
    <NavBarLeft>
        <NavBarButton type="drawer" />
    </NavBarLeft>
    <NavBarBody>
        <Text>Title</Text>
    </NavBarBody>
    <NavBarRight>
        <NavBarButton onPress={this.handleFavourites} >
            <Icon name="heart" />
        </NavBarButton>
    </NavBarRight>
</NavBar>
```

##### Android
![Android Nav Bar](https://user-images.githubusercontent.com/24349997/55306881-5d9c3000-5473-11e9-8162-2e60751f4ca9.PNG "Android Nav Bar") 

##### iOS
![iOS Nav Bar](https://user-images.githubusercontent.com/24349997/55306883-5e34c680-5473-11e9-905e-17f074c14930.png "iOS Nav Bar")

`NavBar` is the main container for the header. It makes use of the [View property](https://facebook.github.io/react-native/docs/view.html) and the following:

| Prop                 | Description                                                       | Default                                                 |
|----------------------|-------------------------------------------------------------------|---------------------------------------------------------|
| **`transparent`**    | If status bar above header is transparent                         | _None_                                                  |
| **`statusBarColor`** | Background color of the `NavBar`.                                 | _primary_ for Android, `'#F8F8F8'` for iOS              |
| **`statusBarColor`** | Content type of the `StatusBar`.('light-content', 'dark-content') | `'light-content'` for Android, `'dark-content'` for iOS |

`NavBarBody` is a container that displays its children in the center of the header. It only accepts the title of the page within a Text tag. It makes use of the [View property](https://facebook.github.io/react-native/docs/view.html) and the following:

| Prop        | Description               | Default                              |
|-------------|---------------------------|--------------------------------------|
| **`color`** | Color of the title`Text`. | _white_ for Android, _black_ for iOS |

`NavBarLeft` displays its children on the left while, `NavBarRight` is displays its children on the right side of the header. 
**All headers must contain these three tags, to render uniformly.**

`NavBarButton` is the button element to be used within the `NavBar`. It will only accept the atoms `Text`, `Icon` and a `react-native Image`. It contains the same property as a [TouchableOpacity](https://facebook.github.io/react-native/docs/touchableopacity.html). It also comes with an inbuilt type for common features, which are `'drawer'`, `'back'` and `'search'`.

| Prop        | Description                                                                 | Default                                  |
|-------------|-----------------------------------------------------------------------------|------------------------------------------|
| **`type`**  | Built in UI implementation of common `NavBar` button (drawer, back, search) | _None_                                   |
| **`color`** | Text and Icon color of button.                                              | _white_ for Android, `'#0a60ff'` for iOS |

#### TabBar
The Navigation Footer makes use of the `Text` and `Icon` atom.

```js
<TabBar>
    <TabItem active>
        <Icon name="heart" />
        <Text>Favorites</Text>
    </TabItem>
    <TabItem>
        <Icon name="add" />
        <Text>Add New</Text>
    </TabItem>
    <TabItem>
        <Icon name="camera" />
        <Text>Camera</Text>
    </TabItem>
    <TabItem>
        <Icon name="settings" />
        <Text>Settings</Text>
    </TabItem>
</TabBar>
```

##### Android
![Android Tab Bar](https://user-images.githubusercontent.com/24349997/55306888-5ecd5d00-5473-11e9-8737-8b01377343b8.PNG "Android Tab Bar") 

##### iOS
![iOS Tab Bar](https://user-images.githubusercontent.com/24349997/55306874-5c6b0300-5473-11e9-9cdc-9048e69df1bc.png "iOS Tab Bar")

`TabBar` is the main container for the footer navigation. It makes use of the [View property](https://facebook.github.io/react-native/docs/view.html) and the following:

| Prop                | Description                                        | Default                                                       |
|---------------------|----------------------------------------------------|---------------------------------------------------------------|
| **`color`**         | Background color of the `TabBar`.                  | _primary_ for Android, `'#F8F8F8'` for iOS                    |
| **`activeColor`**   | Text and Icon color of active tab.                 | _white_ for Android, `'#0a60ff'` for iOS                      |
| **`inactiveColor`** | Text and Icon color of inactive tab.               | `'rgba(209, 216, 224, 0.8)'` for Android, `'#8e8e93'` for iOS |
| **`top`**           | If the TabBar is on top of the page. Android only. | _false_                                                       |

`TabItem` is the button element to be used within the `TabBar`. It will only accept the atoms `Text`, `Icon` and a `react-native Image`. It contains the same property as a [TouchableOpacity](https://facebook.github.io/react-native/docs/touchableopacity.html). In addition, it contains the following properties as well;

| Prop                | Description                          | Default                                                       |
|---------------------|--------------------------------------|---------------------------------------------------------------|
| **`activeColor`**   | Text and Icon color of active tab.   | _white_ for Android, `'#0a60ff'` for iOS                      |
| **`inactiveColor`** | Text and Icon color of inactive tab. | `'rgba(209, 216, 224, 0.8)'` for Android, `'#8e8e93'` for iOS |
| **`active`**        | If current `TabItem` is active.      | _false_                                                       |


#### PillBar
The Pill Navigation Bar.

```js
pillScenes = [
    { scene: <Home /> },
    { scene: <CardList data={listData} /> },
    { scene: <ListView data={listData} /> },
    { scene: <View style={styles.innerContainer}><Form formElements={formElements} /></View> },
];

pillHeaders = [
    { title: 'Home', icon: "home" },
    { title: 'Card List', icon: "card" },
    { title: 'List View', icon: "list" },
    { title: 'Form', icon: "help" }
];

<PillView pillHeaders={pillHeaders} pillScenes={pillScenes} />
```


##### Android
![Android Pill Bar](https://user-images.githubusercontent.com/24349997/55306884-5e34c680-5473-11e9-90a8-5a6138c534e4.PNG "Android Pill Bar") 

##### iOS
![iOS Pill Bar](https://user-images.githubusercontent.com/24349997/55306886-5e34c680-5473-11e9-8ad4-05f85ddcef65.png "iOS Pill Bar")

The index of the pillHeader object, will be used to query the corresponding pillScene, during transition.

`PillBar` is the main container for the pill navigation. It makes use of the [View property](https://facebook.github.io/react-native/docs/view.html) and the following:

| Prop        | Description                                | Default                                    |
|-------------|--------------------------------------------|--------------------------------------------|
| **`color`** | Active color of the PillBar. Android only. | _primary_ for Android, `'#0a60ff'` for iOS |

This property `color`, will be passed down to child element `PillItem` as the `activeColor` prop mentioned below

`PillItem` is the button element to be used within the `PillBar`. It will only accept the atoms `Text`, `Icon` and a `react-native Image`. It contains the same property as a [TouchableOpacity](https://facebook.github.io/react-native/docs/touchableopacity.html). In addition, it contains the following properties as well;

| Prop                | Description                                        | Default                                  |
|---------------------|----------------------------------------------------|------------------------------------------|
| **`activeColor`**   | Text and Icon color of active tab.                 | _white_ for Android, `'#0a60ff'` for iOS |
| **`inactiveColor`** | Text and Icon color of inactive tab. Android only. | `'#adadad'`                              |
| **`active`**        | If current `PillItem` is active.                   | _false_                                  |

## Contributing
Please read [CONTRIBUTING.md](https://github.com/99xt/first-born/blob/master/CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. 

## Authors

* **Sameeha Rahman** - *Initial work* - [samsam-026](https://github.com/samsam-026)
* **Muditha Batagoda** - *Initial Design* - [mudithabatagoda](https://github.com/mudithabatagoda)

See also the list of [contributors](https://github.com/99xt/first-born/graphs/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/99xt/first-born/blob/master/LICENSE) file for details
