import React, {useContext} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';

import {AppContext} from '../AppContext/AppContext';

//el resto de noticias del home
export default function MoreNoticias({navigation}) {
  const {listadoNoticiasPodcasts, loading} = useContext(AppContext);

  return (
    <View style={{height: '100%', width: '100%'}}>
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
              marginBottom: 5,
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
                  navigation.navigate('NoticiaScreen', {
                    idNoticia: noticia.id,
                  })
                }
                key={noticia.id}>
                <View style={{width: '90%', alignSelf: 'center', margin: 20}}>
                  <Image
                    source={{uri: noticia.img}}
                    style={{width: '100%', height: 220, borderRadius: 10}}
                  />

                  <View
                    style={{
                      margin: 5,
                      flexDirection: 'row',
                      width: '100%',
                      justifyContent: 'space-between',
                    }}>
                    <Text
                      style={{
                        color: '#005cff',
                        fontFamily: 'Inter-Bold',
                        fontSize: 20,
                      }}>
                      {noticia.subtitulo}.<Text> </Text>
                      <Text style={{color: 'black'}}>{noticia.title}</Text>
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            );
          })
        : null}

      {loading ? <ActivityIndicator size="large" color="blue" /> : null}
    </View>
  );
}
