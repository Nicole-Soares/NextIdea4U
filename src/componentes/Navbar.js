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
        <View>
          <Icon
            name="align-justify"
            size={25}
            color="black"
            onPress={() => setMenuHamburguesa(true)}
            style={{marginTop: 10}}
          />
        </View>

        <View style={stylesNav.contenedorTextoLogo}>
          <TouchableOpacity
            style={{flexDirection: 'row'}}
            onPress={() => navigation.navigate('Home')}>
            <Text style={stylesNav.textoNombreApp}>nextidea</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => MostrarMenu()}>
            <Image
              source={require('../assets/icono/menu.png')}
              style={{height: 25, width: 30, marginLeft: -5}}
            />
          </TouchableOpacity>
        </View>
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
            width: 30,
            height: 30,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Icon
            name="user-o"
            size={20}
            color="black"
            style={{marginTop: 7}}
            onPress={() => navigation.navigate('Registrarse')}
          />
        </View>
      </View>
    </View>
  );
}
