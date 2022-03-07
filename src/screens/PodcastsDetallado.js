import React, {useEffect, useContext, useState, useRef} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  Linking,
  Dimensions,
} from 'react-native';
import Navbar from '../componentes/Navbar';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import {WebView} from 'react-native-webview';
import {AppContext} from '../AppContext/AppContext';
import {stylesPod} from '../theme/stylesPod';
import MenuHamburguesa from '../componentes/MenuHamburguesa';
import Share from 'react-native-share';
import AutoHeightWebView from 'react-native-autoheight-webview';

//screen podcasts abierto

export default function PodcastsDetallado(props) {
  const {podcasts, setPodcasts, menuHamburguesa} = useContext(AppContext);
  const [webViewHeight, setWebViewHeight] = useState(null);
  const scrollRef = useRef();

  //funcion para compartir

  const shareCustom = async () => {
    const shareOptions = {
      url: podcasts.podcast.url,
    };
    try {
      const ShareResponse = await Share.open(shareOptions);
    } catch (error) {
      console.log(error);
    }
  };

  const onMessage = event => {
    setWebViewHeight(Number(event.nativeEvent.data));
  };

  // funcion para actualizar los podcasts y mandar la vista para arriba
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
  //traigo los podcasts con la api
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (podcasts) {
    const data = podcasts.podcast.texto;
    let indice = podcasts.podcast.fecha_alta.indexOf(' ');
    let extraida = podcasts.podcast.fecha_alta.substring(0, indice);
    let reemplazo = extraida.replace(/-/g, '/');
    let reversa = reemplazo.split('/').reverse().join('/');

    return (
      <View style={{backgroundColor: 'white', height: '100%'}}>
        {menuHamburguesa ? (
          <MenuHamburguesa navigation={props.navigation} />
        ) : null}
        <Navbar navigation={props.navigation} />
        <ScrollView
          ref={scrollRef}
          contentContainerStyle={{
            flexGrow: 1,
            height: webViewHeight,
          }}>
          {podcasts ? (
            <View style={{marginLeft: 5}}>
              <Icon
                name="podcast"
                color="grey"
                size={30}
                style={{marginLeft: 10, marginTop: 10}}
              />
              <View style={{margin: 10, width: '100%', alignItems: 'center'}}>
                <Text
                  style={{
                    color: 'black',
                    fontWeight: 'bold',
                    fontSize: 25,
                    width: '100%',
                    marginBottom: 10,
                  }}>
                  {podcasts.podcast.titulo}
                </Text>

                <Text
                  style={{
                    color: 'black',
                    fontSize: 17,
                    width: '95%',
                    marginLeft: -18,
                  }}>
                  {podcasts.podcast.descripcion_corta}
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    width: '98%',
                    marginTop: 15,
                  }}>
                  <Icon
                    name="calendar"
                    siez={30}
                    color="gray"
                    style={{marginRight: 10}}
                  />
                  <Text>{reversa}</Text>
                </View>
              </View>
              <View
                style={{
                  height: 200,
                  alignSelf: 'center',
                  width: '95%',
                  marginLeft: -5,
                }}>
                <WebView
                  scrollEnabled={false}
                  source={{
                    uri: podcasts.podcast.podcast,
                  }}
                  onMessage={() => onMessage()}
                  style={{height: 300, marginTop: 15}}
                />
              </View>
              <View style={{alignSelf: 'center', marginBottom: 10}}>
                <TouchableOpacity
                  onPress={() => shareCustom()}
                  style={{
                    borderColor: 'black',
                    borderRadius: 10,
                    borderWidth: 2,
                    width: '50%',
                    flexDirection: 'row',
                    margin: 5,
                    justifyContent: 'space-around',
                  }}>
                  <Icon name="share" color="black" size={20} />
                  <Text
                    style={{color: 'black', fontWeight: 'bold', fontSize: 15}}>
                    Compartir Podcast
                  </Text>
                </TouchableOpacity>
              </View>

              <AutoHeightWebView
                style={{
                  width: Dimensions.get('window').width - 50,
                  marginLeft: 15,
                  marginTop: 15,
                }}
                scalesPageToFit={false}
                customStyle={`* {font-size: 17px;}`}
                source={{
                  html: data,
                }}
                viewportContent={'width=device-width, user-scalable=no'}
                onSizeUpdated={size => console.log(size.height)}
              />

              <View style={{width: '100%', marginTop: 30}}>
                <View
                  style={{
                    borderBottomColor: 'gray',
                    borderBottomWidth: 1,
                    width: '90%',
                    alignSelf: 'center',
                  }}>
                  <Text
                    style={{
                      color: 'black',
                      fontWeight: 'bold',
                      fontSize: 20,
                      width: '100%',
                      marginBottom: 10,
                    }}>
                    Tambien disponible en las plataformas:
                  </Text>
                </View>
                <View
                  style={{flexDirection: 'row', marginLeft: 15, marginTop: 15}}>
                  <TouchableOpacity
                    style={{
                      backgroundColor: '#005cff',
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
                      backgroundColor: '#005cff',
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
                    backgroundColor: '#005cff',
                    flexDirection: 'row',
                    margin: 5,
                    borderRadius: 3,
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: 150,
                    height: 30,
                    marginLeft: 20,
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
              <View
                style={{
                  borderBottomColor: 'gray',
                  borderBottomWidth: 1,
                  width: '90%',
                  alignSelf: 'center',
                  marginTop: 15,
                }}>
                <Text
                  style={{
                    fontFamily: 'Inter-Bold',
                    color: 'black',
                    fontSize: 20,
                    marginBottom: 10,
                  }}>
                  Contactos de esta nota
                </Text>
              </View>
              {podcasts.participants.map(participante => {
                return (
                  <LinearGradient
                    colors={['#212529', '#1d4da2']}
                    start={{x: 0.1, y: 0.9}}
                    end={{x: 0.7, y: 0.6}}
                    style={{
                      margin: 5,
                      borderRadius: 5,
                      width: '90%',
                      alignSelf: 'center',
                      padding: 24,
                      marginTop: 15,
                    }}
                    key={participante.id}>
                    <Image
                      source={{uri: participante.imagen}}
                      style={{
                        height: 90,
                        width: 90,
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
                    <Text
                      style={{color: 'white', margin: 5, fontSize: 15}}
                      numberOfLines={4}>
                      {participante.biografia}
                    </Text>
                  </LinearGradient>
                );
              })}

              <View>
                <View
                  style={{
                    borderBottomColor: 'gray',
                    borderBottomWidth: 1,
                    width: '90%',
                    alignSelf: 'center',
                    marginTop: 15,
                  }}>
                  <Text
                    style={{
                      color: 'black',
                      fontFamily: 'Inter-Bold',
                      fontSize: 20,
                      marginBottom: 15,
                      width: '100%',
                    }}>
                    Noticias relacionadas al podcast
                  </Text>
                </View>

                <View
                  style={{
                    width: '100%',
                    marginTop: 10,
                  }}>
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
                              width: '90%',
                              height: 200,
                              borderRadius: 10,
                              alignSelf: 'center',
                            }}
                          />
                          <Text
                            style={{
                              color: 'blue',
                              fontFamily: 'Inter-Regular',
                              fontSize: 20,
                              alignSelf: 'center',
                              width: '95%',
                              marginLeft: 20,
                            }}>
                            {noticiaRePod.subtitulo}.<Text> </Text>
                            <Text style={{color: 'black'}}>
                              {noticiaRePod.titulo}
                            </Text>
                          </Text>
                        </View>
                      </TouchableOpacity>
                    );
                  })}
                </View>
                <View style={{width: '100%'}}>
                  <View
                    style={{
                      borderBottomColor: 'gray',
                      borderBottomWidth: 1,
                      width: '90%',
                      alignSelf: 'center',
                    }}>
                    <Text
                      style={{
                        fontWeight: 'bold',
                        color: 'black',
                        fontSize: 20,
                        margin: 5,
                        marginTop: 15,
                      }}>
                      Te puede interesar
                    </Text>
                  </View>

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
                                <ScrollView>
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
                                        height: 170,
                                        borderRadius: 10,
                                      }}
                                    />
                                    <Text
                                      style={{
                                        color: 'black',
                                        fontSize: 15,
                                        marginLeft: 5,
                                        width: '90%',
                                        marginTop: 5,
                                        fontFamily: 'Inter-Bold',
                                        marginBottom: 10,
                                      }}>
                                      {podcastsRe.titulo}
                                    </Text>
                                  </TouchableOpacity>
                                </ScrollView>
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
