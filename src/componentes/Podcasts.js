import React, {useContext} from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import {AppContext} from '../AppContext/AppContext';
import {stylesPod} from '../theme/stylesPod';

export default function Podcasts() {
  const {listadoNoticiasPodcasts} = useContext(AppContext);
  return (
    <View style={stylesPod.segundoContenedorPadrePod}>
      {listadoNoticiasPodcasts
        ? listadoNoticiasPodcasts.podcasts.map(podcasts => {
            return (
              <View style={{width: '50%'}}>
                <View
                  style={{
                    width: '40%',
                  }}>
                  <Image
                    source={{uri: podcasts.img}}
                    style={stylesPod.imagenPod}
                  />
                </View>
                <View style={stylesPod.segundoContenedorTituloPod}>
                  <Text style={stylesPod.textoPod}>{podcasts.title}</Text>
                </View>
              </View>
            );
          })
        : null}
    </View>
  );
}
