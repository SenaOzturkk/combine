import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, { useState } from 'react';
import SearchBox from '../screenComponents/SearchBox';
import { useNavigation } from '@react-navigation/native';
import CustomButton from '../screenComponents/CustomButton';
import ChoiceLogo from '../../storage/images/choiceLogo.png';
import baseURL from '../baseURL';
import Ionic from 'react-native-vector-icons/Ionicons';
import Post from '../screenComponents/Post';

const Category = () => {
  const navigation = useNavigation();
  const [postInfos, setPostInfos] = useState({})
  const [loading, setLoading] = useState(true)

  const fetchData = (category) => {
    fetch(baseURL + 'post?category=' + category)
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        console.log(json)
        setPostInfos(json)
        setLoading(false)
      })
      .catch(function (error) {
        console.log('There has been a problem with your fetch operation: ' + error.message);
        throw error;
      });
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
            onPress={() => fetchData('Ayakkabı')}
          >
            <Image
              source={require('../../storage/images/ayakkabi.png')}
              style={{
                width: 120,
                height: 150,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => fetchData('Giyim')}
          >
            <Image
              source={require('../../storage/images/giyim.png')}
              style={{
                width: 120,
                height: 150,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => fetchData('Aksesuar')}
          >
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
          <TouchableOpacity
            onPress={() => fetchData('Kombin')}
          >
            <Image
              source={require('../../storage/images/kombin.png')}
              style={{
                width: 120,
                height: 150,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => fetchData('Hediye')}
          >
            <Image
              source={require('../../storage/images/hediye.png')}
              style={{
                width: 120,
                height: 150,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => fetchData('Tatil')}
          >
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
          <TouchableOpacity
            onPress={() => fetchData('Vasıta')}
          >
            <Image
              source={require('../../storage/images/vasıta.png')}
              style={{
                width: 120,
                height: 150,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => fetchData('Teknoloji')}
          >
            <Image
              source={require('../../storage/images/elektronik.png')}
              style={{
                width: 120,
                height: 150,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => fetchData('Ev')}
          >
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
      <View>
        {loading ? <></> : <Post postInfo={postInfos} isCategory={true} categoryLoading={setLoading} />}
      </View>
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
