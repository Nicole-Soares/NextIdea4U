import React, {useEffect, useContext, useState, useRef} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
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
    let fecha = noticia.news.fecha_hora;
    console.log(fecha);
    let indice = noticia.news.fecha_hora.indexOf(' ');

    let extraida = noticia.news.fecha_hora.substring(0, indice);

    const monthNames = [
      'Enero',
      'Febrero',
      'Marzo',
      'Abril',
      'Mayo',
      'Junio',
      'Julio',
      'Agosto',
      'Septiembre',
      'Octubre',
      'Noviembre',
      'Diciembre',
    ];
    const m = new Date(extraida);
    const d = new Date(extraida);
    const a = new Date(extraida);
    let mes = monthNames[m.getMonth()];
    let dia = d.getDate();
    let ano = a.getFullYear();

    return (
      <SafeAreaView style={stylesNot.contenedorNoticiaScreen}>
        {menuHamburguesa ? (
          <MenuHamburguesa navigation={props.navigation} />
        ) : null}
        <Navbar navigation={props.navigation} />
        <ScrollView ref={scrollRef}>
          <View style={stylesNot.contenedorTextoNot}>
            <View style={{width: '90%', alignSelf: 'center', marginTop: 15}}>
              <Text
                style={{
                  color: '#005cff',
                  fontFamily: 'Inter-SemiBold',
                  fontSize: 15,
                  marginBottom: 15,
                  letterSpacing: 1,
                  marginTop: 15,
                }}>
                {noticia.news.subtitulo.toUpperCase()}
              </Text>
              <Text
                style={{
                  color: 'black',
                  fontFamily: 'Inter-Bold',
                  fontSize: 35,
                  width: '95%',
                }}>
                {noticia.news.titulo}
              </Text>
            </View>
            <View
              style={{
                alignSelf: 'center',
                marginTop: 15,
                marginBottom: 15,
                marginLeft: 15,
                width: '95%',
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
              <Text style={{marginLeft: 10}}>
                {dia} de {mes} del {ano}
              </Text>
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
                marginRight : 5
              }}>
              <AutoHeightWebView
                style={{
                  width: Dimensions.get('window').width - 30,
                  marginTop: 15,
                  marginLeft: 15,
                  marginRight : 25
                }}
                scalesPageToFit={false}
                customStyle={`img { width: 350px !important; height: 250px !important;}
                p {line-height:1.5}
                body {padding-right: 7px;}
                `}
                source={{
                  html: data,
                }}
                viewportContent={'width=device-width, user-scalable=no'}
             
              />
            </View>
          </View>
          {noticia.podcasts
            ? noticia.podcasts.map(podcasts => (
                <View
                  style={{
                    height: 280,
                    width:"100%"
                  }}>
                  <View
                    style={{
                      borderBottomColor: '#e9ecef',
                      borderBottomWidth: 1,
                      marginBottom: 15,
                      width: '90%',
                      alignSelf: 'center',
                    }}>
                    <Text
                      style={{
                        fontSize: 18,
                        color: 'black',
                        fontFamily: 'Inter-Bold',
                        width: '100%',

                        marginTop: 15,
                      }}>
                      También puedes escuchar el podcast de la nota
                    </Text>
                  </View>
                  <AutoHeightWebView
                style={{
                  width: Dimensions.get('window').width - 50,
                  alignSelf:"center"
                 
                }}
                scalesPageToFit={false}
               
                source={{
                  uri: podcasts.podcast,
                }}
                viewportContent={'width=device-width, user-scalable=no'}
              
              />
                
                </View>
              ))
            : null}

          <View>
            <View
              style={{
                borderBottomWidth: 1,
                borderBottomColor: '#f5f4f8',
                width: '90%',
                alignSelf: 'center',
                marginBottom: 15,
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
            <View
              style={{
                width: '95%',
                flexDirection: 'row',
                flexWrap: 'wrap',
                alignItems: 'center',
                marginLeft: 25,
              }}>
              {noticia.news.etiquetas.map(item => {
                return (
                  <View
                    style={{
                      marginBottom: 10,
                      borderWidth: 1,
                      borderColor: '#e9ecef',
                      borderRadius: 3,
                      marginRight: 10,
                      height: 25,
                    }}>
                    <Text
                      style={{
                        fontFamily: 'Inter-Bold',
                        textAlign: 'center',
                        fontSize: 12,
                        marginLeft: 5,
                        marginRight: 5,
                        marginTop: 3,
                        color: '#5c5776',
                      }}>
                      {item}
                    </Text>
                  </View>
                );
              })}
            </View>
          </View>

          <View style={stylesNot.contenedorOtrasNoticiasNot}>
            <View
              style={{
                borderBottomWidth: 1,
                borderBottomColor: '#f5f4f8',
                marginBottom: 20,
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
                              borderRadius: 5,
                              alignSelf: 'center',

                              marginBottom: 15,
                            }}
                          />
                          <Text
                            style={{
                              color: '#005cff',
                              fontFamily: 'Inter-Bold',
                              fontSize: 20,
                              marginLeft: 7,
                              marginBottom: 20,
                            }}>
                            {noticiaRe.subtitulo}.<Text> </Text>
                            <Text
                              style={{
                                color: 'black',
                                fontSize: 20,
                                fontFamily: 'Inter-Bold',
                                marginTop: 15,
                              }}>
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
      </SafeAreaView>
    );
  } else {
    return (
      <View>
        <ActivityIndicator size="large" color="#005cff" />
      </View>
    );
  }
}
