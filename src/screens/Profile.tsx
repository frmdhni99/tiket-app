import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {TouchableOpacity, StyleSheet, ScrollView, Image} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Profile = () => {
  const [name, setName] = useState('');

  const getUsername = async () => {
    try {
      const username = await AsyncStorage.getItem('username');
      if (username !== null) setName(username);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsername();
  }, []);
  return (
    <ScrollView>
      <View style={style.container}>
        <View style={style.header}>
          <Text style={style.textLogo}>PROFILE</Text>
        </View>
        <View style={{marginTop: 32}}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              marginBottom: 16,
              textAlign: 'center',
            }}>
            Selamat Datang {name}
          </Text>
          <TouchableOpacity style={style.menuItem}>
            <Text style={style.menuText}>About</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.menuItem}>
            <Text style={style.menuText}>Setting</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[style.menuItem, {backgroundColor: 'red'}]}>
            <Text style={style.menuText}>Log Out</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Profile;

const style = StyleSheet.create({
  container: {
    flex: 1,
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
  menuItem: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: 'white',
    borderRadius: 8,
    marginVertical: 8,
    alignItems: 'center',
  },
  menuText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
