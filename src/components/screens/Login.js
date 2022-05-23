import {View, Text, Image, ScrollView} from 'react-native';
import React, {useState} from 'react';
import ChoiceLogo from '../../storage/images/choiceLogo.png';
import CustomInput from '../screenComponents/CustomInput';
import CustomButton from '../screenComponents/CustomButton';
import {useNavigation} from '@react-navigation/native';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const onLoginPressed = () => {
    console.warn('login');
    //validate user

    navigation.navigate('Home');
  };

  const onForgotPasswordPressed = () => {
    console.warn('forgot password');
    navigation.navigate('ForgotPassword');
  };

  const onSignInFacebook = () => {
    console.warn('facebook');
  };

  const onSignInGoogle = () => {
    console.warn('google');
  };

  const onSignUpdPressed = () => {
    console.warn('sign up');
    navigation.navigate('Register');
  };
  return (
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
  );
};

export default Login;
