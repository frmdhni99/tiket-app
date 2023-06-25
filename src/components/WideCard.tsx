import React from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const WideCard = ({data}: any) => {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{
            uri: data.image,
          }}
        />

        <Text>{data.title}</Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <MaterialIcons name="location-on" size={16} color="black" />
          <Text style={{fontSize: 16, fontWeight: '700', marginLeft: 4}}>
            {data.place}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default WideCard;

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
