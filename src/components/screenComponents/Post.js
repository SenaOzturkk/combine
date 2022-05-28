import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
//import {AntDesign} from '@ant-design/icons';
import Ionic from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';

const Post = ({ postInfo }) => {
  const postInfos = [
    {
      postType: 3,
      postTitle: 'mr shermon',
      postPersonImage: require('../../storage/images/userProfile.png'),
      postImage0: require('../../storage/images/post2.jpg'),
      postImage1: require('../../storage/images/post3.jpg'),
      postImage2: require('../../storage/images/post4.jpg'),
      LeftVoteCount: 60,
      RightVoteCount: 40,
      isPressedLeft: false,
      isPressedRight: false,
      question:
        'Telefon alacağım İphone 12 pro max hangi renk alsam kararsız kaldım. ',
    },
    {
      postType: 2,
      postTitle: 'deneme',
      postPersonImage: require('../../storage/images/userProfile.png'),
      postImage0: require('../../storage/images/post2.jpg'),
      postImage1: require('../../storage/images/post3.jpg'),
      LeftVoteCount: 60,
      RightVoteCount: 40,
      isPressedLeft: false,
      isPressedRight: false,
      question:
        'Telefon alacağım İphone 12 pro max hangi renk alsam kararsız kaldım. ',
    },
    {
      postType: 1,
      postTitle: 'chillhouse',
      postPersonImage: require('../../storage/images/profile4.jpg'),
      postImage0: require('../../storage/images/post2.jpg'),
      LeftVoteCount: 30,
      RightVoteCount: 70,
      isPressedLeft: false,
      isPressedRight: false,
      question:
        'Arkadşaıma doğum günü hediyesi olarak alacağım renk konusunda kararsız kaldım',
    },
    {
      postType: 1,
      postTitle: 'Tomss',
      postPersonImage: require('../../storage/images/profile4.jpg'),
      postImage0: require('../../storage/images/post3.jpg'),
      LeftVoteCount: 50,
      RightVoteCount: 50,
      isPressedLeft: false,
      isPressedRight: false,
      question: 'Akşam dışarı çıkacağım hangi kolye daha şık?',
    },
    {
      postType: 2,
      postTitle: 'The_Groot',
      postPersonImage: require('../../storage/images/profile3.jpg'),
      postImage0: require('../../storage/images/post4.jpg'),
      postImage1: require('../../storage/images/post5.jpg'),
      LeftVoteCount: 20,
      RightVoteCount: 80,
      isPressedLeft: false,
      isPressedRight: false,
    },
  ];
  const setPost = data => {
    if (data.mediaCount === 1) {
      return (
        <Image source={{ uri: data.medias[0] }} style={{ width: '100%', height: 400 }} />
      );
    } else if (data.mediaCount === 2) {
      return (
        <>
          <Image
            source={{ uri: data.medias[0] }}
            style={{ width: '100%', height: 400 }}
          />
          <Image
            source={{ uri: data.medias[1] }}
            style={{ width: '100%', height: 400 }}
          />
        </>
      );
    } else if (data.mediaCount === 3) {
      return (
        <>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ flexDirection: 'column' }}>
              <Image
                style={{
                  flex: 1,
                  width: 200,
                  height: 200,
                }}
                source={{ uri: data.medias[0] }}
              />
              <Image
                style={{
                  flex: 1,
                  width: 200,
                  height: 200,
                }}
                source={{ uri: data.medias[1] }}
              />
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Image
                style={{
                  flexDirection: 'row',
                  width: 200,
                  height: 400,
                  backgroundColor: 'yellow',
                }}
                source={{ uri: data.medias[2] }}
              />
            </View>
          </View>
        </>
      );
    } else if (data.mediaCount === 4) {
      return (
        <>
          <Image
            source={{ uri: data.medias[0] }}
            style={{ width: '100%', height: 400 }}
          />
          <Image
            source={{ uri: data.medias[1] }}
            style={{ width: '100%', height: 400 }}
          />
          <Image
            source={{ uri: data.medias[2] }}
            style={{ width: '100%', height: 400 }}
          />
          <Image
            source={{ uri: data.medias[3] }}
            style={{ width: '100%', height: 400 }}
          />
        </>
      );
    } else {
      return (
        <Image source={data.postImage0} style={{ width: '100%', height: 400 }} />
      );
    }
  };

  return (
    <View>
      {postInfo.map((data, index) => {
        const [percentLeft, setPercentLeft] = useState(data.isPressedLeft);
        const [percentRight, setPercentRight] = useState(data.isPressedRight);
        const [question, setQuestion] = useState(data.description);
        const [postType, setPostType] = useState(data.mediaCount);

        return (
          <View
            key={index}
            style={{
              paddingBottom: 10,
              borderBottomColor: 'gray',
              borderBottomWidth: 0.1,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: 15,
              }}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image
                  source={{ uri: data.userPicture[0] }}
                  style={{ width: 40, height: 40, borderRadius: 100 }}
                />
                <View style={{ paddingLeft: 5 }}>
                  <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
                    {data.userdetails[0].username}
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                position: 'relative',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'left',
                marginTop: -10,
              }}>
              {question ? (
                <Text
                  style={{
                    fontSize: 15,
                  }}>
                  {data.description}
                </Text>
              ) : (
                <Text></Text>
              )}
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                {setPost(data)}
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                paddingHorizontal: 12,
                paddingVertical: 15,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  borderWidth: 2,
                  width: 300,
                  height: 50,
                  borderRadius: 10,
                  borderColor: 'black',
                  justifyContent: 'space-between',
                }}>
                <TouchableOpacity onPress={() => setPercentLeft(!percentLeft)}>
                  <Ionic
                    name={
                      percentLeft
                        ? 'ios-arrow-back-circle'
                        : 'ios-arrow-back-circle-outline'
                    }
                    style={{
                      fontSize: 40,
                      paddingLeft: 10,
                      color: 'black',
                    }}
                  />
                </TouchableOpacity>
                <FontAwesome
                  name="percent"
                  style={{
                    fontSize: 40,
                    color: 'black',
                  }}></FontAwesome>
                <TouchableOpacity
                  onPress={() => setPercentRight(!percentRight)}>
                  <Ionic
                    name={
                      percentRight
                        ? 'ios-arrow-forward-circle'
                        : 'ios-arrow-forward-circle-outline'
                    }
                    style={{
                      fontSize: 40,
                      paddingLeft: 10,
                      color: 'black',
                    }}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={{ paddingHorizontal: 15 }}>
              <Text>
                {percentLeft ? (
                  <>
                    {' '}
                    <Text>
                      left:{' '}
                      {((data.LeftVoteCount + 1) /
                        (data.LeftVoteCount + data.RightVoteCount + 1)) *
                        100}
                    </Text>
                    <Text>
                      right:{' '}
                      {100 -
                        ((data.LeftVoteCount + 1) /
                          (data.LeftVoteCount + data.RightVoteCount + 1)) *
                        100}
                    </Text>
                  </>
                ) : (
                  ''
                )}

                {percentRight ? (
                  <>
                    {' '}
                    <Text>
                      left:{' '}
                      {100 -
                        ((data.RightVoteCount + 1) /
                          (data.LeftVoteCount + data.RightVoteCount + 1)) *
                        100}
                    </Text>
                    <Text>
                      right:{' '}
                      {((data.RightVoteCount + 1) /
                        (data.LeftVoteCount + data.RightVoteCount + 1)) *
                        100}
                    </Text>
                  </>
                ) : (
                  ''
                )}
              </Text>
              <Text style={{ opacity: 0.4, paddingVertical: 2 }}>
                View all comments
              </Text>
              <View
                style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Image
                    source={{ uri: data.userPicture[0] }}
                    style={{
                      width: 25,
                      height: 25,
                      borderRadius: 100,
                      backgroundColor: 'orange',
                      marginRight: 10,
                    }}
                  />
                  <TextInput
                    placeholder="Add a comment "
                    style={{ opacity: 0.5 }}
                  />
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Entypo
                    name="emoji-happy"
                    style={{ fontSize: 15, color: 'lightgreen', marginRight: 10 }}
                  />
                  <Entypo
                    name="emoji-neutral"
                    style={{ fontSize: 15, color: 'pink', marginRight: 10 }}
                  />
                  <Entypo
                    name="emoji-sad"
                    style={{ fontSize: 15, color: 'red' }}
                  />
                </View>
              </View>
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default Post;

/*
 <TouchableOpacity onPress={() => setLike(!like)}>
                  <Ionic
                    name={like ? 'ios-heart' : 'ios-heart-outline'}
                    style={{
                      fontSize: 20,
                      paddingRight: 10,
                      color: like ? 'red' : 'black',
                    }}
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Ionic
                    name="ios-chatbubble-outline"
                    style={{fontSize: 20, paddingRight: 10}}
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Ionic name="ios-navigate-outline" style={{fontSize: 20}} />
                </TouchableOpacity>
*/
