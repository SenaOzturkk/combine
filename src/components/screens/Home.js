import React, { useEffect, useState } from 'react';
import { View, Image, StatusBar, ScrollView, SafeAreaView } from 'react-native';
import Ionic from 'react-native-vector-icons/Ionicons';
import Post from '../screenComponents/Post';
import { useNavigation } from '@react-navigation/native';
import ChoiceLogo from '../../storage/images/choiceLogo.png';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

import baseURL from '../baseURL';

const Home = () => {
  const [postInfos, setPostInfos] = useState({})
  const [loading, setLoading] = useState(true)
  const navigation = useNavigation();

  useEffect(() => {
    fetchData()
  }, [])


  const fetchData = () => {
    fetch(baseURL + 'post')
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        setPostInfos(json)
        setLoading(false)
      })
      .catch(function (error) {
        console.log('There has been a problem with your fetch operation: ' + error.message);
        throw error;
      });
  };

  const onActivityPressed = () => {
    console.warn('activity');
    navigation.navigate('Activity');
  };

  return (
    <SafeAreaView style={{ backgroundColor: 'white', height: '100%' }}>
      <StatusBar
        backgroundColor="white"
        barStyle="dark-content"
        animated={true}
      />
      <View
        style={{
          justifyContent: 'center',
          flexDirection: 'row',

          alignItems: 'center',
        }}>
        <View>
          <Image
            source={ChoiceLogo}
            style={{
              width: 150,
              height: 40,
            }}
            resizeMode="contain"
          />
        </View>

        <Ionic
          name="ios-notifications-sharp"
          style={{ fontSize: 30, color: 'black' }}
          onPress={onActivityPressed}
        />
      </View>

      <View>
        {loading ? <></> : <Post postInfo={postInfos} />}
        <View
          style={{ justifyContent: 'center', alignItems: 'center', padding: 50 }}>
          <Ionic
            name="ios-reload-circle-sharp"
            style={{ fontSize: 60, opacity: 0.2 }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
