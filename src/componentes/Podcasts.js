import React, {useContext} from 'react';
import {
  View,
  Text,
  Image,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import {AppContext} from '../AppContext/AppContext';
import {stylesPod} from '../theme/stylesPod';
import Icon from 'react-native-vector-icons/FontAwesome';

//los podcasts del home

export default function Podcasts({navigation}) {
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
            }}>
            {listadoNoticiasPodcasts
              ? listadoNoticiasPodcasts.podcasts.map(podcasts => {
                  return (
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate('PodcastsDetallado', {
                          idPodcasts: podcasts.id,
                        })
                      }
                      key={podcasts.id}>
                      <View
                        style={{
                          width: '50%',
flexDirection: 'row',
                          flexWrap: 'wrap',
                        }}>
                        <View
                          style={{
                            width: '100%',
                          }}>
                          <Image
                            source={{uri: podcasts.img}}
                            style={stylesPod.imagenPod}
                          />
                        </View>
                        <View style={stylesPod.segundoContenedorTituloPod}>
                          <Text style={stylesPod.textoPod}>
                            {podcasts.title}
                          </Text>
                        </View>
                      </View>
                    </TouchableOpacity>
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
