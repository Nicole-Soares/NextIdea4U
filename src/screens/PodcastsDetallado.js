import React, {useEffect, useContext} from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import Navbar from '../componentes/Navbar';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';

import {AppContext} from '../AppContext/AppContext';

export default function PodcastsDetallado(props) {
  const {podcasts, setPodcasts} = useContext(AppContext);

  useEffect(() => {
    const llamadoNoticias = async () => {
      try {
        let llamado = await fetch(
          `https://nextidea4u.com/api/podcast/get-podcast.php?id=${props.route.params.idPodcast}`,
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
        <ScrollView>
          <Navbar navigation={props.navigation} />
          <View style={{alignItems: 'center', margin: 5, width: '100%'}}>
            <Text
              style={{
                color: 'black',
                fontWeight: 'bold',
                fontSize: 30,
                letterSpacing: 1,
              }}>
              {podcasts.news.titulo}
            </Text>

            <Text style={{color: 'black', fontSize: 15}}>
              {podcasts.podcast.descripcion_corta}
            </Text>
            <View style={{width: '100%'}}>
              <Image
                source={{uri: podcasts.podcast.imagen}}
                style={{
                  height: 220,
                  width: '90%',
                  marginTop: 15,
                  borderRadius: 5,
                  alignSelf: 'center',
                }}
              />
            </View>
          </View>

          <View>
            <Text
              style={{
                fontWeight: 'bold',
                color: 'black',
                fontSize: 18,
                borderBottomWidth: 1,
                borderBottomColor: 'gray',
                width: '90%',
                alignSelf: 'center',
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
                      style={{margin: 5}}>
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
          </View>
          <View>
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
          <View>
            <View
              style={{
                borderBottomColor: 'gray',
                borderBottomWidth: 1,
                width: '90%',
                alignSelf: 'center',
              }}>
              <Text style={{fontWeight: 'bold', color: 'black', fontSize: 20}}>
                Te puede interesar
              </Text>
              <NoticiaRelacionada navigation={props.navigation} />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  } else {
    return (
      <View>
        <Text>cargando</Text>
      </View>
    );
  }
}
