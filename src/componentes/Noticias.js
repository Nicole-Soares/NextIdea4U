import React, {useContext, useEffect} from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import {AppContext} from '../AppContext/AppContext';
import Podcasts from './Podcasts';
import MoreNoticias from './MoreNoticias';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Noticias() {
  const {listadoNoticiasPodcasts} = useContext(AppContext);
  return (
    <ScrollView>
      {listadoNoticiasPodcasts
        ? listadoNoticiasPodcasts.news.map((noticia, index) => {
            return (
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
                <View>
                  <Text style={{color: 'black', fontSize: 15}}>
                    {
                    index === 0 ? 
                      <Text>{noticia.desc}</Text>
                    
                    : null
                    }
                  </Text>
                </View>
              </View>
            );
          })
        : null}
      <View
        style={{
          width: '90%',
          backgroundColor: '#EFEFEF',
          borderRadius: 5,
          alignSelf: 'center',
          margin: 20,
        }}>
        <View
          style={{
            flexDirection: 'row',
            margin: 10,
            width: '30%',
            justifyContent: 'space-between',
          }}>
          <Icon name="podcast" color="grey" size={20} />

          <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>
            Podcasts
          </Text>
        </View>

        <View>
          <Podcasts />
        </View>
      </View>

      <View>
        <MoreNoticias />
      </View>
    </ScrollView>
  );
}
