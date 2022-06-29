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
import React, { useEffect, useState } from 'react';
import DropdownComponent from '../screenComponents/DropdownComponent';
import CustomInput from '../screenComponents/CustomInput';
import CustomButton from '../screenComponents/CustomButton';
import Ionic from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const PostDetail = ({ route }) => {
  const navigation = useNavigation();

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
              style={{ fontSize: 35, color: 'black' }}
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
              navigation.goBack();
            }}>
            <Ionic name="checkmark" style={{ fontSize: 35, color: 'black' }} />
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
            value={route.params.detail0}
            setValue={route.params.setDetail0}
          />
          <CustomInput
            placeholder="Beden giriniz"
            value={route.params.detail1}
            setValue={route.params.setDetail1}
          />
          <CustomInput
            placeholder="Link"
            value={route.params.detail2}
            setValue={route.params.setDetail2}
          />
          <CustomInput
            placeholder="Açıklama"
            value={route.params.detail3}
            setValue={route.params.setDetail3}
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
