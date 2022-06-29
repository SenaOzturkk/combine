import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ToastAndroid,
  Image,
  TextInput,
  SafeAreaView
} from 'react-native';
import Ionic from 'react-native-vector-icons/Ionicons';

const EditProfile = ({ route, navigation }) => {
  const { name, accountName, profileImage } = route.params;
  const TostMessage = () => {
    ToastAndroid.show('Edited Sucessfully !', ToastAndroid.SHORT);
  };
  return (
    <SafeAreaView>
      <View
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: 'white',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: 10,
          }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionic name="close-outline" style={{ fontSize: 35 }} />
          </TouchableOpacity>
          <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Profili Düzenle</Text>
          <TouchableOpacity
            onPress={() => {
              TostMessage();
              navigation.goBack();
            }}>
            <Ionic name="checkmark" style={{ fontSize: 35, color: '#3493D9' }} />
          </TouchableOpacity>
        </View>
        <View style={{ padding: 20, alignItems: 'center' }}>
          <Image
            source={{ uri: profileImage }}
            style={{ width: 80, height: 80, borderRadius: 100 }}
          />
          <Text
            style={{
              color: 'black',
            }}>
            Profil Fotoğrafını Değiştir
          </Text>
        </View>
        <View style={{ padding: 10 }}>
          <View style={{ paddingVertical: 10 }}>
            <Text
              style={{
                opacity: 0.5,
              }}>
              Kullanıcı Adı
            </Text>
            <TextInput
              placeholder="accountname"
              defaultValue={accountName}
              style={{
                fontSize: 16,
                borderBottomWidth: 1,
                borderColor: '#CDCDCD',
              }}
            />
          </View>
          <View style={{ paddingVertical: 10 }}>
            <Text
              style={{
                opacity: 0.5,
              }}>
              Şifre
            </Text>
            <TextInput
              style={{
                fontSize: 16,
                borderBottomWidth: 1,
                borderColor: '#CDCDCD',
              }}
            />
          </View>
        </View>
      </View></SafeAreaView>
  );
};

export default EditProfile;
