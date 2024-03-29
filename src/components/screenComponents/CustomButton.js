import {View, Text, Pressable, StyleSheet} from 'react-native';
import React from 'react';

const CustomButton = ({onPress, text, type = 'PRIMARY', bgColor, fgColor}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.container,
        styles[`container_${type}`],
        bgColor ? {backgroundColor: bgColor} : {},
      ]}>
      <Text
        style={[
          styles.text,
          styles[`text_${type}`],
          fgColor ? {color: fgColor} : {},
        ]}>
        {text}
      </Text>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '55%',
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    borderColor: 'white',
  },
  container_PRIMARY: {
    backgroundColor: 'black',
  },
  container_SQUARE: {
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container_CATEGORY: {
    backgroundColor: 'gray',
    width: 120,
    height: 120,
    borderColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container_TERTIARY: {
    backgroundColor: 'white',
    marginLeft: 'auto',
  },
  container_TERTIARY_CENTER: {
    backgroundColor: 'white',
  },
  text: {
    color: 'white',
    fontWeight: '400',
  },
});
export default CustomButton;
