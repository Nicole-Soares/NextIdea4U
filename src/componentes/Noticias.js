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
                  {index !== 0 ? (
                    <View style={{marginLeft: 10}}>
                      <Text
                        style={{
                          color: 'white',
                          backgroundColor: 'black',
                          textAlign: 'center',
                          fontSize: 12,
                          fontFamily: 'Inter-SemiBold',
                          position: 'relative',
                          top: -30,

                          borderRadius: 5,
                          borderWidth: 1,
                          alignSelf: 'flex-start',
                          paddingLeft: 10,
                          paddingRight: 10,
                        }}>
                        {noticia.categoria.toUpperCase()}
                      </Text>
                    </View>
                  ) : null}
                  <View style={stylesNot.contenedorDatosNot}>
                    {index === 0 ? (
                      <Text
                        style={{
                          width: '100%',
                          color: 'black',
                          fontSize: 21,
                          fontFamily: 'Inter-Bold',
                          marginTop: 15,
                        }}>
                        <Text
                          style={{
                            color: 'blue',
                            fontFamily: 'Inter-Bold',
                            fontSize: 21,
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
                          fontSize: 21,
                          fontFamily: 'Inter-Regular',
                        }}>
                        <Text
                          style={{
                            color: 'blue',
                            fontFamily: 'Inter-Regular',
                            fontSize: 21,
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
