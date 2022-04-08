import React from 'react';
import {View} from 'react-native';
import Podcasts from './Podcasts';
import MoreNoticias from './MoreNoticias';
import {stylesPod} from '../theme/stylesPod';
import Noticias from './Noticias';

export default function Listado({navigation}) {
  return (
    <View>
      <View>
        <Noticias navigation={navigation} />
      </View>
      <View style={stylesPod.contenedorPadrePod}>
        <Podcasts navigation={navigation} />
      </View>

      <View>
        <MoreNoticias navigation={navigation} />
      </View>
    </View>
  );
}
