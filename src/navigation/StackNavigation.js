import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Home from '../screens/Home';
import Ingresar from '../screens/Ingresar';
import PodcastsScreen from '../screens/PodcastsScreen';
import Registrarse from '../screens/Registrarse';
import Recuperar from '../screens/Recuper';
import NoticiaScreen from '../screens/NoticiaScreen';
import PodcastsDetallado from '../screens/PodcastsDetallado';

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
      <Stack.Screen name="Recuperar" component={Recuperar} />
      <Stack.Screen name="NoticiaScreen" component={NoticiaScreen} />
      <Stack.Screen name="PodcastsDetallado" component={PodcastsDetallado} />
    </Stack.Navigator>
  );
}
