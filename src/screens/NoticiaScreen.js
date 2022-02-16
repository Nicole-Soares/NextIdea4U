import React, {useEffect, useContext} from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import {WebView} from 'react-native-webview';
import noticiaFormatter from '../utils/noticiaFormatter';
import Navbar from '../componentes/Navbar';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import NoticiaRelacionada from '../componentes/NoticiaRelacionada';
import {AppContext} from '../AppContext/AppContext';

export default function NoticiaScreen(props) {
  const {noticia, setNoticia} = useContext(AppContext);

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
  }, []);

  if (noticia) {
    const data = noticia.news.descripcion;

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
              {noticia.news.titulo}
            </Text>
            <Text style={{color: 'black', fontWeight: 'bold', fontSize: 20}}>
              {noticia.news.subtitulo}.
            </Text>
            <Text style={{color: 'black', fontSize: 15}}>
              {noticia.news.descripcion_corta}
            </Text>
            <View style={{width: '100%'}}>
              <Image
                source={{uri: noticia.news.imagen}}
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
              {noticia ? (
                noticia.participants.map(participante => {
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
                          margin:5
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
            <Text>{noticia.news.etiquetas}</Text>
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
