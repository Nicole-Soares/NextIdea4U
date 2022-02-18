import React, {useContext} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {AppContext} from '../AppContext/AppContext';

//el resto de noticias del home
export default function MoreNoticias({navigation}) {
  const {listadoNoticiasPodcasts} = useContext(AppContext);
  return (
    <View style={{height: '100%'}}>
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
                  <View
                    style={{
                      margin: 5,
                      flexDirection: 'row',
                      width: '100%',
                      justifyContent: 'space-between',
                    }}>
                    <View style={{width: '40%'}}>
                      <Text
                        style={{
                          fontSize: 20,
                          color: 'blue',
                          fontWeight: 'bold',
                        }}>
                        {noticia.subtitulo}.
                      </Text>
                    </View>
                    <View style={{width: '60%'}}>
                      <Text
                        style={{
                          fontSize: 20,
                          color: 'black',
                          fontWeight: 'bold',
                        }}>
                        {noticia.title}
                      </Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            );
          })
        : null}
    </View>
  );
}
