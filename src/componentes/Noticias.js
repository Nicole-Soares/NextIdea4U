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
                    {index === 0 ? (
                      <Text
                        style={{
                          width: '100%',
                          color: 'black',
                          fontSize: 25,
                          fontFamily: 'Inter-Bold',
                          marginTop: 15,
                        }}>
                        <Text
                          style={{
                            color: '#005cff',
                            fontFamily: 'Inter-Bold',
                            fontSize: 25,
                          }}>
                          {noticia.subtitulo}.
                        </Text>
                        <Text> </Text>
                        {noticia.title}
                      </Text>
                    ) : (
                      <Text
                        style={{
                          width: '100%',
                          color: 'black',
                          fontSize: 20,
                          fontFamily: 'Inter-SemiBold',
                        }}>
                        <Text
                          style={{
                            color: '#005cff',
                            fontFamily: 'Inter-SemiBold',
                            fontSize: 20,
                          }}>
                          {noticia.subtitulo}.
                        </Text>
                        <Text> </Text>
                        {noticia.title}
                      </Text>
                    )}
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
