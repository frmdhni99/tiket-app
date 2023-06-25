import React, {useState, useEffect} from 'react';
import {View, Text, ImageBackground} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Logo from '../assets/ticket.svg';

const Splash = () => {
  const [authLoaded, setAuthLoaded] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      setAuthLoaded(true);
    }, 2000);
  }, []);

  useEffect(() => {
    if (authLoaded) {
      navigation.navigate('Login');
    }
  }, [authLoaded, navigation]);

  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
      }}>
      <Logo width={200} height={200} />
    </View>
  );
};

export default Splash;
