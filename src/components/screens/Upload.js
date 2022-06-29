import {
  View,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import DropdownComponent from '../screenComponents/DropdownComponent';
import CustomInput from '../screenComponents/CustomInput';
import CustomButton from '../screenComponents/CustomButton';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { launchImageLibrary } from 'react-native-image-picker';
import baseURL from '../baseURL';

const Upload = () => {
  const [images, setImages] = useState({});
  const [description, setDescription] = useState('');
  const [uid, setUid] = useState()
  const [category, setCategory] = useState('')
  const [detail0, setDetail0] = useState('');
  const [detail1, setDetail1] = useState('');
  const [detail2, setDetail2] = useState('');
  const [detail3, setDetail3] = useState('');

  const navigation = useNavigation();

  const dataCategory = [
    { label: 'Giyim', value: 'Giyim' },
    { label: 'Teknoloji', value: 'Teknoloji' },
    { label: 'Araba', value: 'Araba' },
    { label: 'Eşya', value: 'Eşya' },
    { label: 'Hediye', value: 'Hediye' },
    { label: 'Tatil', value: 'Tatil' },
  ];

  const getUserID = async () => {
    const a = await AsyncStorage.getItem('USER');
    setUid(a)
  }

  useEffect(() => {
    getUserID()
  }, []);


  const onDetailPressed = () => {
    navigation.push('PostDetail', {
      detail0,
      detail1,
      detail2,
      detail3,
      setDetail0,
      setDetail1,
      setDetail2,
      setDetail3
    });
  };

  const openImages = async () => {
    let options = {
      mediaType: 'photo',
      quality: 1,
      noData: true,
      selectionLimit: 0
    };
    const images = await launchImageLibrary(options);
    setImages(images)
  }

  const gonder = async (images) => {
    const formData = new FormData()
    formData.append('post', {
      uri: images.assets[0].uri,
      tpye: images.assets[0].type,
      name: images.assets[0].fileName
    })
    formData.append('post', {
      uri: images.assets[1].uri,
      tpye: images.assets[1].type,
      name: images.assets[1].fileName
    })
    let res = await fetch(
      "http://10.100.0.11:5000/api/post",
      {
        method: 'post',
        body: formData,
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
    )
    let resposeJson = await res.json()
    console.log(resposeJson)
  }

  const yazdir = () => {
    console.log(detail0, detail1, detail2, detail3)
  }


  return (
    <SafeAreaView
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        position: 'relative',
      }}>
      <ScrollView showVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <DropdownComponent
            text="Kategori"
            icon="ios-grid"
            data={dataCategory}
            setValueData={setCategory}
          />
          <View
            style={{
              backgroundColor: 'white',
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'center',
              width: '100%',
              maxHeight: 200,
            }}>
            <CustomButton
              text="Kamerayı Aç"
              onPress={openImages}
              bgColor="black"
              fgColor="white"
              type="SQUARE"
            />

            <CustomButton
              text="Galeriyi Aç"
              onPress={openImages}
              bgColor="black"
              fgColor="white"
              type="SQUARE"
            />
          </View>
          <View style={styles.bottomContainer}>
            <CustomInput
              placeholder="Soru Metni Giriniz"
              value={description}
              setValue={setDescription}
            />

            <CustomButton
              text="Ürünlere detay girmek için tıklayınız"
              onPress={onDetailPressed}
            />
            <CustomButton text="Gönder" onPress={gonder} />
            <CustomButton text="yazdir" onPress={yazdir} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: 700,
    alignItems: 'center',
    marginTop: 80,
  },
  bottomContainer: {
    backgroundColor: 'white',
    width: 510,
    alignItems: 'center',
  },
});

export default Upload;

/*import {View, Text} from 'react-native';
import React from 'react';

const Upload = () => {
  return (
    <View>
      <Text>Upload</Text>
    </View>
  );
};

export default Upload;

*/
