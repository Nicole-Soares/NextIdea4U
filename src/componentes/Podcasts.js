import React, {useContext} from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import {AppContext} from '../AppContext/AppContext';

export default function Podcasts() {
  const {listadoNoticiasPodcasts} = useContext(AppContext);
  return (
    <View style={{flexDirection: 'row', flexWrap: 'wrap',alignSelf: 'center', margin:20}}>
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
                    style={{height: 140, width: 140, borderRadius: 10}}
                  />
                </View>
                <View style={{marginBottom: 10, width: '85%'}}>
                  <Text
                    style={{
                      color: 'black',
                      fontSize: 17,
                      letterSpacing: 1,
                      fontWeight: 'bold',
                    }}>
                    {podcasts.title}
                  </Text>
                </View>
              </View>
            );
          })
        : null}
    </View>
  );
}
