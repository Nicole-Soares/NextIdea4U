import React, {useContext, useEffect} from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import {AppContext} from '../AppContext/AppContext';
import Podcasts from './Podcasts';
import MoreNoticias from './MoreNoticias';
import Icon from 'react-native-vector-icons/FontAwesome';
import {stylesNot} from '../theme/stylesNot';
import {stylesPod} from '../theme/stylesPod';

export default function Noticias() {
  const {listadoNoticiasPodcasts} = useContext(AppContext);
  return (
    <ScrollView>
      {listadoNoticiasPodcasts
        ? listadoNoticiasPodcasts.news.map((noticia, index) => {
            return (
              <View style={stylesNot.contenedorPadreNot}>
                <Image
                  source={{uri: noticia.img}}
                  style={stylesNot.imagenNot}
                />
                <View style={stylesNot.contenedorDatosNot}>
                  <View style={{width: '40%'}}>
                    <Text style={stylesNot.textoTituloNot}>
                      {noticia.subtitulo}.
                    </Text>
                  </View>
                  <View style={{width: '60%'}}>
                    <Text style={stylesNot.tituloPrincipalNot}>
                      {noticia.title}
                    </Text>
                  </View>
                </View>
                <View>
                  <Text style={stylesNot.textoDesNot}>
                    {index === 0 ? <Text>{noticia.desc}</Text> : null}
                  </Text>
                </View>
              </View>
            );
          })
        : null}
      <View style={stylesPod.contenedorPadrePod}>
        <View style={stylesPod.contenedorTituloPod}>
          <Icon name="podcast" color="grey" size={20} />

          <Text style={stylesPod.titulo}>
            Podcasts
          </Text>
        </View>

        <View>
          <Podcasts />
        </View>
      </View>

      <View>
        <MoreNoticias />
      </View>
    </ScrollView>
  );
}
