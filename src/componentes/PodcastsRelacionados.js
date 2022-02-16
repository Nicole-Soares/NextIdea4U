import React, {useContext} from 'react';
import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import {AppContext} from '../AppContext/AppContext';

//podcasts relacionados de los podcasts abiertos

export default function PodcastsRelacionados({navigation}) {
  const {podcasts} = useContext(AppContext);

  return (
    <View
      style={{
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignSelf: 'center',
        margin: 5,
      }}>
      {podcasts
        ? podcasts.related.map(podcastsRe => {
            return (
              <View
                style={{
                  alignSelf: 'center',
                  width: '50%',
                  margin: 5,
                  flexWrap: 'wrap',
                }}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('PodcastsDetallado', {
                      idPodcasts: podcastsRe.podcast_id,
                    })
                  }
                  style={{width: '100%'}}>
                  <Image
                    source={{uri: podcastsRe.imagen}}
                    style={{
                      width: '100%',
                      height: 190,
                      borderRadius: 10,

                      margin: 5,
                    }}
                  />
                  <Text
                    style={{
                      color: 'black',
                      fontSize: 15,
                      marginLeft: 10,
                      width: '90%',
                    }}>
                    {podcastsRe.titulo}
                  </Text>
                </TouchableOpacity>
              </View>
            );
          })
        : null}
    </View>
  );
}
