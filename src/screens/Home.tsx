import React, {useEffect, useState} from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  TextInput,
  ScrollView,
  StatusBar,
  Alert,
  BackHandler,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';

import Logo from '../assets/ticket.svg';
import Card from '../components/Card';
import WideCard from '../components/WideCard';

type MusicDataProps = {
  id: number;
  image: string;
  title: string;
  type: string;
  place: string;
  date: string;
  price: number;
  description: string;
};

// const musicData: MusicDataProps[] = [

const Home = () => {
  const navigation = useNavigation();

  const [musicData, setMusicData] = useState([]);

  const fetchMusicData = async () => {
    try {
      const response = await axios.get('http://192.168.18.9:3000/musicdata');
      if (response.data.length > 0) {
        return setMusicData(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  console.log(musicData);

  useEffect(() => {
    const backAction = () => {
      Alert.alert('Peringatan', 'Apakah anda ingin keluar?', [
        {
          text: 'Tidak',
          onPress: () => null,
          style: 'cancel',
        },
        {text: 'Ya', onPress: () => BackHandler.exitApp()},
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    fetchMusicData();

    return () => backHandler.remove();
  }, []);

  return (
    <ScrollView>
      <StatusBar backgroundColor="#ededed" barStyle="dark-content" />
      <View style={style.container}>
        <View style={style.header}>
          <View style={style.wrapperLogo}>
            <Logo width={50} height={50} />
            <Text style={style.textLogo}>TiketKu</Text>
          </View>
          <TouchableOpacity style={style.wrapperNotif}>
            <MaterialCommunityIcons name="bell" size={16} color="black" />
          </TouchableOpacity>
        </View>
        <View style={style.wrapperSearch}>
          <TextInput
            style={style.searchBar}
            placeholder="Cari event"
            inlineImageLeft="search"
            inlineImagePadding={10}
          />
        </View>
        <View>
          <Text style={style.eventTitle}>Event Rekomendasi</Text>
          <ScrollView horizontal={true}>
            {musicData.map(item => {
              return (
                <Card
                  item={item}
                  onPress={() =>
                    navigation.navigate('BookTiket', {
                      paramKey: item,
                    })
                  }
                  key={item.id}
                />
              );
            })}
          </ScrollView>
        </View>
        <View style={{marginTop: 16}}>
          <Text style={style.eventTitle}>Event Di Dekatmu</Text>
          <ScrollView>
            {musicData.map(item => {
              return (
                <WideCard
                  data={item}
                  onPress={() =>
                    navigation.navigate('BookTiket', {
                      paramKey: item,
                    })
                  }
                  key={item.id}
                />
              );
            })}
          </ScrollView>
          {/* <WideCard data={musicData[0]} /> */}
          {/* <WideCard data={musicData[1]} />
          <WideCard data={musicData[2]} />
          <WideCard data={musicData[3]} /> */}
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;

const style = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#ededed',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  wrapperLogo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textLogo: {
    fontSize: 20,
    fontWeight: '700',
    marginLeft: 12,
  },
  wrapperNotif: {
    padding: 15,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#424847',
  },
  wrapperSearch: {
    marginVertical: 18,
  },
  searchBar: {
    borderRadius: 24,
    paddingHorizontal: 20,
    backgroundColor: 'white',
  },
  eventTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
  },
});
