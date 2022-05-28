import React from 'react';
import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import { ProfileBody, ProfileButtons } from '../screenComponents/ProfileBody';
import Entypo from 'react-native-vector-icons/Entypo';
import BottomTabView from '../screenComponents/BottomTabView';
import CustomButton from '../screenComponents/CustomButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';


const Profile = () => {
  const navigation = useNavigation();

  let circuls = [];
  let numberofcircels = 10;


  const isUserSignedIn = async () => {
    const a = await AsyncStorage.getItem('USER')
    console.log(a)
    // a == null ? navigation.navigate('Login') : navigation.navigate('Bottom')
    await AsyncStorage.removeItem('USER')
    // await AsyncStorage.setItem('USER', '61881d3780c9116915159b1b')
  };

  const isUserLoggedIn = async () => {
    const a = await AsyncStorage.getItem('USER')
    console.log(a)
    // a == null ? navigation.navigate('Login') : navigation.navigate('Bottom')
    // await AsyncStorage.setItem('USER', '61881d3780c9116915159b1b')
  };

  for (let index = 0; index < numberofcircels; index++) {
    circuls.push(
      <View key={index}>
        {index === 0 ? (
          <View
            style={{
              width: 60,
              height: 60,
              borderRadius: 100,
              borderWidth: 1,
              opacity: 0.7,
              marginHorizontal: 5,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Entypo name="plus" style={{ fontSize: 40, color: 'black' }} />
          </View>
        ) : (
          <View
            style={{
              width: 60,
              height: 60,
              borderRadius: 100,
              backgroundColor: 'black',
              opacity: 0.1,
              marginHorizontal: 5,
            }}></View>
        )}
      </View>,
    );
  }

  return (
    <SafeAreaView style={{ width: '100%', height: '100%', backgroundColor: 'white' }}>
      <View style={{ width: '100%', padding: 10 }}>
        <ProfileBody
          name="Mr Peobody"
          accountName="mr_peobody"
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
      <View>
        <Text
          style={{
            padding: 10,
            letterSpacing: 1,
            fontSize: 14,
          }}>
          Story Highlights
        </Text>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{
            paddingVertical: 5,
            paddingHorizontal: 10,
          }}>
          {circuls}
        </ScrollView>
      </View>
      <CustomButton
        text="Sign In with Facebook"
        onPress={isUserSignedIn}
        bgColor="#E7EAF4"
        fgColor="#4765A9"
      /><CustomButton
        text="Print"
        onPress={isUserLoggedIn}
        bgColor="#E7EAF4"
        fgColor="#4765A9"
      />
      <BottomTabView />
    </SafeAreaView>
  );
};

export default Profile;
