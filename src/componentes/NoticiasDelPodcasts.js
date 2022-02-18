import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {useContext} from 'react';
import {AppContext} from '../AppContext/AppContext';

export function NoticiasDelPodcasts() {
  const {podcasts} = useContext(AppContext);
  return (
    <View>
      {podcasts.news.map(noticiaRePod => {
        return (
          <TouchableOpacity
            onPress={() => navigation.navigate('Ingresar')}
            key={noticiaRePod.id}>
            <View
              style={{
                alignSelf: 'center',
                width: '100%',
                margin: 5,
              }}>
              <Image
                source={{uri: noticiaRePod.imagen}}
                style={{
                  width: '95%',
                  height: 200,
                  borderRadius: 10,
                  alignSelf: 'center',
                  margin: 5,
                }}
              />
              <Text
                style={{
                  color: 'blue',
                  fontSize: 20,
                  marginLeft: 10,
                }}>
                {noticiaRePod.subtitulo}.
              </Text>
              <Text
                style={{
                  color: 'black',
                  fontSize: 17,
                  marginLeft: 10,
                }}>
                {noticiaRePod.titulo}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
