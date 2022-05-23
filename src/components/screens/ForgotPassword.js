import {View, Text, ScrollView, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import CustomInput from '../screenComponents/CustomInput';
import CustomButton from '../screenComponents/CustomButton';
import {useNavigation} from '@react-navigation/native';

const Login = () => {
  const [username, setUsername] = useState('');
  const navigation = useNavigation();

  const onSendPressed = () => {
    console.warn('onSendPressed');
    navigation.navigate('NewPassword');
  };

  const onSignInPressed = () => {
    console.warn('onSignInPressed');
    navigation.navigate('Login');
  };

  return (
    <ScrollView showVerticalScrollIndicator={false}>
      <View
        style={{
          backgroundColor: 'white',
          height: 700,
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: 'black',
            fontWeight: 'bold',
            fontSize: 24,
            marginBottom: 20,
            marginTop: 200,
          }}>
          RESET YOUR PASSWORD
        </Text>
        <CustomInput
          placeholder="Username"
          value={username}
          setValue={setUsername}
        />
        <CustomButton text="Send" onPress={onSendPressed} />
        <CustomButton
          text="Back to Sign In"
          onPress={onSignInPressed}
          type="TERTIARY_CENTER"
          fgColor="gray"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'gray',
    marginVertical: 20,
    marginHorizontal: 50,
  },
  link: {
    color: '#FD8075',
  },
});
export default Login;
