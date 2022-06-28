import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import CustomButton from '../screenComponents/CustomButton';
import Ionic from 'react-native-vector-icons/Ionicons';
import Post from './Post';
import baseURL from '../baseURL';
export const ProfileBody = ({
  name,
  accountName,
  profileImage,
  post,
  followers,
  following,
}) => {
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderRadius: 10,
          //  backgroundColor: '#EEEEEE',
          borderColor: 'white',
          borderWidth: 2,
          padding: 10,
          marginBottom: 15,
        }}>
        <View
          style={{
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <Image
            source={profileImage}
            style={{
              resizeMode: 'cover',
              width: 100,
              height: 100,
              borderRadius: 100,
            }}
          />
          <Text
            style={{
              paddingVertical: 5,
              fontWeight: 'bold',
              marginLeft: 20,
              fontSize: 18,
            }}>
            {name}
          </Text>
        </View>
      </View>
    </View>
  );
};

export const ProfileButtons = ({ id, name, accountName, profileImage }) => {
  const navigation = useNavigation();
  const [myPosts, setMyPosts] = useState({})
  const [follow, setFollow] = useState(follow);
  const onSendVotes = () => {
    navigation.navigate('Votes');
  };
  const onSendAskedQuestion = () => {
    navigation.navigate('Votes');
  };

  const fetchData = () => {
    fetch(baseURL + 'post')
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        setMyPosts(json)
      })
      .catch(function (error) {
        console.log('There has been a problem with your fetch operation: ' + error.message);
        throw error;
      });
  };

  const getBack = () => {
    navigation.navigate('Profile')
  }

  const onSendMyPosts = () => {
    fetchData()
    return (
      <Post postInfo={myPosts} isCategory={true} categoryLoading={getBack} />
    )
  };

  return (
    <>
      {id === 0 ? (
        <View
          style={{
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <CustomButton
            onPress={() =>
              navigation.push('EditProfile', {
                name: name,
                accountName: accountName,
                profileImage: profileImage,
              })
            }
            text="Edit Profile"
            // bgColor="#827885"
            //  fgColor="white"
            type="PROFILE"
          />

          <CustomButton
            onPress={onSendVotes}
            text="Votes"
            //fgColor="white"
            //bgColor="#827397"
            type="PROFILE"
          />

          <CustomButton
            onPress={onSendAskedQuestion}
            text="Asked Question"
            //  bgColor="#4D4C7D"
            // fgColor="white"
            type="PROFILE"
          />

          <CustomButton
            onPress={onSendMyPosts}
            text="My Posts"
            // bgColor="#363062"
            //fgColor="white"
            type="PROFILE"
          />
          <CustomButton
            onPress={() => navigation.push('Login')}
            text="Çıkış Yap"
            //bgColor="#393050"
            //fgColor="white"
            type="PROFILE"
          />
        </View>
      ) : (
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
          }}>
          {console.log(43)}
          <TouchableOpacity
            onPress={() => setFollow(!follow)}
            style={{ width: '42%' }}>
            <View
              style={{
                width: '100%',
                height: 35,
                borderRadius: 5,
                backgroundColor: follow ? null : '#3493D9',
                borderWidth: follow ? 1 : 0,
                borderColor: '#DEDEDE',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{ color: follow ? 'black' : 'white' }}>
                {follow ? 'Following' : 'Follow'}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      )}
    </>
  );
};

/*
    <View style={{alignItems: 'center'}}>
          <Text style={{fontWeight: 'bold', fontSize: 18}}>{post}</Text>
          <Text>Posts</Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <Text style={{fontWeight: 'bold', fontSize: 18}}>{followers}</Text>
          <Text>Followers</Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <Text style={{fontWeight: 'bold', fontSize: 18}}>{following}</Text>
          <Text>Following</Text>
        </View>

*/
