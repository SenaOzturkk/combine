import {View, SafeAreaView, Image, ScrollView} from 'react-native';
import React, {useState} from 'react';
import ChoiceLogo from '../../storage/images/choiceLogo.png';
import CustomInput from '../screenComponents/CustomInput';
import CustomButton from '../screenComponents/CustomButton';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

import baseURL from '../baseURL';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const onLoginPressed = async () => {
    console.warn('login');
    //validate user
    const response = await axios({
      method: 'post',
      url: baseURL + 'auth/login',
      headers: {},
      data: {
        email: username,
        password: password,
      },
    });

    await AsyncStorage.setItem('USER', response.data.userID);
    navigation.navigate('Bottom');
  };

  const onForgotPasswordPressed = () => {
    console.warn('forgot password');
    navigation.navigate('ForgotPassword');
  };

  const onSignInFacebook = async () => {
    const x = await AsyncStorage.getItem('USER');
  };

  const onSignInGoogle = async () => {
    console.warn('google');
    await AsyncStorage.setItem('USER', '61881d3780c9116915159b1b');
  };

  const onSignUpdPressed = () => {
    console.warn('sign up');
    navigation.navigate('Register');
  };
  return (
    <SafeAreaView
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        position: 'relative',
      }}>
      <ScrollView showVerticalScrollIndicator={false}>
        <View
          style={{
            backgroundColor: 'white',
            height: '200%',
            alignItems: 'center',
          }}>
          <Image
            source={ChoiceLogo}
            style={{
              width: '80%',
              height: 100,
              marginTop: 20,
              marginBottom: 40,
            }}
            resizeMode="contain"
          />
          <CustomInput
            placeholder="Username"
            value={username}
            setValue={setUsername}
          />

          <CustomInput
            placeholder="Password"
            value={password}
            setValue={setPassword}
            secureTextEntry
          />

          <CustomButton
            text="Forgot password?"
            onPress={onForgotPasswordPressed}
            type="TERTIARY"
            fgColor="gray"
          />
          <CustomButton text="Log In" onPress={onLoginPressed} />
          <CustomButton
            text="Sign In with Facebook"
            onPress={onSignInFacebook}
            bgColor="#E7EAF4"
            fgColor="#4765A9"
          />
          <CustomButton
            text="Sign In with Google"
            onPress={onSignInGoogle}
            bgColor="#FAE9EA"
            fgColor="#DD4D44"
          />

          <CustomButton
            text="Don't have an account? Sign Up"
            onPress={onSignUpdPressed}
            type="TERTIARY_CENTER"
            fgColor="gray"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
