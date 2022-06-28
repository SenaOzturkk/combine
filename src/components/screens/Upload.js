import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import React, {useState} from 'react';
import DropdownComponent from '../screenComponents/DropdownComponent';
import CustomInput from '../screenComponents/CustomInput';
import CustomButton from '../screenComponents/CustomButton';
import Ionic from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
const Upload = () => {
  const [detail, setDetail] = useState('');
  const [question, setQuestion] = useState('');
  const [imageUri, setImageUri] = useState('');
  const navigation = useNavigation();

  const dataCategory = [
    {label: 'Giyim', value: 'Giyim'},
    {label: 'Teknoloji', value: 'Teknoloji'},
    {label: 'Araba', value: 'Araba'},
    {label: 'Eşya', value: 'Eşya'},
    {label: 'Hediye', value: 'Hediye'},
    {label: 'Tatil', value: 'Tatil'},
  ];
  const dataSablon = [
    {label: 'Tekli', value: 'Tekli'},
    {label: 'İkili', value: 'İkili'},
    {label: 'Çoklu', value: 'Çoklu'},
  ];
  const onSendPressed = () => {
    console.warn('post send');
  };
  const onDetailPressed = () => {
    navigation.navigate('PostDetail');
  };

  const openCamera = () => {
    let options = {
      /* storageOptions: {
        path: 'images',
        mediaType: 'photo',
      },
      includeBase64: true,*/
      includeBase64: true,
      mediaType: 'photo',
      quality: 1,
      noData: true,
    };
    launchCamera(options, response => {
      console.log('response', response);
      if (response.didCancel) {
        console.log('user cancelled image picker');
      } else if (response.error) {
        console.log(' image picker error', response.error);
      } else if (response.customButton) {
        console.log('user cancelled image picker', response.customButton);
      } else {
        // const source = {uri: 'data:/image/jpeg,' + response.base64};
        // setImageUri(response.assest[0].base64);
        setImageUri(response);
      }
    });
  };
  const openGallery = () => {
    let options = {
      /* storageOptions: {
        path: 'images',
        mediaType: 'photo',
      },
      includeBase64: true,*/
      includeBase64: true,
      mediaType: 'photo',
      quality: 1,
      noData: true,
    };
    launchImageLibrary(options, response => {
      console.log('response', response);
      if (response.didCancel) {
        console.log('user cancelled image picker');
      } else if (response.error) {
        console.log(' image picker error', response.error);
      } else if (response.customButton) {
        console.log('user cancelled image picker', response.customButton);
      } else {
        // const source = {uri: 'data:/image/jpeg,' + response.base64};
        // setImageUri(response.assest[0].base64);
        setImageUri(response);
      }
    });
  };
  const handleChoosePhoto = () => {
    openCamera();
  };
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
              onPress={openCamera}
              bgColor="black"
              fgColor="white"
              type="SQUARE"
            />

            <CustomButton
              text="Galeriyi Aç"
              onPress={openGallery}
              bgColor="black"
              fgColor="white"
              type="SQUARE"
            />
          </View>
          <View style={styles.bottomContainer}>
            <CustomInput
              placeholder="Soru Metni Giriniz"
              value={question}
              setValue={setQuestion}
            />

            <CustomButton
              text="Ürünlere detay girmek için tıklayınız"
              onPress={onDetailPressed}
            />
            <CustomButton text="Gönder" onPress={onSendPressed} />
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
