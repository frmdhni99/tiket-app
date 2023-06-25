import React from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const BookedCard = ({data}: any) => {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{
            uri: data.image,
          }}
        />
        <Text style={{fontSize: 18, fontWeight: '700'}}>{data.title}</Text>
        <Text>{data.place}</Text>
        <Text style={{color: 'green', fontSize: 15, fontWeight: '600'}}>
          {data.status}
        </Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <MaterialIcons name="date-range" size={16} color="black" />
          <Text style={{fontSize: 15, fontWeight: '600', marginLeft: 4}}>
            {data.date}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default BookedCard;

const styles = StyleSheet.create({
  container: {
    padding: 8,
    backgroundColor: 'white',
    borderRadius: 8,
    marginVertical: 4,
  },
  image: {
    width: '100%',
    height: 100,
    backgroundColor: '#f2f2f2',
    borderRadius: 4,
  },
});
