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
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        position: 'relative',
      }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text
          style={{
            margin: 15,
            fontSize: 20,
            fontWeight: '600',
            color: 'gray',
          }}>
          Mesajlar
        </Text>
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
                  width: '99%',
                  borderColor: 'gray',
                  borderWidth: 1,
                  marginLeft: 1,
                  borderRadius: 5,
                }}>
                <TouchableOpacity
                  onPress={() => navigation.push('SpecialMessage')}
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
                    Markası Ne?
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setFollow(!follow)}>
                  <View
                    style={{
                      width: 15,
                      height: 15,
                      borderRadius: 100,
                      backgroundColor: follow ? null : '#50de68',
                      borderWidth: follow ? 1 : 0,
                      borderColor: follow ? '#DEDEDE' : null,
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginRight: 20,
                    }}></View>
                </TouchableOpacity>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Activity;
