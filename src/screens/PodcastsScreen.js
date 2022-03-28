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
    <SafeAreaView style={{width: '100%', height: '100%'}}>
      {menuHamburguesa ? <MenuHamburguesa navigation={navigation} /> : null}
      <View style={{backgroundColor: 'white'}}>
        <Navbar navigation={navigation} />
      </View>
      <ScrollView>
        <ImageBackground
          source={require('../assets/icono/fondoPod.jpg')}
          style={{
            height: 690,
            width: 1000,
            position: 'relative',
            left: -330,
          }}>
          <LinearGradient
            style={{flex: 1}}
            colors={['transparent', '#005cff', '#212529']}
            start={{x: 0.4, y: 1.4}}
            end={{x: 1.01, y: 1.08}}></LinearGradient>
        </ImageBackground>
        <View
          style={{
            position: 'absolute',
            margin: 20,
            justifyContent: 'center',
            alignSelf: 'center',
          }}>
          <Image
            source={require('../assets/icono/imgPod.png')}
            style={{height: 410, width: 320}}
          />
        </View>
        <View
          style={{
            alignSelf: 'center',
            position: 'absolute',
            top: 450,
            width: '100%',
          }}>
          <View style={{width: '100%', alignItems: 'center'}}>
            <Text
              style={{color: 'white', fontSize: 30, fontFamily: 'Inter-Bold'}}>
              Podcasts de Next Idea 4U
            </Text>
          </View>

          <View style={{width: '90%', alignItems: 'center'}}>
            <Text
              style={{
                color: 'white',
                fontSize: 17,
                fontFamily: 'Inter-Regular',
                marginLeft: 10,
              }}>
              Disfrute de todo el contenido de nuestra plataforma en formato
              audio con nuestros podcasts.
            </Text>
          </View>
          <View style={{alignSelf: 'center'}}>
            <Text
              style={{color: 'yellow', fontFamily: 'Inter-Bold', fontSize: 15}}>
              Tambien disponible en:
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              width: '100%',
              margin: 5,
            }}>
            <TouchableOpacity
              style={{
                backgroundColor: 'black',
                flexDirection: 'row',
                justifyContent: 'space-around',
                width: '20%',
                height: 35,
                alignItems: 'center',
              }}
              onPress={() =>
                Linking.openURL(
                  'https://open.spotify.com/show/3XyUugkQz4bTHKb96MqBem?si=55bae6b8e9104efd&nd=1',
                )
              }>
              <Icon name="spotify" color="white" size={20} />
              <Text style={{color: 'white', fontWeight: 'bold', fontSize: 15}}>
                Spotify
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: 'black',
                flexDirection: 'row',
                justifyContent: 'space-around',
                width: '35%',
                alignItems: 'center',
              }}
              onPress={() =>
                Linking.openURL(
                  'https://podcasts.apple.com/us/podcast/podcasts-de-next-idea-4u/id1597339890',
                )
              }>
              <Icon name="podcast" color="white" size={20} />
              <Text style={{color: 'white', fontWeight: 'bold', fontSize: 15}}>
                Apple Podcasts
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{alignSelf: 'center', margin: 10}}>
            <TouchableOpacity
              style={{
                backgroundColor: 'black',
                flexDirection: 'row',
                justifyContent: 'space-around',
                width: '40%',
                height: 35,
                alignItems: 'center',
              }}
              onPress={() =>
                Linking.openURL(
                  'https://podcasts.google.com/feed/aHR0cHM6Ly9teC5pdm9veC5jb20vZXMvcG9kY2FzdHMtbmV4dC1pZGVhLTR1X2ZnX2YxMTQxMTEyNF9maWx0cm9fMS54bWw',
                )
              }>
              <Icon name="google" color="white" size={20} />
              <Text style={{color: 'white', fontWeight: 'bold', fontSize: 15}}>
                Google Podcasts
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignSelf: 'center',

            margin: 10,
          }}>
          {listadoPodcasts
            ? listadoPodcasts.featured.map(podcast => {
                return (
                  <View
                    style={{width: '50%', marginBottom: 25, marginTop: 25}}
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
                          height: 170,
                          width: 170,
                          borderRadius: 10,
                          marginLeft: 10,
                        }}
                      />
                      <Text
                        style={{
                          fontSize: 17,
                          color: 'black',
                          marginLeft: 15,
                          width: '80%',
                          marginTop: 10,
                          fontFamily: 'Inter-Bold',
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
