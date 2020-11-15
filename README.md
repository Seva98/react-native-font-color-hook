# react-native-font-color-hook

React Native hook that applies dark font color for light mode and light font color for dark mode by [sevcik.dev](https://sevcik.dev)

## Installation

- Install

  npm

  `npm i react-native-font-color-hook`

  yarn

  `yarn add react-native-font-color-hook`

## Usage

- Start by importing the hook

  `import useFontColor from 'react-native-font-color-hook'`

- Initialize the hook

  `const fontColor = useFontColor()`

  - You can also pass two optional parameters to useFontColor(lightModeColor, darkModeColor), like this:

    `const fontColor = useFontColor('#AAEEAA', 'blue')`

- In your component pass it to style attribute

  `<Text style={[fontColor]}>Test Text</Text>`

  You can also append current style attribute array with it

  `<Text style={[styles.title, fontColor]}>Test Text</Text>`

## Example

```
import React from 'react';
import { Text } from 'react-native';
import useFontColor from 'react-native-font-color-hook';

const SampleText = () => {
  const fontColor = useFontColor();
  return (
    <View>
      <Text style={[styles.title, fontColor]}>Test Text</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    fontWeight: '800',
    paddingLeft: 10,
  },
});
```
