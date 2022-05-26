import React from 'react';
import {View, Image, StatusBar, ScrollView, SafeAreaView} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionic from 'react-native-vector-icons/Ionicons';
import Post from '../screenComponents/Post';
import {useNavigation} from '@react-navigation/native';
import ChoiceLogo from '../../storage/images/choiceLogo.png';

const Home = () => {
  const navigation = useNavigation();
  const onActivityPressed = () => {
    console.warn('activity');
    navigation.navigate('Activity');
  };

  return (
    <SafeAreaView style={{backgroundColor: 'white', height: '100%'}}>
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
          style={{fontSize: 30, color: 'black'}}
          onPress={onActivityPressed}
        />
      </View>

      <ScrollView>
        <Post />
        <View
          style={{justifyContent: 'center', alignItems: 'center', padding: 50}}>
          <Ionic
            name="ios-reload-circle-sharp"
            style={{fontSize: 60, opacity: 0.2}}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
