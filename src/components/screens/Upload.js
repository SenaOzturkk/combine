import {
  View,
  StyleSheet,
  ScrollView,
  Text,
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

  const gonder = async () => {
    const formData = new FormData()
    // formData.append('post', {
    //   uri: images.assets[0].uri,
    //   tpye: images.assets[0].type,
    //   name: images.assets[0].fileName
    // })
    // formData.append('post', {
    //   uri: images.assets[1].uri,
    //   tpye: images.assets[1].type,
    //   name: images.assets[1].fileName
    // })
    formData.append('detail0', detail0)
    formData.append('detail1', detail1)
    formData.append('detail2', detail2)
    formData.append('detail3', detail3)
    formData.append('category', category)
    formData.append('description', description)
    formData.append('uid', uid)
    let index = 0
    images.assets.forEach(element => {
      index += 1
      if (index < 5) {
        formData.append('post', {
          uri: element.uri,
          tpye: element.type,
          name: element.fileName
        })
      }
    });
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
    let responseJson = await res.json()
    console.log(responseJson)
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
              maxHeight: 135,
            }}>

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
            <Text
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                marginBottom: 20,
                marginTop: 50,
              }}>
              Ürünle İlgili Detayları Buraya Girebilirsiniz
            </Text>
            <View style={styles.bottomContainer}>
              <CustomInput
                placeholder="Marka giriniz"
                value={detail0}
                setValue={setDetail0}
              />
              <CustomInput
                placeholder="Beden giriniz"
                value={detail1}
                setValue={setDetail1}
              />
              <CustomInput
                placeholder="Link"
                value={detail2}
                setValue={setDetail2}
              />
              <CustomInput
                placeholder="Açıklama"
                value={detail3}
                setValue={setDetail3}
              />
            </View>
            {/* <CustomButton
              text="Ürünlere detay girmek için tıklayınız"
              onPress={onDetailPressed}
            /> */}
            <CustomButton text="Gönder" onPress={gonder} />
            {/* <CustomButton text="yazdir" onPress={yazdir} /> */}
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
