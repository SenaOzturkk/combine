import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import SearchBox from '../screenComponents/SearchBox';
import {useNavigation} from '@react-navigation/native';
import CustomButton from '../screenComponents/CustomButton';
import ChoiceLogo from '../../storage/images/choiceLogo.png';

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
        <Image
          source={ChoiceLogo}
          style={{
            width: '100%',
            height: 50,
            alignItems: 'center',
          }}
          resizeMode="contain"
        />
        <SearchBox />
        <Text style={styles.text}>Kategorileri Keşfet</Text>

        <View
          style={{
            backgroundColor: 'white',
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          <TouchableOpacity
          /*onPress={() => navigation.goBack()}*/
          >
            <Image
              source={require('../../storage/images/ayakkabi.png')}
              style={{
                width: 120,
                height: 150,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('../../storage/images/giyim.png')}
              style={{
                width: 120,
                height: 150,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('../../storage/images/saat.png')}
              style={{
                width: 120,
                height: 150,
              }}
            />
          </TouchableOpacity>
        </View>

        <View
          style={{
            backgroundColor: 'white',
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          <TouchableOpacity>
            <Image
              source={require('../../storage/images/kombin.png')}
              style={{
                width: 120,
                height: 150,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('../../storage/images/hediye.png')}
              style={{
                width: 120,
                height: 150,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('../../storage/images/tatil.png')}
              style={{
                width: 120,
                height: 150,
              }}
            />
          </TouchableOpacity>
        </View>

        <View
          style={{
            backgroundColor: 'white',
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          <TouchableOpacity>
            <Image
              source={require('../../storage/images/vasıta.png')}
              style={{
                width: 120,
                height: 150,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('../../storage/images/elektronik.png')}
              style={{
                width: 120,
                height: 150,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('../../storage/images/ev.png')}
              style={{
                width: 120,
                height: 150,
              }}
            />
          </TouchableOpacity>
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
