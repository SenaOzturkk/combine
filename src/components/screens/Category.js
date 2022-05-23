import {View, Text, SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import SearchBox from '../screenComponents/SearchBox';
import {useNavigation} from '@react-navigation/native';
import CustomButton from '../screenComponents/CustomButton';
const Category = () => {
  const navigation = useNavigation();
  const onForgotPasswordPressed = () => {
    console.warn('forgot password');
    navigation.navigate('ForgotPassword');
  };
  return (
    <SafeAreaView
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        position: 'relative',
      }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <SearchBox />
        <Text style={styles.text}>KATEGORİLER</Text>

        <View
          style={{
            backgroundColor: 'white',
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          <CustomButton
            text="Giyim"
            onPress={onForgotPasswordPressed}
            type="CATEGORY"
            fgColor="white"
          />
          <CustomButton
            text="Teknoloji"
            onPress={onForgotPasswordPressed}
            type="CATEGORY"
          />
          <CustomButton
            text="Araba"
            onPress={onForgotPasswordPressed}
            type="CATEGORY"
          />
        </View>
        <View
          style={{
            backgroundColor: 'white',
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          <CustomButton
            text="Eşya"
            onPress={onForgotPasswordPressed}
            type="CATEGORY"
          />
          <CustomButton
            text="Hediye"
            onPress={onForgotPasswordPressed}
            type="CATEGORY"
          />
          <CustomButton
            text="Tatil"
            onPress={onForgotPasswordPressed}
            type="CATEGORY"
          />
        </View>
        <Text style={styles.text}>ŞABLON TİPİ</Text>
        <View
          style={{
            backgroundColor: 'white',
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          <CustomButton
            text="Tekli"
            onPress={onForgotPasswordPressed}
            type="CATEGORY"
          />
          <CustomButton
            text="İkili"
            onPress={onForgotPasswordPressed}
            type="CATEGORY"
          />
          <CustomButton
            text="Çoklu"
            onPress={onForgotPasswordPressed}
            type="CATEGORY"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  text: {
    margin: 15,
    fontSize: 20,
    fontWeight: '600',
    color: 'gray',
  },
});
export default Category;
