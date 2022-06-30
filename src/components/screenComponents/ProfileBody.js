import React, {useState} from 'react';
import {View, Text, Image, SafeAreaView} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
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
    <SafeAreaView>
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
              flexDirection: 'column',
              alignItems: 'center',
              marginLeft: 100,
              justifyContent: 'center',
              marginBottom: 10,
              marginTop: 30,
            }}>
            <Image
              source={{uri: profileImage}}
              style={{
                resizeMode: 'cover',
                width: 150,
                height: 150,
                borderRadius: 100,
              }}
            />
            <Text
              style={{
                paddingVertical: 5,
                fontWeight: 'bold',
                marginLeft: 20,
                fontSize: 20,
                marginTop: 20,
              }}>
              {name}
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export const ProfileButtons = ({id, name, accountName, profileImage}) => {
  const navigation = useNavigation();
  const [myPosts, setMyPosts] = useState({});
  const [follow, setFollow] = useState(follow);

  const onSendAskedQuestion = () => {
    navigation.navigate('AskedQuestion');
  };

  const fetchData = () => {
    fetch(baseURL + 'post')
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        setMyPosts(json);
      })
      .catch(function (error) {
        console.log(
          'There has been a problem with your fetch operation: ' +
            error.message,
        );
        throw error;
      });
  };

  const getBack = () => {
    navigation.navigate('Profile');
  };

  const onSendMyPosts = () => {
    navigation.navigate('MyPosts');
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
            text="Profili Düzenle"
            type="PROFILE"
          />
          <CustomButton
            onPress={onSendAskedQuestion}
            text="Sorularım"
            type="PROFILE"
          />

          <CustomButton
            onPress={onSendMyPosts}
            text="Gönderilerim"
            type="PROFILE"
          />
          <CustomButton
            onPress={() => navigation.push('Login')}
            text="Çıkış Yap"
            type="PROFILE"
          />
        </View>
      ) : null}
    </>
  );
};
