import React, {useState} from 'react';
import {
  ScrollView,
  Image,
  View,
  Text,
  TouchableOpacity,
  Button,
} from 'react-native';
import Modal from 'react-native-modal';

const BookTicket = ({route}: any) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View>
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
                Tiket {route.params.paramKey.title} telah dibeli
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
      <ScrollView>
        <View style={{paddingHorizontal: 20}}>
          <View style={{alignItems: 'center'}}>
            <Image
              source={{uri: route.params.paramKey.image}}
              style={{
                width: '100%',
                height: 300,
                resizeMode: 'cover',
                marginVertical: 20,
                borderRadius: 16,
              }}
            />
          </View>
          <Text style={{fontSize: 20, fontWeight: '600'}}>
            {route.params.paramKey.title}
          </Text>
          <Text style={{marginVertical: 10}}>{route.params.paramKey.type}</Text>
          <Text style={{fontSize: 18, fontWeight: '500'}}>Description</Text>
          <Text style={{textAlign: 'justify', paddingBottom: 60}}>
            {route.params.paramKey.description}
          </Text>
        </View>
      </ScrollView>
      <View
        style={{
          width: '100%',
          height: '10%',
          backgroundColor: 'white',
          position: 'absolute',
          bottom: 0,
          paddingHorizontal: 20,
        }}>
        <View
          style={{
            width: '100%',
            height: '100%',
            justifyContent: 'center',
          }}>
          <View style={{alignItems: 'flex-end'}}>
            <TouchableOpacity
              style={{
                paddingHorizontal: 24,
                paddingVertical: 12,
                backgroundColor: '#3080ff',
                borderRadius: 100,
              }}
              onPress={() => toggleModal()}>
              <Text style={{fontSize: 16, fontWeight: '800'}}>Beli Tiket</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default BookTicket;
