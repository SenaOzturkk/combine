import {View, Text, TextInput} from 'react-native';
import React from 'react';

const customInput = ({value, setValue, placeholder, secureTextEntry}) => {
  return (
    <View
      style={{
        backgroundColor: 'white',
        height: 45,
        width: '70%',
        borderColor: '#e8e8e8',
        borderWidth: 2,
        borderRadius: 10,
        paddingHorizontal: 10,
        marginVertical: 10,
      }}>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={setValue}
        secureTextEntry={secureTextEntry}></TextInput>
    </View>
  );
};

export default customInput;
