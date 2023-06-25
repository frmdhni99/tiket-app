import {View, Text, ScrollView, StyleSheet, StatusBar} from 'react-native';
import React from 'react';
import RiwayatCard from '../components/RiwayatCard';

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
      'https://assets.ayobandung.com/crop/0x0:0x0/750x500/webp/photo/2023/06/04/Konser-NOAH-di-Palembang-17-Juni-2023-2135331774.jpg',
    title: 'Noah - Bebaskan Energimu',
    type: 'Festival Musik',
    place: 'Gelora Satria, Purwokerto',
    date: '17 June 2023',
    price: 250,
    status: 'Selesai',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    id: 2,
    image:
      'https://balebengong.id/wp-content/uploads/2022/09/poster-lineup-750x750.jpg',
    title: 'Get The Fest',
    type: 'Festival Musik',
    place: 'Njana Tilem Museum, Gianyar',
    date: '16 October 2022',
    price: 250,
    status: 'Selesai',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    id: 3,
    image:
      'https://s3-ap-southeast-1.amazonaws.com/loket-production-sg/images/banner/20190919173338_5d835982d522f.jpg',
    title: 'FESTIVALLAND',
    type: 'Festival Musik',
    place: 'Gelora Satria, Purwokerto',
    date: '18 - 20 October 2019',
    price: 250,
    status: 'Selesai',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
];

const Ticket = () => {
  return (
    <ScrollView>
      <StatusBar backgroundColor="#ededed" barStyle="dark-content" />
      <View style={style.container}>
        <View style={style.header}>
          <Text style={style.textLogo}>Riwayat Pembelian</Text>
        </View>

        <View style={{marginTop: 16}}>
          <RiwayatCard data={musicData[0]} />
          <RiwayatCard data={musicData[1]} />
          <RiwayatCard data={musicData[2]} />
        </View>
      </View>
    </ScrollView>
  );
};

export default Ticket;

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
