import React, {useEffect, useContext, useState, useRef} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import {WebView} from 'react-native-webview';
import Navbar from '../componentes/Navbar';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import {AppContext} from '../AppContext/AppContext';
import MenuHamburguesa from '../componentes/MenuHamburguesa';
import {stylesNot} from '../theme/stylesNot';
import Share from 'react-native-share';

// screen noticia abierta

export default function NoticiaScreen(props) {
  const {noticia, setNoticia, menuHamburguesa} = useContext(AppContext);
  const [webViewHeight, setWebViewHeight] = useState(null);
  const scrollRef = useRef();

  //inyecto js para los estilos del webview
  const INJECTED_JAVASCRIPT = `(function() {
    let body = document.getElementsByTagName("BODY")[0];
   body.style.fontSize = "38px";
  
  
  let imagen = document.getElementsByTagName("img");
  image.style.width= "100px"

 })();`;

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

    return (
      <View style={stylesNot.contenedorNoticiaScreen}>
        {menuHamburguesa ? (
          <MenuHamburguesa navigation={props.navigation} />
        ) : null}
        <Navbar navigation={props.navigation} />
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            height: webViewHeight,
            margin: 5,
          }}
          ref={scrollRef}>
          <View style={stylesNot.contenedorTextoNot}>
            <Text style={stylesNot.textoNotTitulo}>{noticia.news.titulo}</Text>
            <Text style={stylesNot.subtituloNot}>
              {noticia.news.subtitulo}.
            </Text>
            <Text style={stylesNot.textoDesDesNot}>
              {noticia.news.descripcion_corta}
            </Text>
            <View style={stylesNot.contenedorNotIconFecha}>
              <Icon
                name="calendar"
                siez={30}
                color="gray"
                style={{marginRight: 10}}
              />
              <Text>{reemplazo}</Text>
            </View>

            <View style={{width: '100%'}}>
              <Image
                source={{uri: noticia.news.imagen}}
                style={stylesNot.imagenNotAbierta}
              />
              <View style={{margin: 5}}>
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
              <View style={{height: 3950, marginRight: 20}}>
                <WebView
                  scrollEnabled={false}
                  source={{
                    html: data,
                  }}
                  injectedJavaScript={INJECTED_JAVASCRIPT}
                />
              </View>
            </View>
          </View>
          {noticia.podcasts
            ? noticia.podcasts.map(podcasts => (
                <View style={{height: 300}}>
                  <Text
                    style={{
                      fontSize: 17,
                      color: 'black',
                      fontWeight: 'bold',
                      borderBottomColor: 'gray',
                      borderBottomWidth: 1,
                      margin: 5,
                    }}>
                    También puedes escuchar el podcast de la nota
                  </Text>
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
            <Text style={stylesNot.textoContNot}>Contactos de esta nota</Text>
            <View style={{width: '100%'}}>
              {noticia ? (
                noticia.participants.map(participante => {
                  return (
                    <LinearGradient
                      colors={['#212529', '#1d4da2']}
                      start={{x: 0.1, y: 0.9}}
                      end={{x: 0.7, y: 0.6}}
                      style={{margin: 5, borderRadius: 5}}>
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
                      <Text style={stylesNot.biografiaNotDes}>
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

          <View style={stylesNot.contenedorOtrasNoticiasNot}>
            <Text style={stylesNot.textoOtrasNoticias}>Te puede interesar</Text>
            <View style={{width: '100%', height: '100%'}}>
              {noticia
                ? noticia.related.map(noticiaRe => {
                    return (
                      <View
                        style={{alignSelf: 'center', width: '100%', margin: 5}}>
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
                              margin: 5,
                            }}
                          />
                          <Text
                            style={{
                              color: 'blue',
                              fontSize: 20,
                              marginLeft: 10,
                            }}>
                            {noticiaRe.subtitulo}.
                          </Text>
                          <Text
                            style={{
                              color: 'black',
                              fontSize: 20,
                              marginLeft: 10,
                            }}>
                            {noticiaRe.titulo}
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
