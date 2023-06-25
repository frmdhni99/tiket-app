import React, {useEffect, useState} from 'react';
import {
  ImageBackground,
  View,
  BackHandler,
  TouchableOpacity,
  Text,
} from 'react-native';
import Modal from 'react-native-modal';

const Landing = ({navigation}) => {
  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', () =>
      BackHandler.exitApp(),
    );

    return () => backHandler.remove();
  }, []);

  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

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
        <TouchableOpacity
          style={{
            paddingHorizontal: 8,
            paddingVertical: 16,
            backgroundColor: 'white',
            alignItems: 'center',
            borderRadius: 100,
            marginVertical: 4,
          }}
          onPress={() => navigation.navigate('Menu')}>
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
