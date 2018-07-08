# react-native-modalpopup
A react-native Modal / Popup component for Android & iOS.

### Donate
It helps to me.
I will appreciated for that
[Donate](https://PayPal.Me/ismaalexmalcacastr)

## Features
- Pure JS.
- Customizable.
- Compatible with Android & iOS.
- Configurated.
- Ready to the usage.


## Demo
<img src="https://media.giphy.com/media/5bxpH5LcGO33zKAHkS/giphy.gif" width = "260" height = "487.5" alt="Demo 1"/> 

## Installation
```sh
npm i react-native-modalpopup --save
```

## Usage
### Basic
Import  module:
```javascript
import { ModalPopup } from 'react-native-modalpopup';
```

### Using
```javascript
<ModalPopup
    title='Hello world'
    isVisible={this.state.visible}
    onTouchOutside={() => {this.setState({visible:false})}}
>
    //... some childs
</ModalPopup>
```

### Customization
Give the style props as your choice:
- `titleStyle`: Change style of title if u want, see Text style props in react native documentation for more
- `outsideBgColor`: Change the background outside color, default is grey.
- `modalBgColor`: Change the Modal / Popup color, default is white.
- `modalBorderRadius`: Set number to put border radius to Modal / Popup.
- `modalPadding`: Boolean, active the padding for Modal / Popup. If you put ur own styles, it will active.


## API
### Props
Prop                | Type     | Optional | Default   | Description
------------------- | -------- | -------- | --------- | -----------
`title`             | string   | Yes      |    -      | Add title to Modal / Popup
`titleStyle`        | object   | Yes      | {{textAlign:'center',color:'#757575', fontSize:18, margin:16,  marginBottom: 10} | Styles for the Title, see Text style props in react native documentation for more.
`onTouchOutside`      | function   | NO - Required   |  - | Do you want to do when you'll click outside space.
`isVisible`           | boolean    | NO - Required    |  false |  Show and hide Modal / Popup

## Next version
Any suggestion is welcome.


### Donate
It helps to me.
I will appreciated for that
[Donate](https://PayPal.Me/ismaalexmalcacastr)