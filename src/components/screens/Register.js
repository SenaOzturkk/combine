import {View, Text, ScrollView, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import CustomInput from '../screenComponents/CustomInput';
import CustomButton from '../screenComponents/CustomButton';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import baseURL from '../baseURL';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');
  const navigation = useNavigation();

  const onRegisterPressed = async () => {
    const response = await axios({
      method: 'post',
      url: baseURL + 'auth/sign-up',
      headers: {},
      data: {
        email: email,
        password: password,
        username: username,
      },
    });

    if (
      response.data.insertedId != null ||
      response.data.insertedId != undefined
    ) {
      await AsyncStorage.setItem('USER', response.data.insertedId);
      navigation.navigate('Bottom');
    }
  };

  const onTermsOfUsePressed = () => {
    console.warn('on terms of use pressed');
  };
  const onPrivacyPressed = () => {
    console.warn('on privacy pressed');
  };
  const onSignInFacebook = () => {
    console.warn('facebook');
  };

  const onSignInGoogle = () => {
    console.warn('google');
  };

  const onSignUpdPressed = () => {
    console.warn('have an acccount');
    navigation.navigate('Login');
  };
  return (
    <ScrollView showVerticalScrollIndicator={false}>
      <View
        style={{
          backgroundColor: 'white',
          height: 800,
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: 'black',
            fontWeight: 'bold',
            fontSize: 24,
            marginBottom: 20,
            marginTop: 30,
          }}>
          CREATE AN ACCOUNT
        </Text>
        <CustomInput
          placeholder="Username"
          value={username}
          setValue={setUsername}
        />
        <CustomInput placeholder="Email" value={email} setValue={setEmail} />

        <CustomInput
          placeholder="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry
        />
        <CustomInput
          placeholder="Repeat Password"
          value={passwordRepeat}
          setValue={setPasswordRepeat}
          secureTextEntry
        />

        <CustomButton text="Register" onPress={onRegisterPressed} />
        <Text style={styles.text}>
          By registering, you confirm that you accept our{' '}
          <Text style={styles.link} onPress={onTermsOfUsePressed}>
            Terms of Use
          </Text>{' '}
          and{' '}
          <Text style={styles.link} onPress={onPrivacyPressed}>
            Privacy Policy
          </Text>
        </Text>
        <CustomButton
          text="Sign Up with Facebook"
          onPress={onSignInFacebook}
          bgColor="#E7EAF4"
          fgColor="#4765A9"
        />
        <CustomButton
          text="Sign Up with Google"
          onPress={onSignInGoogle}
          bgColor="#FAE9EA"
          fgColor="#DD4D44"
        />

        <CustomButton
          text="Have an account? Login"
          onPress={onSignUpdPressed}
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
