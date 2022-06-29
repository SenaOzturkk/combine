import {View, Text, ScrollView, SafeAreaView} from 'react-native';
import {ProfileBody, ProfileButtons} from '../screenComponents/ProfileBody';

import CustomButton from '../screenComponents/CustomButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import baseURL from '../baseURL';

const Profile = () => {
  const navigation = useNavigation();
  const [postInfos, setPostInfos] = useState({});
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState(null);
  const [userPp, setUserPp] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchData();
  }, [user]);

  useEffect(() => {
    isUserLoggedIn();
  }, []);

  const fetchData = _id => {
    if (user != null) {
      var myHeaders = new Headers();
      //console.log('userrrr', user);

      myHeaders.append('uid', user);
      // myHeaders.append("uid", "61c70dd33174c6b0f2c80302");

      var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow',
      };

      fetch(baseURL + 'post', requestOptions)
        .then(function (response) {
          return response.json();
        })
        .then(function (json) {
          setLoading(false);

          for (let index = 0; index < json.length; index++) {
            if (json[index].userID == user) {
              let userPpp = json[index].userPicture;
              let getUserName = json[index].userdetails;
              let userName = getUserName.map(({username}) => username);
              setUserPp(userPpp[0]);
              setUsername(userName[0]);
            }
          }
        })
        .catch(function (error) {
          console.log(
            'There has been a problem with your fetch operation: ' +
              error.message,
          );
          throw error;
        });
    }
  };

  const isUserLoggedIn = async () => {
    const a = await AsyncStorage.getItem('USER');
    setUser(a);
  };

  return (
    <SafeAreaView
      style={{width: '100%', height: '100%', backgroundColor: 'white'}}>
      <View style={{width: '100%', padding: 10}}>
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
