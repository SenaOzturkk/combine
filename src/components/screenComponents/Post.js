import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StatusBar,
  Dimensions,
  ScrollView,
} from 'react-native';
import Ionic from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import DropdownComponent from '../screenComponents/DropdownComponent';
import baseURL from '../baseURL';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import CustomButton from './CustomButton';

const Post = ({postInfo}) => {
  const windowWidth = Dimensions.get('window').width;
  const windoeHeight = Dimensions.get('window').height;
  const [image, setImage] = useState(null);
  const [ppimage, setPpImage] = useState(null);
  const [username, setUsername] = useState(null);
  let [indexPost, setIndexPost] = useState(null);

  const [dictionary, setDictionary] = useState([]);
  const navigation = useNavigation();

  const sendVote = async (postId, uid, postIndex) => {
    var data = {
      uid: uid,
      postIndex: postIndex,
      postId: postId,
    };

    var config = {
      method: 'post',
      url: baseURL + 'post/vote',
      headers: {},
      data: data,
    };
    axios(config)
      .then(function (response) {
        console.log(response.data);
        console.log(response.data.votes);
        var sumVotes = 0;
        var countVotes = 0;
        for (var i in response.data.votes) {
          sumVotes += response.data.votes[i];
          countVotes += 1;
        }

        let calculatePercent = 0;
        if (countVotes == 1) {
          calculatePercent = (response.data.votes[0] / sumVotes) * 100;
        } else if (countVotes == 2) {
          if (postIndex == 0) {
            calculatePercent = (response.data.votes[0] / sumVotes) * 100;
          } else {
            calculatePercent = (response.data.votes[1] / sumVotes) * 100;
          }
        } else if (countVotes == 3) {
          if (postIndex == 0) {
            calculatePercent = (response.data.votes[0] / sumVotes) * 100;
          } else if (postIndex == 1) {
            calculatePercent = (response.data.votes[1] / sumVotes) * 100;
          } else {
            calculatePercent = (response.data.votes[2] / sumVotes) * 100;
          }
        } else if (countVotes == 4) {
          if (postIndex == 0) {
            calculatePercent = (response.data.votes[0] / sumVotes) * 100;
          } else if (postIndex == 1) {
            calculatePercent = (response.data.votes[1] / sumVotes) * 100;
          } else if (postIndex == 2) {
            calculatePercent = (response.data.votes[2] / sumVotes) * 100;
          } else {
            calculatePercent = (response.data.votes[3] / sumVotes) * 100;
          }
        }

        console.log('calculatePercent' + calculatePercent.toFixed(2));
        console.log('postIndex' + postIndex);
        let idz = response.data._id;
        dictionary[(idz, postIndex)] = calculatePercent.toFixed(2);
        setDictionary(dictionary);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const categoryAyakkabi = [
    {label: 'Markası', value: 'Markası'},
    {label: 'Ayakkabı Numarası', value: 'Ayakkabı Numarası'},
    {label: 'Rengi', value: 'Rengi'},
    {label: 'Ürünün Kodu', value: 'Ürünün Kodu'},
    {label: 'Fiyatı', value: 'Fiyatı'},
    {label: 'Linki', value: 'Link'},
  ];
  const categoryGiyim = [
    {label: 'Markası', value: 'Markası'},
    {label: 'Bedeni', value: 'Bedeni'},
    {label: 'Rengi', value: 'Rengi'},
    {label: 'Ürünün Kodu', value: 'Ürünün Kodu'},
    {label: 'Fiyatı', value: 'Fiyatı'},
    {label: 'Linki', value: 'Link'},
  ];

  const categoryAksesuar = [
    {label: 'Markası', value: 'Markası'},
    {label: 'Model', value: 'Model'},
    {label: 'Özellikleri', value: 'Özellikleri'},
    {label: 'Rengi', value: 'Rengi'},
    {label: 'Ürünün Kodu', value: 'Ürünün Kodu'},
    {label: 'Fiyatı', value: 'Fiyatı'},
    {label: 'Linki', value: 'Link'},
  ];
  const categoryKombin = [
    {label: 'Markası', value: 'Markası'},
    {label: 'Model', value: 'Model'},
    {label: 'Fiyatı', value: 'Fiyatı'},
    {label: 'Linki', value: 'Link'},
  ];
  const categoryHediye = [
    {label: 'Markası', value: 'Markası'},
    {label: 'Model', value: 'Model'},
    {label: 'Özellikleri', value: 'Özellikleri'},
    {label: 'Ürünün Kodu', value: 'Ürünün Kodu'},
    {label: 'Fiyatı', value: 'Fiyatı'},
    {label: 'Linki', value: 'Link'},
  ];
  const categoryTatil = [
    {label: 'Ülke/Şehir', value: 'Şehir'},
    {label: 'Otel Adı', value: 'Otel'},
    {label: 'İmkanlar', value: 'İmkanlar'},
    {label: 'Gecelik Fiyatı', value: 'Gecelik Fiyatı'},
    {label: 'Linki', value: 'Link'},
  ];
  const categoryVasita = [
    {label: 'Markası', value: 'Markası'},
    {label: 'Model', value: 'Model'},
    {label: 'Rengi', value: 'Rengi'},
    {label: 'Km', value: 'Km'},
    {label: 'Yıl', value: 'Yıl'},
    {label: 'Yakıt Türü', value: 'Yakıt Türü'},
    {label: 'Fiyatı', value: 'Fiyatı'},
    {label: 'Linki', value: 'Link'},
  ];
  const categoryTeknoloji = [
    {label: 'Markası', value: 'Markası'},
    {label: 'Model', value: 'Model'},
    {label: 'Özellikleri', value: 'Özellikleri'},
    {label: 'Rengi', value: 'Rengi'},
    {label: 'Ürünün Kodu', value: 'Ürünün Kodu'},
    {label: 'Fiyatı', value: 'Fiyatı'},
    {label: 'Linki', value: 'Link'},
  ];
  const categoryEv = [
    {label: 'Markası', value: 'Markası'},
    {label: 'Rengi', value: 'Rengi'},
    {label: 'Özellikleri', value: 'Özellikleri'},
    {label: 'Ürünün Kodu', value: 'Ürünün Kodu'},
    {label: 'Fiyatı', value: 'Fiyatı'},
    {label: 'Linki', value: 'Link'},
  ];

  const onPressActivity = async (data, index) => {
    setIndexPost(index);
    const uid = await AsyncStorage.getItem('USER');

    console.log('indexPost' + indexPost);
    await sendVote(data._id, uid, index);
  };
  const onPressOutActivity = data => {
    //console.warn(' press out');
    setImage(null);
    setPpImage(null);
    setUsername('null');
  };
  const onLongPressActivity = (data, pp, username) => {
    //console.warn('long press');
    setImage(data);
    setPpImage(pp);
    setUsername(username);
  };

  const setPost = data => {
    if (data.mediaCount === 1) {
      return (
        <TouchableOpacity
          onPress={() => onPressActivity(data, 0)}
          onPressOut={() => onPressOutActivity(data)}
          onLongPress={() => {
            onLongPressActivity(
              data.medias[0],
              data.userPicture[0],
              data.userdetails[0].username,
            );
          }}
          style={{width: '100%', height: 400}}>
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
          <TouchableOpacity
            style={{width: 200, height: 400}}
            onPress={() => onPressActivity(data, 0)}
            onLongPress={() => {
              onLongPressActivity(
                data.medias[0],
                data.userPicture[0],
                data.userdetails[0].username,
              );
            }}
            onPressOut={() => onPressOutActivity(data)}>
            <Image
              source={{uri: data.medias[0]}}
              resizeMode="contain"
              style={{width: 200, height: 400}}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={{width: 200, height: 400}}
            onPress={() => onPressActivity(data, 1)}
            onPressOut={() => onPressOutActivity(data)}
            onLongPress={() => {
              onLongPressActivity(
                data.medias[1],
                data.userPicture[0],
                data.userdetails[0].username,
              );
            }}>
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
                }}
                onPress={() => onPressActivity(data, 0)}
                onPressOut={() => onPressOutActivity(data)}
                onLongPress={() => {
                  onLongPressActivity(
                    data.medias[0],
                    data.userPicture[0],
                    data.userdetails[0].username,
                  );
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
                }}
                onPressOut={() => onPressOutActivity(data)}
                onPress={() => onPressActivity(data, 1)}
                onLongPress={() => {
                  onLongPressActivity(
                    data.medias[1],
                    data.userPicture[0],
                    data.userdetails[0].username,
                  );
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
                }}
                onPressOut={() => onPressOutActivity(data)}
                onPress={() => onPressActivity(data, 2)}
                onLongPress={() => {
                  onLongPressActivity(
                    data.medias[2],
                    data.userPicture[0],
                    data.userdetails[0].username,
                  );
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
                }}
                onPress={() => onPressActivity(data, 0)}
                onPressOut={() => onPressOutActivity(data)}
                onLongPress={() => {
                  onLongPressActivity(
                    data.medias[0],
                    data.userPicture[0],
                    data.userdetails[0].username,
                  );
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
                }}
                onPressOut={() => onPressOutActivity(data)}
                onPress={() => onPressActivity(data, 1)}
                onLongPress={() => {
                  onLongPressActivity(
                    data.medias[1],
                    data.userPicture[0],
                    data.userdetails[0].username,
                  );
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
                  }}
                  onPress={() => onPressActivity(data, 2)}
                  onPressOut={() => onPressOutActivity(data)}
                  onLongPress={() => {
                    onLongPressActivity(
                      data.medias[2],
                      data.userPicture[0],
                      data.userdetails[0].username,
                    );
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
                  }}
                  onPressOut={() => onPressOutActivity(data)}
                  onPress={() => onPressActivity(data, 3)}
                  onLongPress={() => {
                    onLongPressActivity(
                      data.medias[3],
                      data.userPicture[0],
                      data.userdetails[0].username,
                    );
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

  return (
    <>
      <ScrollView>
        {postInfo.map((data, index) => {
          const [description, setQuestion] = useState(data.description);
          const [category, setCategory] = useState(data.category);
          const [mediaCount, setMediaCount] = useState(data.mediaCount);
          const [dataID, setDataID] = useState(data._id);

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
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
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
                {dataID === data._id ? (
                  <Text
                    style={{
                      color: 'black',
                      borderWidth: 2,
                      borderColor: 'gray',
                      padding: 10,
                      borderRadius: 20,
                      marginBottom: 30,
                      fontSize: 20,
                    }}>
                    % {dictionary[(data._id, indexPost)]}
                  </Text>
                ) : null}
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  flex: 1,
                }}>
                <View>
                  {category === 'Aksesuar' ? (
                    <DropdownComponent
                      text="Sorunuzu Seçin"
                      icon="ios-help-circle"
                      data={categoryAksesuar}
                      style={{
                        fontSize: 32,
                      }}
                    />
                  ) : category === 'Teknoloji' ? (
                    <DropdownComponent
                      text="Sorunuzu Seçin"
                      icon="ios-help-circle"
                      data={categoryTeknoloji}
                      style={{
                        fontSize: 32,
                      }}
                    />
                  ) : category === 'Ayakkabı' ? (
                    <DropdownComponent
                      text="Sorunuzu Seçin"
                      icon="ios-help-circle"
                      data={categoryAyakkabi}
                      style={{
                        fontSize: 32,
                      }}
                    />
                  ) : category === 'Kombin' ? (
                    <DropdownComponent
                      text="Sorunuzu Seçin"
                      icon="ios-help-circle"
                      data={categoryKombin}
                      style={{
                        fontSize: 32,
                      }}
                    />
                  ) : category === 'Hediye' ? (
                    <DropdownComponent
                      text="Sorunuzu Seçin"
                      icon="ios-help-circle"
                      data={categoryHediye}
                      style={{
                        fontSize: 32,
                      }}
                    />
                  ) : category === 'Tatil' ? (
                    <DropdownComponent
                      text="Sorunuzu Seçin"
                      icon="ios-help-circle"
                      data={categoryTatil}
                      style={{
                        fontSize: 32,
                      }}
                    />
                  ) : category === 'Ev' ? (
                    <DropdownComponent
                      text="Sorunuzu Seçin"
                      icon="ios-help-circle"
                      data={categoryEv}
                      style={{
                        fontSize: 32,
                      }}
                    />
                  ) : category === 'Giyim' ? (
                    <DropdownComponent
                      text="Sorunuzu Seçin"
                      icon="ios-help-circle"
                      data={categoryGiyim}
                      style={{
                        fontSize: 32,
                      }}
                    />
                  ) : category === 'Vasıta' ? (
                    <DropdownComponent
                      text="Sorunuzu Seçin"
                      icon="ios-help-circle"
                      data={categoryVasita}
                      style={{
                        fontSize: 32,
                      }}
                    />
                  ) : null}
                </View>
                <View style={{marginTop: 15}}>
                  <CustomButton
                    text="Sor"
                    bgColor="black"
                    fgColor="white"
                    type="QUESTION"></CustomButton>
                </View>
                <View style={{marginTop: 30, marginLeft: 5}}>
                  <Ionic name="ios-ellipsis-vertical" style={{fontSize: 30}} />
                </View>
              </View>
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
                source={{uri: ppimage}}
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 100,
                }}
              />
              <View style={{paddingLeft: 8}}>
                <Text style={{fontSize: 12, fontWeight: '600'}}>
                  {username}
                </Text>
              </View>
            </View>
            <Image
              source={{uri: image}}
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
               
                <FontAwesome
                  name="percent"
                  style={{
                    fontSize: 40,
                    color: 'black',
                  }}></FontAwesome>
              
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
