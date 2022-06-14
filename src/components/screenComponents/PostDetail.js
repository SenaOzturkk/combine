import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  ScrollView,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import React, {useState} from 'react';
import DropdownComponent from '../screenComponents/DropdownComponent';
import CustomInput from '../screenComponents/CustomInput';
import CustomButton from '../screenComponents/CustomButton';
import Ionic from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const PostDetail = () => {
  const [detail, setDetail] = useState('');
  const [question, setQuestion] = useState('');
  const navigation = useNavigation();
  const TostMessage = () => {
    ToastAndroid.show('Sucessfully !', ToastAndroid.SHORT);
  };
  const dataCategory = [
    {label: 'Giyim', value: 'Giyim'},
    {label: 'Teknoloji', value: 'Teknoloji'},
    {label: 'Araba', value: 'Araba'},
    {label: 'Eşya', value: 'Eşya'},
    {label: 'Hediye', value: 'Hediye'},
    {label: 'Tatil', value: 'Tatil'},
  ];

  const onSendPressed = () => {
    console.warn('post send');
  };

  return (
    <ScrollView showVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionic
              name="close-outline"
              style={{fontSize: 35, color: 'black'}}
            />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              paddingHorizontal: 100,
            }}>
            Post Detay
          </Text>
          <TouchableOpacity
            onPress={() => {
              TostMessage();
              navigation.goBack();
            }}>
            <Ionic name="checkmark" style={{fontSize: 35, color: 'black'}} />
          </TouchableOpacity>
        </View>
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
            value={question}
            setValue={setQuestion}
          />
          <CustomInput
            placeholder="Beden giriniz"
            value={question}
            setValue={setQuestion}
          />
          <CustomInput
            placeholder="Link"
            value={question}
            setValue={setQuestion}
          />
          <CustomInput
            placeholder="Açıklama"
            value={detail}
            setValue={setDetail}
          />
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: 700,
    alignItems: 'center',
    paddingTop: 30,
  },
  bottomContainer: {
    backgroundColor: 'white',
    width: 510,
    alignItems: 'center',
  },
});

export default PostDetail;
