import React, {useEffect, useContext} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {AppContext} from '../AppContext/AppContext';
import Navbar from '../componentes/Navbar';

/*  <View style={{backgroundColor: '#0000C6'}}>
<ScrollView>
<View
  style={{
    position: 'relative',
    top: 0,
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderRightWidth: 170,
    borderTopWidth: 170,
    borderRightColor: 'transparent',
    borderTopColor: '#0505EC',
  }}></View>
<View
  style={{
    position: 'relative',
    bottom: 0,
    width: 0,
    marginTop: 60,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderRightWidth: 170,
    borderTopWidth: 170,
    borderRightColor: 'transparent',
    borderTopColor: '#0505EC',
    transform: [{rotate: '270deg'}],
  }}></View>
<View
  style={{
    position: 'absolute',

    justifyContent: 'center',
    alignSelf: 'center',
  }}>
  <Image
    source={require('../assets/icono/imgPod.png')}
    style={{height: 400, width: 300}}
  />
</View>
</ScrollView>
</View> */

export default function Podcasts() {
  const {listadoPodcasts, setListadoPodcasts} = useContext(AppContext);

  useEffect(() => {
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
  }, []);

  return (
    <View style={{width: '100%'}}>
      <View style={{backgroundColor: 'white'}}>
        <Navbar />
      </View>
      <ScrollView>
        <ImageBackground
          source={require('../assets/icono/fondoPod.jpg')}
          style={{
            height: 600,
            width: 1000,
            position: 'relative',
            left: -330,
            flex: 1,
          }}>
          <LinearGradient
            style={{flex: 1}}
            colors={['transparent', '#005cff', '#212529']}
            start={{x: 0.2, y: 1.4}}
            end={{x: 1.1, y: 0.9}}></LinearGradient>
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
            <Text style={{color: 'white', fontSize: 30, fontWeight: 'bold'}}>
              Podcasts de Next Idea 4U
            </Text>
          </View>

          <View style={{width: '90%', alignItems: 'center'}}>
            <Text style={{color: 'white', fontSize: 17}}>
              Disfrute de todo el contenido de nuestra plataforma en formato
              audio con nuestros podcasts.
            </Text>
          </View>
          <View style={{alignSelf: 'center'}}>
            <Text style={{color: 'yellow', fontWeight: 'bold', fontSize: 15}}>
              Tambien disponible en:
            </Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <TouchableOpacity>
              <Text>Spotify</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text>Apple Podcasts</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text>Google Podcasts</Text>
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
                  <View style={{width: '50%'}}>
                    <Image
                      source={{uri: podcast.img}}
                      style={{height: 170, width: 170, borderRadius: 10}}
                    />
                    <Text
                      style={{
                        fontSize: 17,
                        color: 'black',
                        fontWeight: 'bold',
                      }}>
                      {podcast.title}
                    </Text>
                  </View>
                );
              })
            : null}
        </View>
      </ScrollView>
    </View>
  );
}
