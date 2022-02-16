import React, {useEffect, useContext} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  Linking,
} from 'react-native';
import Navbar from '../componentes/Navbar';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import {WebView} from 'react-native-webview';
import NoticiaRelacionadoDelPod from '../componentes/NoticiaRelacionadaDelPod';
import {AppContext} from '../AppContext/AppContext';
import PodcastsRelacionados from '../componentes/PodcastsRelacionados';
import {stylesPod} from '../theme/stylesPod';
import MenuHamburguesa from '../componentes/MenuHamburguesa';
//screen podcasts abierto

export default function PodcastsDetallado(props) {
  const {podcasts, setPodcasts, menuHamburguesa, setMenuHamburguesa} =
    useContext(AppContext);

  useEffect(() => {
    setMenuHamburguesa(false);
    const llamadoNoticias = async () => {
      try {
        let llamado = await fetch(
          `https://nextidea4u.com/api/podcast/get-podcast.php?id=${props.route.params.idPodcasts}`,
        );
        let respuesta = await llamado.json();

        setPodcasts(respuesta);
      } catch (error) {
        console.log(error);
      }
    };
    llamadoNoticias();
  }, []);

  if (podcasts) {
    return (
      <View
        style={{
          height: '100%',
          width: '100%',
        }}>
        {menuHamburguesa ? <MenuHamburguesa navigation={props.navigation} /> : null}
        <ScrollView>
          <Navbar navigation={props.navigation} />
          <View style={{margin: 10, width: '100%'}}>
            <Text
              style={{
                color: 'black',
                fontWeight: 'bold',
                fontSize: 25,
                width: '70%',
              }}>
              {podcasts.podcast.titulo}
            </Text>

            <Text style={{color: 'black', fontSize: 17, width: '90%'}}>
              {podcasts.podcast.descripcion_corta}
            </Text>
            <View style={{width: '100%'}}></View>
          </View>
          <View>
            <Text
              style={{
                color: 'black',
                fontWeight: 'bold',
                fontSize: 20,
                margin: 5,
                borderBottomColor: 'gray',
                borderBottomWidth: 1,
                width: '90%',
              }}>
              Tambien disponible en las plataformas:
            </Text>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                style={{
                  backgroundColor: 'blue',
                  flexDirection: 'row',
                  margin: 5,
                  borderRadius: 3,
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: 100,
                  height: 30,
                }}
                onPress={() =>
                  Linking.openURL(
                    'https://open.spotify.com/show/3XyUugkQz4bTHKb96MqBem?si=55bae6b8e9104efd&nd=1',
                  )
                }>
                <Icon name="spotify" size={18} color="white" />
                <Text
                  style={{
                    color: 'white',
                    fontWeight: 'bold',
                    marginLeft: 5,
                    fontSize: 15,
                  }}>
                  Spotify
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: 'blue',
                  flexDirection: 'row',
                  margin: 5,
                  borderRadius: 3,
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: 150,
                  height: 30,
                }}
                onPress={() =>
                  Linking.openURL(
                    'https://podcasts.apple.com/us/podcast/podcasts-de-next-idea-4u/id1597339890',
                  )
                }>
                <Icon name="podcast" size={18} color="white" />
                <Text
                  style={{
                    color: 'white',
                    fontWeight: 'bold',
                    marginLeft: 5,
                    fontSize: 15,
                  }}>
                  Apple Podcasts
                </Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={{
                backgroundColor: 'blue',
                flexDirection: 'row',
                margin: 5,
                borderRadius: 3,
                justifyContent: 'center',
                alignItems: 'center',
                width: 150,
                height: 30,
              }}
              onPress={() =>
                Linking.openURL(
                  'https://podcasts.google.com/feed/aHR0cHM6Ly9teC5pdm9veC5jb20vZXMvcG9kY2FzdHMtbmV4dC1pZGVhLTR1X2ZnX2YxMTQxMTEyNF9maWx0cm9fMS54bWw',
                )
              }>
              <Icon name="google" size={18} color="white" />
              <Text
                style={{
                  color: 'white',
                  fontWeight: 'bold',
                  marginLeft: 5,
                  fontSize: 15,
                }}>
                Google Podcasts
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{width: '100%'}}>
            <Text
              style={{
                fontWeight: 'bold',
                color: 'black',
                fontSize: 18,
                borderBottomWidth: 1,
                borderBottomColor: 'gray',
                width: '90%',
                margin: 5,
              }}>
              Contactos de esta nota
            </Text>
            <View style={{width: '100%'}}>
              {podcasts ? (
                podcasts.participants.map(participante => {
                  return (
                    <LinearGradient
                      colors={['#212529', '#1d4da2']}
                      start={{x: 0.1, y: 0.9}}
                      end={{x: 0.7, y: 0.6}}
                      style={{margin: 10}}>
                      <Image
                        source={{uri: participante.imagen}}
                        style={{
                          height: 70,
                          width: 70,
                          borderRadius: 40,
                          borderColor: 'white',
                          borderWidth: 3,
                          margin: 5,
                        }}
                      />
                      <View style={{flexDirection: 'row', margin: 5}}>
                        <Text
                          style={{
                            color: 'white',
                            fontWeight: 'bold',
                            fontSize: 20,
                          }}>
                          {participante.nombre}
                        </Text>
                        <Text
                          style={{
                            color: 'white',
                            marginLeft: 5,
                            fontWeight: 'bold',
                            fontSize: 20,
                          }}>
                          {participante.apellido}
                        </Text>
                      </View>
                      <Text
                        style={{
                          color: 'white',
                          fontWeight: 'bold',
                          margin: 5,
                        }}>
                        {participante.profesion}
                      </Text>
                      <Text style={{color: 'white', margin: 5, fontSize: 15}}>
                        {participante.biografia}
                      </Text>
                    </LinearGradient>
                  );
                })
              ) : (
                <Text style={{display: 'none'}}></Text>
              )}
            </View>
            <View>
              <Text
                style={{
                  color: 'black',
                  fontWeight: 'bold',
                  fontSize: 20,
                  margin: 5,
                  borderBottomColor: 'gray',
                  borderBottomWidth: 1,
                  width: '90%',
                }}>
                Noticias relacionadas al podcast
              </Text>
              <NoticiaRelacionadoDelPod navigation={props.navigation} />
            </View>
            <View style={{width: '100%'}}>
              <Text
                style={{
                  fontWeight: 'bold',
                  color: 'black',
                  fontSize: 20,
                  margin: 5,
                  borderBottomColor: 'gray',
                  borderBottomWidth: 1,
                  width: '90%',
                }}>
                Te puede interesar
              </Text>
              <View style={stylesPod.contenedorPadrePod}>
                <PodcastsRelacionados navigation={props.navigation} />
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  } else {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }
}
