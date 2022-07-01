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
import ChoiceLogo from '../../storage/images/choiceLogo.png';

const Post = ({postInfo, isCategory, categoryLoading}) => {
  const windowWidth = Dimensions.get('window').width;
  const windoeHeight = Dimensions.get('window').height;
  const [image, setImage] = useState(null);
  const [ppimage, setPpImage] = useState(null);
  const [username, setUsername] = useState(null);

  const [postMarka, setPostMarka] = useState(null);
  const [postBeden, setBeden] = useState(null);
  const [postLink, setLink] = useState(null);
  const [postAciklama, setAciklama] = useState(null);
  let [indexPost, setIndexPost] = useState(null);

  const [dictionary, setDictionary] = useState({});
  const navigation = useNavigation();

  const getBackButton = () => {
    categoryLoading(true);
  };

  const sendVote = async (postId, uid, postIndex, dictionary) => {
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
        var sumVotes = 0;
        for (var i in response.data.votes) {
          sumVotes += response.data.votes[i];
        }

        let calculatePercent = 0;
        if (response.data.mediaCount == 1) {
          calculatePercent = (response.data.votes[0] / sumVotes) * 100;
        } else if (response.data.mediaCount == 2) {
          if (postIndex == 0) {
            calculatePercent = (response.data.votes[0] / sumVotes) * 100;
          } else {
            calculatePercent = (response.data.votes[1] / sumVotes) * 100;
          }
        } else if (response.data.mediaCount == 3) {
          if (postIndex == 0) {
            calculatePercent = (response.data.votes[0] / sumVotes) * 100;
          } else if (postIndex == 1) {
            calculatePercent = (response.data.votes[1] / sumVotes) * 100;
          } else {
            calculatePercent = (response.data.votes[2] / sumVotes) * 100;
          }
        } else if (response.data.mediaCount == 4) {
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
        if (dictionary[response.data._id] == undefined) {
          dictionary[response.data._id] = {
            [postIndex]: calculatePercent.toFixed(2),
          };
        } else {
          var a = dictionary[response.data._id];
          a[postIndex] = calculatePercent.toFixed(2);
          dictionary[response.data._id] = a;
        }

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

  const onPressActivity = async (data, index, dictionary) => {
    setIndexPost(index);
    const uid = await AsyncStorage.getItem('USER');
    await sendVote(data._id, uid, index, dictionary);
  };
  const onPressOutActivity = data => {
    setImage(null);
    setPpImage(null);
    setUsername('null');
  };
  const onLongPressActivity = (data, pp, username, detail) => {
    setImage(data);
    setPpImage(pp);
    setUsername(username);
    setPostMarka(detail[0]);
    setBeden(detail[1]);
    setLink(detail[2]);
    setAciklama(detail[3]);
  };
  const onActivityPressed = () => {
    console.warn('activity');
    navigation.navigate('Activity');
  };

  const setPost = (data, dictionary) => {
    if (data.mediaCount === 1) {
      return (
        <TouchableOpacity
          onPress={() => onPressActivity(data, 0, dictionary)}
          onPressOut={() => onPressOutActivity(data)}
          onLongPress={() => {
            onLongPressActivity(
              data.medias[0],
              data.userPicture[0],
              data.userdetails[0].username,
              data.detail,
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
            onPress={() => onPressActivity(data, 0, dictionary)}
            onLongPress={() => {
              onLongPressActivity(
                data.medias[0],
                data.userPicture[0],
                data.userdetails[0].username,
                data.detail,
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
            onPress={() => onPressActivity(data, 1, dictionary)}
            onPressOut={() => onPressOutActivity(data)}
            onLongPress={() => {
              onLongPressActivity(
                data.medias[1],
                data.userPicture[0],
                data.userdetails[0].username,
                data.detail,
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
                onPress={() => onPressActivity(data, 0, dictionary)}
                onPressOut={() => onPressOutActivity(data)}
                onLongPress={() => {
                  onLongPressActivity(
                    data.medias[0],
                    data.userPicture[0],
                    data.userdetails[0].username,
                    data.detail,
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
                onPress={() => onPressActivity(data, 1, dictionary)}
                onLongPress={() => {
                  onLongPressActivity(
                    data.medias[1],
                    data.userPicture[0],
                    data.userdetails[0].username,
                    data.detail,
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
                onPress={() => onPressActivity(data, 2, dictionary)}
                onLongPress={() => {
                  onLongPressActivity(
                    data.medias[2],
                    data.userPicture[0],
                    data.userdetails[0].username,
                    data.detail,
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
                onPress={() => onPressActivity(data, 0, dictionary)}
                onPressOut={() => onPressOutActivity(data)}
                onLongPress={() => {
                  onLongPressActivity(
                    data.medias[0],
                    data.userPicture[0],
                    data.userdetails[0].username,
                    data.detail,
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
                onPress={() => onPressActivity(data, 1, dictionary)}
                onLongPress={() => {
                  onLongPressActivity(
                    data.medias[1],
                    data.userPicture[0],
                    data.userdetails[0].username,
                    data.detail,
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
                  onPress={() => onPressActivity(data, 2, dictionary)}
                  onPressOut={() => onPressOutActivity(data)}
                  onLongPress={() => {
                    onLongPressActivity(
                      data.medias[2],
                      data.userPicture[0],
                      data.userdetails[0].username,
                      data.detail,
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
                  onPress={() => onPressActivity(data, 3, dictionary)}
                  onLongPress={() => {
                    onLongPressActivity(
                      data.medias[3],
                      data.userPicture[0],
                      data.userdetails[0].username,
                      data.detail,
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
      {isCategory ? (
        <>
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              onPress={getBackButton}
              style={{
                justifyContent: 'space-between',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Ionic name="chevron-back" style={{fontSize: 35}} />
              <Text
                style={{
                  fontSize: 17,
                  fontWeight: '700',
                }}>
                KATEGORİLER
              </Text>
            </TouchableOpacity>
            <Image
              source={ChoiceLogo}
              style={{
                width: 150,
                height: 40,
              }}
              resizeMode="contain"
            />
          </View>
        </>
      ) : (
        <></>
      )}
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
                  {setPost(data, dictionary)}
                </View>
                {dataID === data._id ? (
                  <Text
                    style={{
                      color: 'black',
                      borderWidth: 2,
                      borderColor: 'gray',
                      padding: 10,
                      borderRadius: 20,
                      marginBottom: 5,
                      fontSize: 20,
                      marginTop: 10,
                    }}>
                    {dictionary[data._id] ? (
                      <Text>% {dictionary[data._id][indexPost]}</Text>
                    ) : (
                      <>
                        <View
                          style={{
                            justifyContent: 'space-between',
                            flexDirection: 'row',
                            alignItems: 'center',
                          }}>
                          <Ionic
                            name="md-arrow-up-circle"
                            style={{fontSize: 25}}
                          />
                          <Text
                            style={{
                              fontSize: 15,
                            }}>
                            Yüzdeleri görmek için seçtiğiniz fotoğrafa
                            tıklayınız
                          </Text>
                          <Ionic
                            name="md-arrow-up-circle"
                            style={{fontSize: 25}}
                          />
                        </View>
                      </>
                    )}
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
            <View
              style={{
                justifyContent: 'space-around',
                width: '100%',
                height: '90%',
                flexDirection: 'row',
                alignItems: 'center',
                padding: 8,
              }}>
              <Image
                source={{uri: image}}
                style={{
                  width: '50%',
                  height: '100%',
                  resizeMode: 'contain',
                }}
              />
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: '600',
                  width: '50%',
                  height: '100%',
                  marginLeft: 10,
                }}>
                <View
                  style={{
                    borderRadius: 5,
                    borderWidth: 1,
                    borderBottomth: 0,
                    backgroundColor: 'black',
                  }}>
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: '600',
                      color: 'white',
                    }}>
                    Markası:
                  </Text>
                </View>
                {'  ' + postMarka} {'\n'}
                <View
                  style={{
                    borderRadius: 5,
                    borderWidth: 1,
                    borderBottomth: 0,
                    backgroundColor: 'black',
                    marginTop: 50,
                  }}>
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: '600',
                      color: 'white',
                    }}>
                    Bedeni/Özellikleri:
                  </Text>
                </View>
                {'  ' + postBeden} {'\n'}
                <View
                  style={{
                    borderRadius: 5,
                    borderWidth: 1,
                    borderBottomth: 0,
                    backgroundColor: 'black',
                  }}>
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: '600',
                      color: 'white',
                    }}>
                    Linki:
                  </Text>
                </View>
                {'  ' + postLink} {'\n'}
                <View
                  style={{
                    borderRadius: 5,
                    borderWidth: 1,
                    borderBottomth: 0,
                    backgroundColor: 'black',
                  }}>
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: '600',
                      color: 'white',
                    }}>
                    Açıklama:
                  </Text>
                </View>
                {'  ' + postAciklama} {'\n'}
              </Text>
            </View>
          </View>
        </View>
      ) : null}
    </>
  );
};

export default Post;
