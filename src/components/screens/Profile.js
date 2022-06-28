import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import { ProfileBody, ProfileButtons } from '../screenComponents/ProfileBody';

import CustomButton from '../screenComponents/CustomButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import baseURL from '../baseURL';

const Profile = () => {
  const navigation = useNavigation();
  const [postInfos, setPostInfos] = useState({});
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState(null);
  const [userPp, setUserPp] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch(baseURL + 'post')
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        setPostInfos(json);
        console.log(json)
        const a = AsyncStorage.getItem('USER');
        setLoading(false);
        setUsername('deneme');
      })
      .catch(function (error) {
        console.log(
          'There has been a problem with your fetch operation: ' +
          error.message,
        );
        throw error;
      });
  };
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
      style={{ width: '100%', height: '100%', backgroundColor: 'white' }}>
      <View style={{ width: '100%', padding: 10 }}>
        <ProfileBody
          name={username}
          accountName={username}
          profileImage={userPp}
        />
        <ProfileButtons
          id={0}
          name={username}
          accountName={username}
          profileImage={userPp}
        />
      </View>
    </SafeAreaView>
  );
};

export default Profile;
