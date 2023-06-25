import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from './screens/Home';
import Booked from './screens/Booked';
import Riwayat from './screens/Riwayat';
import Profile from './screens/Profile';
import Landing from './screens/Landing';
import BookTicket from './screens/BookTicket';
import Splash from './screens/Splash';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Menu = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home-variant' : 'home-variant-outline';
          } else if (route.name === 'Booked') {
            iconName = focused ? 'check-circle' : 'check-circle-outline';
          } else if (route.name === 'Riwayat') {
            iconName = focused ? 'history' : 'history';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'account-circle' : 'account-circle-outline';
          }

          return (
            <MaterialCommunityIcons name={iconName} size={size} color={color} />
          );
        },
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen name="Home" component={Home} options={{headerShown: false}} />
      <Tab.Screen
        name="Booked"
        component={Booked}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Riwayat"
        component={Riwayat}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={Landing}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Menu"
          component={Menu}
          options={{headerShown: false, animation: 'none'}}
        />
        <Stack.Screen
          name="BookTiket"
          component={BookTicket}
          options={{
            headerTitle: 'Book Tiket',
            headerTitleAlign: 'center',
            animation: 'fade',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
