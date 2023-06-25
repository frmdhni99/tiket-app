import {View, Text} from 'react-native';
import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  StatusBar,
  Image,
} from 'react-native';
import BookedCard from '../components/BookedCard';

type MusicDataProps = {
  id: number;
  image: string;
  title: string;
  type: string;
  place: string;
  date: string;
  price: number;
  status: string;
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
    status: 'Sudah diboking',
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
    status: 'Sudah diboking',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    id: 3,
    image:
      'https://d1629ugb7moz2f.cloudfront.net/e/23394/h9mUaq4ZDhXtHM3QGJXaEhxKKg26DVIl4iIlvD8a.png',
    title: 'Dzawin Nur - Langit Kelabu',
    type: 'Standup Comedy',
    place: 'Gedung Kesenian Soetedja, Purwokerto',
    date: '24 June 2023',
    price: 250,
    status: 'Sudah diboking',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
];
const Booked = () => {
  return (
    <ScrollView>
      <StatusBar backgroundColor="#ededed" barStyle="dark-content" />
      <View style={style.container}>
        <View style={style.header}>
          <Text style={style.textLogo}>Booked</Text>
        </View>

        <View style={{marginTop: 16}}>
          <BookedCard data={musicData[0]} />
          <BookedCard data={musicData[1]} />
          <BookedCard data={musicData[2]} />
        </View>
      </View>
    </ScrollView>
  );
};

export default Booked;

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
    marginTop: 30,
  },
});
