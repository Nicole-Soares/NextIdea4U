import React, {useEffect, useContext, useState, useRef} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {WebView} from 'react-native-webview';
import Navbar from '../componentes/Navbar';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import {AppContext} from '../AppContext/AppContext';
import MenuHamburguesa from '../componentes/MenuHamburguesa';
import {stylesNot} from '../theme/stylesNot';
import Share from 'react-native-share';
import AutoHeightWebView from 'react-native-autoheight-webview';
// screen noticia abierta

export default function NoticiaScreen(props) {
  const {noticia, setNoticia, menuHamburguesa} = useContext(AppContext);

  const scrollRef = useRef();

  // funcion para compartir
  const shareCustom = async () => {
    const shareOptions = {
      url: noticia.news.url,
    };
    try {
      const ShareResponse = await Share.open(shareOptions);
    } catch (error) {
      console.log(error);
    }
  };

  // actualizo la noticia y mando la vista para arriba

  const llamadoNoticiasRelacionadas = async idNoticia => {
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
        `https://nextidea4u.com/api/blog/get-blog.php?id=${idNoticia}`,
      );
      let respuesta = await llamado.json();

      setNoticia(respuesta);
    } catch (error) {
      console.log(error);
    }
  };
  //traigo la data la primera vez
  useEffect(() => {
    const llamadoNoticias = async () => {
      try {
        let llamado = await fetch(
          `https://nextidea4u.com/api/blog/get-blog.php?id=${props.route.params.idNoticia}`,
        );
        let respuesta = await llamado.json();

        setNoticia(respuesta);
      } catch (error) {
        console.log(error);
      }
    };
    llamadoNoticias();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (noticia) {
    const data = noticia.news.descripcion;
    let indice = noticia.news.fecha_hora.indexOf(' ');
    let extraida = noticia.news.fecha_hora.substring(0, indice);
    let reemplazo = extraida.replace(/-/g, '/');
    let reversa = reemplazo.split('/').reverse().join('/');

    return (
      <View style={stylesNot.contenedorNoticiaScreen}>
        {menuHamburguesa ? (
          <MenuHamburguesa navigation={props.navigation} />
        ) : null}
        <Navbar navigation={props.navigation} />
        <ScrollView ref={scrollRef}>
          <View style={stylesNot.contenedorTextoNot}>
            <View style={{width: '90%', alignSelf: 'center', marginTop: 15}}>
              <Text
                style={{
                  color: 'blue',
                  fontFamily: 'Inter-SemiBold',
                  fontSize: 13,
                  marginBottom: 15,
                }}>
                {noticia.news.subtitulo.toUpperCase()}
              </Text>
              <Text
                style={{
                  color: 'black',
                  fontFamily: 'Inter-Bold',
                  fontSize: 22,
                }}>
                {noticia.news.titulo}
              </Text>
            </View>
            <View
              style={{
                alignSelf: 'center',
                marginTop: 15,
                marginBottom: 15,
                width: '90%',
              }}>
              <Text style={stylesNot.textoDesDesNot}>
                {noticia.news.descripcion_corta}
              </Text>
            </View>

            <View style={stylesNot.contenedorNotIconFecha}>
              <Icon
                name="calendar"
                siez={30}
                color="gray"
                style={{marginLeft: 20, marginTop: 3}}
              />
              <Text style={{marginLeft: 10}}>{reversa}</Text>
            </View>

            <View style={{width: '100%', alignItems: 'center'}}>
              <Image
                source={{uri: noticia.news.imagen}}
                style={stylesNot.imagenNotAbierta}
              />
            </View>
            <View style={{margin: 5, alignSelf: 'center'}}>
              <TouchableOpacity
                onPress={() => shareCustom(noticia.news.url)}
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
                  Compartir noticia
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                width: '100%',
                marginTop: 10,
                marginBottom: 25,
                marginLeft: 5,
              }}>
              <AutoHeightWebView
                style={{
                  width: Dimensions.get('window').width - 50,
                  marginTop: 15,
                  marginLeft: 15,
                }}
                scalesPageToFit={false}
                customStyle={
                  (`* {font-size: 15px;}`,
                  `img { width: 350px !important; height: 250px !important; margin-left: 20}`)
                }
                source={{
                  html: data,
                }}
                viewportContent={'width=device-width, user-scalable=no'}
                onSizeUpdated={size => console.log(size.height)}
              />
            </View>
          </View>
          {noticia.podcasts
            ? noticia.podcasts.map(podcasts => (
                <View
                  style={{
                    height: 280,
                  }}>
                  <View
                    style={{
                      borderBottomColor: 'gray',
                      borderBottomWidth: 1,
                      marginBottom: 15,
                      width: '90%',
                      alignSelf: 'center',
                    }}>
                    <Text
                      style={{
                        fontSize: 20,
                        color: 'black',
                        fontWeight: 'bold',
                        width: '100%',

                        marginTop: 15,
                      }}>
                      También puedes escuchar el podcast de la nota
                    </Text>
                  </View>

                  <WebView
                    scrollEnabled={false}
                    source={{
                      uri: podcasts.podcast,
                    }}
                  />
                </View>
              ))
            : null}

          <View>
            <View
              style={{
                borderBottomWidth: 1,
                borderBottomColor: 'gray',
                width: '90%',
                alignSelf: 'center',
                marginBottom: 10,
                marginTop: -10,
              }}>
              <Text style={stylesNot.textoContNot}>Contactos de esta nota</Text>
            </View>

            <View style={{width: '100%'}}>
              {noticia ? (
                noticia.participants.map(participante => {
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
                      }}>
                      <Image
                        source={{uri: participante.imagen}}
                        style={stylesNot.imgContacNot}
                      />
                      <View style={{flexDirection: 'row', margin: 5}}>
                        <Text style={stylesNot.participanteNombreNot}>
                          {participante.nombre}
                        </Text>
                        <Text style={stylesNot.participanteApellidoNot}>
                          {participante.apellido}
                        </Text>
                        <Image
                          source={{uri: participante.pais_bandera}}
                          style={stylesNot.imagenContactNot}
                        />
                      </View>
                      <Text style={stylesNot.profesionContactoNot}>
                        {participante.profesion}
                      </Text>
                      <Text numberOfLines={4} style={stylesNot.biografiaNotDes}>
                        {participante.biografia}
                      </Text>
                    </LinearGradient>
                  );
                })
              ) : (
                <Text style={{display: 'none'}}></Text>
              )}
            </View>
            <Text style={{marginLeft: 24, marginTop: 10}}>
              {noticia.news.etiquetas}
            </Text>
          </View>

          <View style={stylesNot.contenedorOtrasNoticiasNot}>
            <View
              style={{
                borderBottomWidth: 1,
                borderBottomColor: 'gray',
                marginBottom: 15,
              }}>
              <Text style={stylesNot.textoOtrasNoticias}>
                Te puede interesar
              </Text>
            </View>

            <View style={{width: '100%', height: '100%'}}>
              {noticia
                ? noticia.related.map(noticiaRe => {
                    return (
                      <View style={{alignSelf: 'center', width: '100%'}}>
                        <TouchableOpacity
                          onPress={() =>
                            llamadoNoticiasRelacionadas(noticiaRe.noticia_id)
                          }>
                          <Image
                            source={{uri: noticiaRe.imagen}}
                            style={{
                              width: '95%',
                              height: 200,
                              borderRadius: 10,
                              alignSelf: 'center',

                              marginBottom: 15,
                            }}
                          />
                          <Text
                            style={{
                              color: 'blue',
                              fontFamily: 'Inter-Regular',
                              fontSize: 20,
                              marginLeft: 7,
                              marginBottom: 20,
                            }}>
                            {noticiaRe.subtitulo}.
                            <Text style={{color: 'black'}}>
                              {noticiaRe.titulo}
                            </Text>
                          </Text>
                        </TouchableOpacity>
                      </View>
                    );
                  })
                : null}
            </View>
          </View>
        </ScrollView>
      </View>
    );
  } else {
    return (
      <View>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }
}
