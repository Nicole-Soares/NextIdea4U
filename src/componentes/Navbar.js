import {NavigationContainer} from '@react-navigation/native';
import React, {useContext} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {AppContext} from '../AppContext/AppContext';
import {stylesNav} from '../theme/stylesNav';

// navbar

export default function Navbar({navigation}) {
  const {setMenuHamburguesa} = useContext(AppContext);

  return (
    <View style={stylesNav.contenedorPadre}>
      <View style={stylesNav.contenedorPadreMenuLogo}>
        <TouchableOpacity onPress={() => setMenuHamburguesa(true)}>
          <Image
            source={require('../assets/icono/menu.png')}
            style={{height: 26, width: 25, marginTop: 5}}
          />
        </TouchableOpacity>
      </View>
      <View style={stylesNav.contenedorTextoLogo}>
        <TouchableOpacity
          style={{flexDirection: 'row'}}
          onPress={() => navigation.navigate('Home')}>
          <Text style={stylesNav.textoNombreApp}>nextidea</Text>
          <Image
            source={require('../assets/icono/icono.png')}
            style={stylesNav.imagenLogo}
          />
        </TouchableOpacity>
      </View>
      <View style={stylesNav.ContenedorPadreIconoLogin}>
        <View
          style={{
            borderWidth: 2,
            borderColor: 'black',
            borderRadius: 15,
            width: 25,
            height: 25,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Icon
            name="user-o"
            size={15}
            color="black"
            style={{marginTop: 7}}
            onPress={() => navigation.navigate('Registrarse')}
          />
        </View>
      </View>
    </View>
  );
}
