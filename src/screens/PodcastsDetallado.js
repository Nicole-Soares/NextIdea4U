import React, {useEffect, useContext, useState, useRef} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  Linking,
  document,
} from 'react-native';
import Navbar from '../componentes/Navbar';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import {WebView} from 'react-native-webview';
import {AppContext} from '../AppContext/AppContext';
import {stylesPod} from '../theme/stylesPod';
import MenuHamburguesa from '../componentes/MenuHamburguesa';

//screen podcasts abierto

export default function PodcastsDetallado(props) {
  const {podcasts, setPodcasts, menuHamburguesa, setMenuHamburguesa} =
    useContext(AppContext);
  const [setWebViewHeight] = useState(null);
  const scrollRef = useRef();
  console.log(props.navigation);
  const INJECTED_JAVASCRIPT = `(function() {
      let body = document.getElementsByTagName("BODY")[0];
     body.style.fontSize = "30px";
   })();`;
  const INJECTED_JAVASCRIPTPOD = `(function() {
    let body = document.getElementsByTagName("BODY")[0];
   body.style.width = "90%";
 })();`;

  const onMessage = event => {
    setWebViewHeight(Number(event.nativeEvent.data));
  };

  const llamadoPodcastsRelacionados = async idPodcasts => {
    setTimeout(
      () =>
        scrollRef.current?.scrollTo({
          y: 0,
          animated: true,
        }),
      1000,
    );
    try {
      let llamado = await fetch(
        `https://nextidea4u.com/api/podcast/get-podcast.php?id=${idPodcasts}`,
      );
      let respuesta = await llamado.json();

      setPodcasts(respuesta);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
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
    const data = podcasts.podcast.texto;
    let indice = podcasts.podcast.fecha_alta.indexOf(' ');
    let extraida = podcasts.podcast.fecha_alta.substring(0, indice);
    let reemplazo = extraida.replace(/-/g, '/');

    return (
      <View>
        {menuHamburguesa ? (
          <MenuHamburguesa navigation={props.navigation} />
        ) : null}
        <Navbar navigation={props.navigation} />
        <ScrollView ref={scrollRef}>
          {podcasts ? (
            <View>
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
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Icon
                    name="calendar"
                    siez={30}
                    color="gray"
                    style={{marginRight: 10}}
                  />
                  <Text>{reemplazo}</Text>
                </View>
              </View>
              <View style={{width: '100%'}}>
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
              {podcasts.participants.map(participante => {
                return (
                  <LinearGradient
                    colors={['#212529', '#1d4da2']}
                    start={{x: 0.1, y: 0.9}}
                    end={{x: 0.7, y: 0.6}}
                    style={{margin: 10}}
                    key={participante.id}>
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
                      <Image
                        source={{uri: participante.pais_bandera}}
                        style={{height: 30, width: 30, marginLeft: 10}}
                      />
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
              })}

              <View style={{width: '100%'}}>
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

                <View style={{width: '100%'}}>
                  {podcasts.news.map(noticiaRePod => {
                    return (
                      <TouchableOpacity
                        onPress={() =>
                          props.navigation.navigate('NoticiaScreen', {
                            idNoticia: noticiaRePod.noticia_id,
                          })
                        }
                        key={noticiaRePod.id}>
                        <View
                          style={{
                            alignSelf: 'center',
                            width: '100%',
                            margin: 5,
                          }}>
                          <Image
                            source={{uri: noticiaRePod.imagen}}
                            style={{
                              width: '95%',
                              height: 200,
                              borderRadius: 10,
                              alignSelf: 'center',
                              margin: 5,
                            }}
                          />
                          <Text
                            style={{
                              color: 'blue',
                              fontSize: 20,
                              marginLeft: 10,
                            }}>
                            {noticiaRePod.subtitulo}.
                          </Text>
                          <Text
                            style={{
                              color: 'black',
                              fontSize: 17,
                              marginLeft: 10,
                            }}>
                            {noticiaRePod.titulo}
                          </Text>
                        </View>
                      </TouchableOpacity>
                    );
                  })}
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
                    <View
                      style={{
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        marginLeft: 10,
                        marginTop: 10,
                        width: '100%',
                      }}>
                      {podcasts
                        ? podcasts.related.map(podcastsRe => {
                            return (
                              <View
                                style={{
                                  width: '50%',
                                }}
                                key={podcastsRe.id}>
                                <TouchableOpacity
                                  onPress={() =>
                                    llamadoPodcastsRelacionados(
                                      podcastsRe.podcast_id,
                                    )
                                  }
                                  style={{width: '100%'}}>
                                  <Image
                                    source={{uri: podcastsRe.imagen}}
                                    style={{
                                      width: '90%',
                                      height: 180,
                                      borderRadius: 10,
                                    }}
                                  />
                                  <Text
                                    style={{
                                      color: 'black',
                                      fontSize: 15,
                                      marginLeft: 10,
                                      width: '90%',
                                    }}>
                                    {podcastsRe.titulo}
                                  </Text>
                                </TouchableOpacity>
                              </View>
                            );
                          })
                        : null}
                    </View>
                  </View>
                </View>
              </View>
            </View>
          ) : (
            <ActivityIndicator size="large" color="pink" />
          )}
        </ScrollView>
      </View>
    );
  } else {
    return <ActivityIndicator size="large" color="blue" />;
  }
}
