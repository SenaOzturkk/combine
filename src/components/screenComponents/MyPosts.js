import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import baseURL from '../baseURL';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import Ionic from 'react-native-vector-icons/Ionicons';

const MyPosts = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  const [postInfos, setPostInfos] = useState({});
  const [user, setUser] = useState(null);

  const setPost = data => {
    if (data.mediaCount === 1) {
      return (
        <TouchableOpacity style={{width: '100%', height: 400}}>
          <Image
            source={{uri: data.medias[0]}}
            style={{width: '100%', height: 400}}
            resizeMode="contain"
          />
        </TouchableOpacity>
      );
    } else if (data.mediaCount === 2) {
      return (
        <>
          <TouchableOpacity style={{width: 200, height: 400}}>
            <Image
              source={{uri: data.medias[0]}}
              resizeMode="contain"
              style={{width: 200, height: 400}}
            />
          </TouchableOpacity>

          <TouchableOpacity style={{width: 200, height: 400}}>
            <Image
              source={{uri: data.medias[1]}}
              resizeMode="contain"
              style={{width: 200, height: 400}}
            />
          </TouchableOpacity>
        </>
      );
    } else if (data.mediaCount === 3) {
      return (
        <>
          <View style={{flexDirection: 'row'}}>
            <View style={{flexDirection: 'column'}}>
              <TouchableOpacity
                style={{
                  flex: 1,
                  width: 200,
                  height: 200,
                }}>
                <Image
                  style={{
                    flex: 1,
                    width: 200,
                    height: 200,
                  }}
                  source={{uri: data.medias[0]}}
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  flex: 1,
                  width: 200,
                  height: 200,
                }}>
                <Image
                  style={{
                    flex: 1,
                    width: 200,
                    height: 200,
                  }}
                  source={{uri: data.medias[1]}}
                />
              </TouchableOpacity>
            </View>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  width: 200,
                  height: 400,
                }}>
                <Image
                  style={{
                    flexDirection: 'row',
                    width: 200,
                    height: 400,
                  }}
                  source={{uri: data.medias[2]}}
                />
              </TouchableOpacity>
            </View>
          </View>
        </>
      );
    } else if (data.mediaCount === 4) {
      return (
        <>
          <View style={{flexDirection: 'row'}}>
            <View style={{flexDirection: 'column'}}>
              <TouchableOpacity
                style={{
                  flex: 1,
                  width: 200,
                  height: 200,
                }}>
                <Image
                  style={{
                    flex: 1,
                    width: 200,
                    height: 200,
                  }}
                  source={{uri: data.medias[0]}}
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  flex: 1,
                  width: 200,
                  height: 200,
                }}>
                <Image
                  style={{
                    flex: 1,
                    width: 200,
                    height: 200,
                  }}
                  source={{uri: data.medias[1]}}
                />
              </TouchableOpacity>
            </View>
            <View style={{flexDirection: 'row'}}>
              <View style={{flexDirection: 'column'}}>
                <TouchableOpacity
                  style={{
                    flex: 1,
                    width: 200,
                    height: 200,
                  }}>
                  <Image
                    style={{
                      flex: 1,
                      width: 200,
                      height: 200,
                    }}
                    source={{uri: data.medias[2]}}
                  />
                </TouchableOpacity>

                <TouchableOpacity
                  style={{
                    flex: 1,
                    width: 200,
                    height: 200,
                  }}>
                  <Image
                    style={{
                      flex: 1,
                      width: 200,
                      height: 200,
                    }}
                    source={{uri: data.medias[3]}}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </>
      );
    }
  };

  useEffect(() => {
    fetchData();
  }, [user]);

  useEffect(() => {
    isUserLoggedIn();
  }, []);

  const fetchData = _id => {
    if (user != null) {
      var myHeaders = new Headers();
      myHeaders.append('uid', user);

      var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow',
      };

      fetch(baseURL + 'post', requestOptions)
        .then(function (response) {
          return response.json();
        })
        .then(function (json) {
          setPostInfos(json);
          setLoading(false);
        })
        .catch(function (error) {
          console.log(
            'There has been a problem with your fetch operation: ' +
              error.message,
          );
          throw error;
        });
    }
  };

  const isUserLoggedIn = async () => {
    const a = await AsyncStorage.getItem('USER');
    setUser(a);
  };

  return (
    <SafeAreaView
      style={{width: '100%', height: '100%', backgroundColor: 'white'}}>
      <View style={{width: '100%', padding: 10}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: 10,
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
                fontSize: 40,
              }}
            />
            <Text>Geri Dön</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.push('Login')}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: 10,
            }}>
            <Text>Çıkış Yap</Text>
            <Ionic
              name="log-out"
              style={{
                fontSize: 40,
              }}
            />
          </TouchableOpacity>
        </View>

        {loading ? (
          <></>
        ) : (
          <>
            <ScrollView>
              {postInfos.map((data, index) => {
                return (
                  <View
                    key={index}
                    style={{
                      paddingBottom: 10,
                      borderBWidottomColor: 'gray',
                      borderWidth: 0.2,
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: 15,
                      }}>
                      <View
                        style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Image
                          source={{uri: data.userPicture[0]}}
                          style={{width: 40, height: 40, borderRadius: 100}}
                        />
                        <View style={{paddingLeft: 5}}>
                          <Text style={{fontSize: 15, fontWeight: 'bold'}}>
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
                      {data.description ? (
                        <Text
                          style={{
                            fontSize: 15,
                          }}>
                          {data.description}
                        </Text>
                      ) : (
                        <Text></Text>
                      )}
                    </View>
                    <View
                      style={{
                        position: 'relative',
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: 'left',
                      }}>
                      <View
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                        }}>
                        {setPost(data)}
                      </View>
                    </View>
                  </View>
                );
              })}
            </ScrollView>
          </>
        )}
      </View>
    </SafeAreaView>
  );
};

export default MyPosts;
