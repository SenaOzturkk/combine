import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';


const Initial = () => {
  const navigation = useNavigation();

  const isUserSignedIn = async () => {
    const a = await AsyncStorage.getItem('USER')
    a == null ? navigation.navigate('Login') : navigation.navigate('Bottom')
  };

  isUserSignedIn()
  return (<></>)
};

export default Initial;
