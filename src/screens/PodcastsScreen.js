/* eslint-disable react-hooks/exhaustive-deps */

import React, {useEffect, useContext} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  Linking,
  SafeAreaView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {AppContext} from '../AppContext/AppContext';
import Navbar from '../componentes/Navbar';
import Icon from 'react-native-vector-icons/FontAwesome';
import MenuHamburguesa from '../componentes/MenuHamburguesa';

//screen de los podcasts

export default function PodcastsScreen({navigation}) {
  const {
    listadoPodcasts,
    setListadoPodcasts,
    menuHamburguesa,
    setMenuHamburguesa,
  } = useContext(AppContext);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setMenuHamburguesa(false);

      TraerPodcasts();
      async function TraerPodcasts() {
        try {
          let data = await fetch(
            'https://nextidea4u.com/api/podcast/get-podcasts.php',
          );

          let respuesta = await data.json();

          setListadoPodcasts(respuesta);
        } catch (error) {
          console.error(error);
        }
      }
      // The screen is focused
      // Call any action
    });

    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe;
  }, [navigation]);

  return (
    <SafeAreaView
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
      }}>
      {menuHamburguesa ? <MenuHamburguesa navigation={navigation} /> : null}
      <View style={{backgroundColor: 'white', width: '100%'}}>
        <Navbar navigation={navigation} />
      </View>
      <ScrollView>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            width: '100%',
            
            marginTop: 30,
          }}>
          {listadoPodcasts
            ? listadoPodcasts.featured.map(podcast => {
                return (
                  <View
                    style={{width: '50%', padding:23}}
                    key={podcast.id}>
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate('PodcastsDetallado', {
                          idPodcasts: podcast.id,
                        })
                      }>
                      <Image
                        source={{uri: podcast.img}}
                        style={{
                          height: 150,
                          width: 150,
                          borderRadius: 10,
                          
                        }}
                      />
                      <Text
                        style={{
                          fontSize: 18,
                          color: 'black',
                         
                          width: '85%',
                          marginTop: 10,
                          fontFamily: 'Inter-SemiBold',
                        }}>
                        {podcast.title}
                      </Text>
                    </TouchableOpacity>
                  </View>
                );
              })
            : null}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
