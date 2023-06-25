import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

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

type CardProps = {
  item: MusicDataProps;
  onPress: () => void;
};

function Card({item, onPress}: CardProps) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={{uri: item.image}} style={styles.image} />
      <Text style={{fontSize: 18, fontWeight: '700'}}>{item.title}</Text>
      <Text style={{fontWeight: '500', fontSize: 15, marginVertical: 4}}>
        {item.type}
      </Text>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <MaterialIcons name="location-on" size={16} color="black" />
        <Text style={{fontSize: 16, fontWeight: '700', marginLeft: 4}}>
          {item.place}
        </Text>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <MaterialIcons name="date-range" size={16} color="black" />
        <Text style={{fontSize: 15, fontWeight: '600', marginLeft: 4}}>
          {item.date}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

export default Card;

const styles = StyleSheet.create({
  container: {
    padding: 8,
    borderRadius: 8,
    backgroundColor: 'white',
    marginHorizontal: 4,
  },
  image: {
    width: '100%',
    height: 100,
    backgroundColor: '#f2f2f2',
    borderTopRightRadius: 4,
    borderTopLeftRadius: 4,
  },
});
