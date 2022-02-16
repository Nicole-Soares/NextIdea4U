import React, {useContext} from 'react';
import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import {AppContext} from '../AppContext/AppContext';

export default function NoticiaRelacionada({navigation}) {
  const {noticia} = useContext(AppContext);
  
  return (
    <ScrollView style={{height: '100%'}}>
      <View style={{width: '100%', height: '100%'}}>
        {noticia
          ? noticia.related.map(noticiaRe => {
              return (
                <View style={{alignSelf: 'center', width: '100%', margin: 5}}>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate('NoticiaScreen', {
                        idNoticia: noticiaRe.noticia_id,
                      })
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
                    <Text style={{color: 'blue', fontSize: 20, marginLeft: 10}}>
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
    </ScrollView>
  );
}
