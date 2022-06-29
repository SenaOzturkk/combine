import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';
import {FriendsProfileData} from '../screenComponents/Database';
import {useNavigation} from '@react-navigation/native';

const Activity = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView
      style={{width: '100%', height: '100%', backgroundColor: 'white'}}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          borderBottomWidth: 0.5,
          borderBottomColor: '#DEDEDE',
          padding: 10,
        }}>
        Sorduğum Sorular
      </Text>
      <ScrollView style={{margin: 10}} showsVerticalScrollIndicator={false}>
        {FriendsProfileData.slice(2, 10).map((data, index) => {
          const [follow, setFollow] = useState(data.follow);
          return (
            <View key={index} style={{width: '100%'}}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingVertical: 20,
                  width: '100%',
                }}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.push('FriendProfile', {
                      name: data.name,
                      profileImage: data.profileImage,
                      follow: follow,
                      post: data.posts,
                      followers: data.followers,
                      following: data.following,
                    })
                  }
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    maxWidth: '60%',
                  }}>
                  <Image
                    source={data.profileImage}
                    style={{
                      width: 45,
                      height: 45,
                      borderRadius: 100,
                      marginRight: 10,
                    }}
                  />
                  <Text style={{fontSize: 15}}>
                    <Text style={{fontWeight: 'bold'}}>{data.name}</Text>
                    Markası ne bedeni ne
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setFollow(!follow)}>
                  <View
                    style={{
                      width: 90,
                      height: 30,
                      borderRadius: 5,
                      backgroundColor: follow ? null : '#3493D9',
                      borderWidth: follow ? 1 : 0,
                      borderColor: follow ? '#DEDEDE' : null,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{color: follow ? 'black' : 'white'}}
                      onPress={() => navigation.push('SpecialMessage')}>
                      Mesajlara Git
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          );
        })}

        <View style={{padding: 20}}>
          <Text style={{color: '#3493D9'}}>Daha fazla soru gör</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Activity;
