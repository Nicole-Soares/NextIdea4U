import React, {useContext} from 'react';
import {View, Text, Image, ActivityIndicator} from 'react-native';
import {AppContext} from '../AppContext/AppContext';
import {stylesPod} from '../theme/stylesPod';
import Icon from 'react-native-vector-icons/FontAwesome';

//los podcasts del home

export default function Podcasts() {
  const {listadoNoticiasPodcasts} = useContext(AppContext);

  return (
    <View>
      {listadoNoticiasPodcasts ? (
        <View style={stylesPod.segundoContenedorPadrePod}>
          <View style={stylesPod.contenedorTituloPod}>
            <Icon name="podcast" color="grey" size={20} />

            <Text style={stylesPod.titulo}>Podcasts</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              alignSelf: 'center',
              margin: 5,
            }}>
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
        </View>
      ) : (
        <ActivityIndicator size="large" color="#0000ff" />
      )}
    </View>
  );
}
