import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StatusBar,
  Dimensions,
  ScrollView
} from 'react-native';
import Ionic from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const Post = ({ postInfo }) => {
  const windowWidth = Dimensions.get('window').width;
  const windoeHeight = Dimensions.get('window').height;
  const [image, setImage] = useState(null);
  const [ppimage, setPpImage] = useState(null);
  const [username, setUsername] = useState(null);
  const navigation = useNavigation();

  const askQuestion = () => {
    console.warn(' ask ques');
    navigation.navigate('Question');
  };
  const onPressActivity = data => {
    //console.warn(' press');
  };
  const onPressOutActivity = data => {

    //console.warn(' press out');
    setImage(null);
    setPpImage(null)
    setUsername('null')
  };
  const onLongPressActivity = (data, pp, username) => {
    //console.warn('long press');
    setImage(data);
    setPpImage(pp)
    setUsername(username)
  };

  const setPost = data => {
    if (data.mediaCount === 1) {
      return (
        <TouchableOpacity
          //onPress={() => onPressActivity(data)}
          onPressOut={() => onPressOutActivity(data)}
          onPressIn={() => {
            onLongPressActivity(data.medias[0], data.userPicture[0], data.userdetails[0].username);
          }}
          style={{ width: '100%', height: 400 }}>
          <Image
            source={{ uri: data.medias[0] }}
            style={{ width: '100%', height: 400 }}
            resizeMode="contain"
          />
        </TouchableOpacity>
      );
    } else if (data.mediaCount === 2) {
      return (
        <>
          <TouchableOpacity
            style={{ width: 200, height: 400 }}
            //onPress={() => onPressActivity(data)}
            onPressOut={() => onPressOutActivity(data)}
            onPressIn={() => {
              onLongPressActivity(data.medias[0], data.userPicture[0], data.userdetails[0].username);
            }}>
            <Image
              source={{ uri: data.medias[0] }}
              resizeMode="contain"
              style={{ width: 200, height: 400 }}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={{ width: 200, height: 400 }}
            //onPress={() => onPressActivity(data)}
            onPressOut={() => onPressOutActivity(data)}
            onPressIn={() => {
              onLongPressActivity(data.medias[1], data.userPicture[0], data.userdetails[0].username);
            }}>
            <Image
              source={{ uri: data.medias[1] }}
              resizeMode="contain"
              style={{ width: 200, height: 400 }}
            />
          </TouchableOpacity>
        </>
      );
    } else if (data.mediaCount === 3) {
      return (
        <>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ flexDirection: 'column' }}>
              <TouchableOpacity
                style={{
                  flex: 1,
                  width: 200,
                  height: 200,
                }}
                //onPress={() => onPressActivity(data)}
                onPressOut={() => onPressOutActivity(data)}
                onPressIn={() => {
                  onLongPressActivity(data.medias[0], data.userPicture[0], data.userdetails[0].username);
                }}>
                <Image
                  style={{
                    flex: 1,
                    width: 200,
                    height: 200,
                  }}
                  source={{ uri: data.medias[0] }}
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  flex: 1,
                  width: 200,
                  height: 200,
                }}
                onPressOut={() => onPressOutActivity(data)}
                // onPress={() => onPressActivity(data)}
                onPressIn={() => {
                  onLongPressActivity(data.medias[1], data.userPicture[0], data.userdetails[0].username);
                }}>
                <Image
                  style={{
                    flex: 1,
                    width: 200,
                    height: 200,
                  }}
                  source={{ uri: data.medias[1] }}
                />
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  width: 200,
                  height: 400,
                }}
                onPressOut={() => onPressOutActivity(data)}
                //onPress={() => onPressActivity(data)}
                onPressIn={() => {
                  onLongPressActivity(data.medias[2], data.userPicture[0], data.userdetails[0].username);
                }}>
                <Image
                  style={{
                    flexDirection: 'row',
                    width: 200,
                    height: 400,
                  }}
                  source={{ uri: data.medias[2] }}
                />
              </TouchableOpacity>
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
    }
  };

  return (
    <>
      <ScrollView>
        {postInfo.map((data, index) => {
          const [percentLeft, setPercentLeft] = useState(data.isPressedLeft);
          const [percentRight, setPercentRight] = useState(data.isPressedRight);
          const [description, setQuestion] = useState(data.description);
          const [mediaCount, setMediaCount] = useState(data.mediaCount);

          return (
            <View
              key={index}
              style={{
                paddingBottom: 10,
                borderBWidottomColor: 'gray',
                borderBottomth: 0.1,
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
                {description ? (
                  <Text
                    style={{
                      fontSize: 15,
                    }}>
                    {description}
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
              {/* <TouchableOpacity onPress={() => askQuestion()}>
              <Ionic
                name="ios-help-circle"
                style={{
                  fontSize: 30,
                  paddingRight: 10,
                }}
              />
            </TouchableOpacity> */}
            </View>
          );
        })}

      </ScrollView>
      {image ? (
        <View
          style={{
            position: 'absolute',
            zIndex: 15,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(52,52,52,0.8)',
          }}>
          <StatusBar backgroundColor="#525252" barStyle="dark-content" />
          <View
            style={{
              position: 'absolute',
              top: windoeHeight / 6,
              left: windowWidth / 18,
              backgroundColor: 'white',
              width: '90%',
              height: 465,
              borderRadius: 15,
              zIndex: 1,
              elevation: 50,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingVertical: 10,
                paddingHorizontal: 15,
              }}>
              <Image
                source={{ uri: ppimage }}
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 100,
                }}
              />
              <View style={{ paddingLeft: 8 }}>
                <Text style={{ fontSize: 12, fontWeight: '600' }}>
                  {username}
                </Text>
              </View>
            </View>
            <Image
              source={{ uri: image }}
              style={{ width: '100%', height: '80%' }}
            />
            <View
              style={{
                justifyContent: 'space-around',
                width: '100%',
                flexDirection: 'row',
                alignItems: 'center',
                padding: 8,
              }}>
              <Ionic name="ios-heart-outline" style={{ fontSize: 26 }} />
              <Ionic
                name="ios-person-circle-outline"
                style={{ fontSize: 26 }}
              />
            </View>
          </View>
        </View>
      ) : null}
    </>
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

/*
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

*/
/*
<View
        style={{
          position: 'absolute',
          zIndex: 1,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(52,52,52,0.8)',
        }}>
        <StatusBar backgroundColor="#525252" barStyle="dark-content" />
        <View
          style={{
            position: 'absolute',
            top: windoeHeight / 6,
            left: windowWidth / 18,
            backgroundColor: 'white',
            width: '90%',
            height: 465,
            borderRadius: 15,
            zIndex: 1,
            elevation: 50,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingVertical: 10,
              paddingHorizontal: 15,
            }}>
            <Image
              source={{uri: data.medias[0]}}
              resizeMode="contain"
              style={{width: 200, height: 400}}
            />
            <View style={{paddingLeft: 8}}>
              <Text style={{fontSize: 12, fontWeight: '600'}}>
                the_anonymous_guy
              </Text>
            </View>
          </View>
          <Image
            source={{uri: data.medias[0]}}
            style={{width: '100%', height: '80%'}}
          />
          <View
            style={{
              justifyContent: 'space-around',
              width: '100%',
              flexDirection: 'row',
              alignItems: 'center',
              padding: 8,
            }}>
            <Ionic name="ios-heart-outline" style={{fontSize: 26}} />
            <Ionic name="ios-person-circle-outline" style={{fontSize: 26}} />
          </View>
        </View>
      </View>

*/
