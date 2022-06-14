import React from 'react';
import {View, Text, ScrollView, SafeAreaView} from 'react-native';
import {ProfileBody, ProfileButtons} from '../screenComponents/ProfileBody';

import CustomButton from '../screenComponents/CustomButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';

const Profile = () => {
  const navigation = useNavigation();

  const isUserSignedIn = async () => {
    const a = await AsyncStorage.getItem('USER');
    console.log(a);
    // a == null ? navigation.navigate('Login') : navigation.navigate('Bottom')
    await AsyncStorage.removeItem('USER');
    // await AsyncStorage.setItem('USER', '61881d3780c9116915159b1b')
  };

  const isUserLoggedIn = async () => {
    const a = await AsyncStorage.getItem('USER');
    console.log(a);
    // a == null ? navigation.navigate('Login') : navigation.navigate('Bottom')
    // await AsyncStorage.setItem('USER', '61881d3780c9116915159b1b')
  };

  return (
    <SafeAreaView
      style={{width: '100%', height: '100%', backgroundColor: 'white'}}>
      <View style={{width: '100%', padding: 10}}>
        <ProfileBody
          name="aa"
          accountName="djjeneme"
          profileImage={require('../../storage/images/userProfile.png')}
          followers="3.6M"
          following="35"
          post="458"
        />
        <ProfileButtons
          id={0}
          name="Mr Peobody"
          accountName="mr_peobody"
          profileImage={require('../../storage/images/userProfile.png')}
        />
      </View>
    </SafeAreaView>
  );
};

export default Profile;

/*
 <CustomButton
        text="Sign In with Facebook"
        onPress={isUserSignedIn}
        bgColor="#E7EAF4"
        fgColor="#4765A9"
      />
      <CustomButton
        text="Print"
        onPress={isUserLoggedIn}
        bgColor="#E7EAF4"
        fgColor="#4765A9"
      />

*/
