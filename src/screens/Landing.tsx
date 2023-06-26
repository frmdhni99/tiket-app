import React, {useEffect, useState} from 'react';
import {
  ImageBackground,
  View,
  BackHandler,
  TouchableOpacity,
  Text,
  TextInput,
  Alert,
} from 'react-native';

import Modal from 'react-native-modal';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const Landing = ({navigation}) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const [inputValue, setInputValue] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (!inputValue && !password) {
      return Alert.alert('Gagal Login', 'Username dan Password harus diisi');
    }

    const response = await axios.get(
      `http://192.168.18.9:3000/users?username=${inputValue}&password=${password}`,
    );

    if (response.data.length > 0) {
      try {
        await AsyncStorage.setItem('username', response.data[0].username);
        navigation.navigate('Menu');
        setInputValue('');
        setPassword('');
      } catch (error) {
        console.log(error);
      }
    }
    console.log(response.data);
    console.log('Username:', inputValue);
    console.log('Password:', password);
  };
  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', () =>
      BackHandler.exitApp(),
    );

    return () => backHandler.remove();
  }, []);

  return (
    <ImageBackground
      source={{
        uri: 'https://c4.wallpaperflare.com/wallpaper/811/650/546/colorful-vibrant-gradient-blur-wallpaper-preview.jpg',
      }}>
      <View style={{flex: 1}}>
        <Modal
          isVisible={isModalVisible}
          animationIn="fadeInUpBig"
          animationOut="fadeOutDownBig">
          <View
            style={{
              backgroundColor: 'white',
              padding: 16,
              borderRadius: 8,
            }}>
            <View style={{}}>
              <Text style={{textAlign: 'center', fontSize: 18}}>
                Fitur belum tersedia.
              </Text>
              <View style={{alignItems: 'center'}}>
                <TouchableOpacity
                  onPress={toggleModal}
                  style={{
                    marginTop: 20,
                    alignItems: 'center',
                    width: 80,
                    paddingVertical: 14,
                    backgroundColor: '#3080ff',
                    borderRadius: 8,
                  }}>
                  <Text style={{fontSize: 16, fontWeight: '700'}}>Oke</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
      <View
        style={{
          height: '100%',
          marginHorizontal: 16,
          justifyContent: 'center',
        }}>
        <Text
          style={{
            fontSize: 28,
            fontWeight: 'bold',
            marginBottom: 16,
            textAlign: 'center',
          }}>
          Login
        </Text>
        <TextInput
          style={{
            paddingHorizontal: 12,
            paddingVertical: 10,
            backgroundColor: 'white',
            borderRadius: 8,
            marginVertical: 10,
          }}
          placeholder="Masukan Username"
          onChangeText={setInputValue}
          value={inputValue}
        />
        <TextInput
          style={{
            paddingHorizontal: 12,
            paddingVertical: 10,
            backgroundColor: 'white',
            borderRadius: 8,
            marginVertical: 10,
          }}
          placeholder="Masukan Password"
          secureTextEntry
          onChangeText={setPassword}
          value={password}
        />

        <TouchableOpacity
          style={{
            marginTop: 20,
            paddingHorizontal: 8,
            paddingVertical: 16,
            backgroundColor: 'white',
            alignItems: 'center',
            borderRadius: 100,
            marginVertical: 4,
          }}
          onPress={handleLogin}>
          <Text style={{fontSize: 16, fontWeight: '700'}}>Masuk</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            paddingHorizontal: 8,
            paddingVertical: 16,
            backgroundColor: 'white',
            alignItems: 'center',
            borderRadius: 100,
            marginVertical: 4,
          }}
          onPress={toggleModal}>
          <Text style={{fontSize: 16, fontWeight: '700'}}>Daftar</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default Landing;
