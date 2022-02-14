import React, {useEffect, useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {WebView} from 'react-native-webview';
import noticiaFormatter from '../utils/noticiaFormatter';
import Navbar from '../componentes/Navbar';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function NoticiaScreen(props) {
  const [noticia, setNoticia] = useState(null);
  console.log(props.route.params.idNoticia);
  useEffect(() => {
    console.log('hola');
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
    console.log(noticia);
    return (
      <View
        style={{
          height: '100%',
          width: '100%',
        }}>
        <Navbar />
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
        </View>
        <View style={{alignSelf: 'center'}}>
          <Text style={{color: 'black', fontWeight: 'bold', fontSize: 20}}>
            {noticia.news.subtitulo}.
          </Text>
          <Text style={{color: 'black', fontSize: 15}}>
            {noticia.news.descripcion_corta}
          </Text>
        </View>
        <View>
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
        <WebView
          source={{html: noticiaFormatter(data)}}
          style={{alignContent: 'center', width: '100%'}}
        />
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
