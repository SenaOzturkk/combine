import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { View, Text, SafeAreaView } from 'react-native';
import auth from '@react-native-firebase/auth';
import CustomButton from '../screenComponents/CustomButton';


export default function A() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  const onSignInFacebook = () => {
    auth()
      .signInAnonymously()
      .then(() => {
        console.log('User signed in anonymously');
      })
      .catch(error => {
        if (error.code === 'auth/operation-not-allowed') {
          console.log('Enable anonymous in your firebase console.');
        }

        console.error(error);
      });
  }


  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  if (!user) {
    return (
      <SafeAreaView>
        <Text>Login</Text>
        <CustomButton
          text="Sign In with Facebook"
          onPress={onSignInFacebook}
          bgColor="#E7EAF4"
          fgColor="#4765A9"
        />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView>
      <Text>Welcome {user.email}</Text>
    </SafeAreaView>
  );

  const navigation = useNavigation();

  const isUserSignedIn = async () => {
    const a = await AsyncStorage.getItem('USER')
    a == null ? navigation.navigate('Login') : navigation.navigate('Bottom')
  };

  isUserSignedIn()

  // return (<></>)

}