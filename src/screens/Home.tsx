import React, {useEffect} from 'react';
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

const musicData: MusicDataProps[] = [
  {
    id: 1,
    image:
      'https://c4.wallpaperflare.com/wallpaper/708/554/392/alternative-britpop-coldplay-rock-wallpaper-preview.jpg',
    title: 'Coldplay - Music of The Year',
    type: 'Festival Musik',
    place: 'Gelora Bung Karno, Jakarta',
    date: '15 Nov 2023',
    price: 1100,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    id: 2,
    image:
      'https://c4.wallpaperflare.com/wallpaper/316/773/109/album-covers-muse-music-wallpaper-preview.jpg',
    title: 'Muse - Will of the Prototype',
    type: 'Festival Musik',
    place: 'Gelora Bung Karno, Jakarta',
    date: '7 Jun 2023',
    price: 300,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    id: 3,
    image:
      'https://assets.ayobandung.com/crop/0x0:0x0/750x500/webp/photo/2023/06/04/Konser-NOAH-di-Palembang-17-Juni-2023-2135331774.jpg',
    title: 'Noah - Bebaskan Energimu',
    type: 'Festival Musik',
    place: 'Gelora Satria, Purwokerto',
    date: '17 June 2023',
    price: 250,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    id: 4,
    image:
      'https://d1629ugb7moz2f.cloudfront.net/e/23394/h9mUaq4ZDhXtHM3QGJXaEhxKKg26DVIl4iIlvD8a.png',
    title: 'Dzawin Nur - Langit Kelabu',
    type: 'Standup Comedy',
    place: 'Gedung Kesenian Soetedja, Purwokerto',
    date: '24 June 2023',
    price: 250,

    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
];

const Home = () => {
  const navigation = useNavigation();

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
          <WideCard data={musicData[0]} />
          <WideCard data={musicData[1]} />
          <WideCard data={musicData[2]} />
          <WideCard data={musicData[3]} />
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
