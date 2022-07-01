import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  SafeAreaView,
  TextInput,
} from 'react-native';
import {FriendsProfileData} from '../screenComponents/Database';
import {useNavigation} from '@react-navigation/native';
import Ionic from 'react-native-vector-icons/Ionicons';
import CustomButton from './CustomButton';

const SpecialMessage = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView
      style={{width: '100%', height: '100%', backgroundColor: 'white'}}>
      <ScrollView style={{margin: 10}} showsVerticalScrollIndicator={false}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingVertical: 20,
            width: '100%',
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: 10,
              }}
              onPress={() => navigation.goBack()}>
              <Ionic
                name="arrow-back"
                style={{
                  fontSize: 30,
                }}
              />
            </TouchableOpacity>
            <Image
              source={FriendsProfileData[0].profileImage}
              style={{
                width: 45,
                height: 45,
                borderRadius: 100,
                marginRight: 10,
              }}
            />
            <Text style={{fontSize: 15}}>
              <Text style={{fontWeight: 'bold'}}>
                {FriendsProfileData[0].name}
              </Text>
            </Text>
          </View>
        </View>
        <View
          style={{
            borderColor: 'gray',
            borderWidth: 1,
            width: '100%',
            height: 550,
            borderRadius: 10,
          }}>
          <View
            style={{
              borderColor: 'black',
              borderWidth: 1,
              width: '70%',
              height: 50,
              marginTop: 420,
              marginLeft: 115,
              borderRadius: 10,
              alignItems: 'stretch',
              padding: 10,
              backgroundColor: 'black',
              color: 'white',
            }}>
            <Text
              style={{
                fontSize: 15,
                color: 'white',
              }}>
              Markası Nedir?
            </Text>
          </View>
          <View
            style={{
              borderColor: 'black',
              borderWidth: 1,
              width: '70%',
              height: 50,
              marginTop: 20,
              borderRadius: 10,
              alignItems: 'stretch',
              padding: 10,
              backgroundColor: 'black',
            }}>
            <Text
              style={{
                fontSize: 15,
                color: 'white',
              }}>
              Mango
            </Text>
          </View>
        </View>
        <View
          style={{
            borderColor: 'gray',
            borderWidth: 1,
            width: '100%',
            height: 60,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 10,
            borderRadius: 10,
            marginTop: 6,
          }}>
          <TextInput placeholder="Mesaj yaz..."></TextInput>
          <CustomButton
            text="Gönder"
            bgColor="black"
            fgColor="white"
            type="QUESTION"></CustomButton>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SpecialMessage;
