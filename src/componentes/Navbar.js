import React, {useContext} from 'react';
import {View, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {AppContext} from '../AppContext/AppContext';
import {stylesNav} from '../theme/stylesNav';
import MenuHamburguesa from './MenuHamburguesa';

//screen del navbar

export default function Navbar() {
  const { setMenuHamburguesa} = useContext(AppContext);

  return (
    <View style={stylesNav.contenedorPadre}>
      <View style={stylesNav.contenedorPadreMenuLogo}>
        <View>
          <Icon
            name="align-justify"
            size={25}
            color="black"
            onPress={() => setMenuHamburguesa(true)}
          />
        </View>

        <View style={stylesNav.contenedorTextoLogo}>
          <Text style={stylesNav.textoNombreApp}>nextidea</Text>
          <Image
            source={require('../assets/icono/pp.jpg')}
            style={stylesNav.imagenLogo}
          />
        </View>
      </View>
      <View style={stylesNav.ContenedorPadreIconoLogin}>
        <Icon
          name="user-circle"
          size={20}
          color="black"
          style={{marginRight: 10}}
        />
      </View>
    </View>
  );
}
