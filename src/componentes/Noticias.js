import React, {useContext} from 'react';
import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import {AppContext} from '../AppContext/AppContext';
import Podcasts from './Podcasts';
import MoreNoticias from './MoreNoticias';
import {stylesNot} from '../theme/stylesNot';
import {stylesPod} from '../theme/stylesPod';

//noticias del home
export default function Noticias({navigation}) {
  const {listadoNoticiasPodcasts} = useContext(AppContext);

  return (
    <ScrollView>
      {listadoNoticiasPodcasts
        ? listadoNoticiasPodcasts.news.map((noticia, index) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('NoticiaScreen', {idNoticia: noticia.id})
                }
                key={noticia.id}>
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
              </TouchableOpacity>
            );
          })
        : null}
      <View style={stylesPod.contenedorPadrePod}>
        <Podcasts navigation={navigation} />
      </View>

      <View>
        <MoreNoticias navigation={navigation} />
      </View>
    </ScrollView>
  );
}
