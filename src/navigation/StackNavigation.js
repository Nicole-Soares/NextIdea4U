import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Home from '../screens/Home';
import Ingresar from '../screens/Ingresar';
import PodcastsScreen from '../screens/PodcastsScreen';
import Registrarse from '../screens/Registrarse';

//screnn de  la navegacion
const Stack = createNativeStackNavigator();

export default function StackNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={'Home'}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="PodcastsScreen" component={PodcastsScreen} />
      <Stack.Screen name="Registrarse" component={Registrarse} />
      <Stack.Screen name="Ingresar" component={Ingresar} />
    </Stack.Navigator>
  );
}
