import React, {useContext} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {AppContext} from '../AppContext/AppContext';

//el resto de noticias del home
export default function MoreNoticias({navigation}) {
  const {listadoNoticiasPodcasts} = useContext(AppContext);
  return (
    <View style={{height: '100%'}}>
      {listadoNoticiasPodcasts ? (
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
              fontFamily: 'Inter-Bold',
              fontSize: 20,
              alignSelf: 'center',
              width: '100%',
              marginBottom: 10,
            }}>
            Más noticias
          </Text>
        </View>
      ) : null}
      {listadoNoticiasPodcasts
        ? listadoNoticiasPodcasts.more.map(noticia => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('NoticiaScreen', {idNoticia: noticia.id})
                }
                key={noticia.id}>
                <View style={{width: '90%', alignSelf: 'center', margin: 20}}>
                  <Image
                    source={{uri: noticia.img}}
                    style={{width: '100%', height: 220, borderRadius: 10}}
                  />
                  <View style={{width: '40%'}}>
                    <Text
                      style={{
                        color: 'white',
                        backgroundColor: 'black',
                        textAlign: 'center',
                        fontSize: 12,
                        fontFamily: 'Inter-SemiBold',
                        position: 'relative',
                        top: -30,
                        marginLeft: 10,
                        borderRadius: 5,
                        borderWidth: 1,
                      }}>
                      {noticia.categoria.toUpperCase()}
                    </Text>
                  </View>
                  <View
                    style={{
                      margin: 5,
                      flexDirection: 'row',
                      width: '100%',
                      justifyContent: 'space-between',
                    }}>
                    <Text
                      style={{
                        color: 'blue',
                        fontFamily: 'Inter-Regular',
                        fontSize: 22,
                      }}>
                      {noticia.subtitulo}.
                      <Text style={{color: 'black'}}>{noticia.title}</Text>
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            );
          })
        : null}
    </View>
  );
}
