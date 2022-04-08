import {NavigationContainer} from '@react-navigation/native';
import React, {useContext, useState} from 'react';
import {View, Text, Image, TouchableOpacity, SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {AppContext} from '../AppContext/AppContext';
import {stylesNav} from '../theme/stylesNav';
import DeviceInfo from 'react-native-device-info';

// navbar

export default function Navbar({navigation}) {
  const {setMenuHamburguesa, dataIngreso, setDataIngreso} =
    useContext(AppContext);
  const [desloguearse, setDesloguearse] = useState({});
  let deviceId = DeviceInfo.getUniqueId();
  let sessionUsuario = dataIngreso.session;

  const Desloguearse = async () => {
    try {
      let llamado = await fetch(
        `https://nextidea4u.com/api/login/logout.php?device=${deviceId}&sessionId=${sessionUsuario}`,
        {
          method: 'POST',
        },
      );
      let data = await llamado.json();
      setDesloguearse(data);
      setDataIngreso({});
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView style={stylesNav.contenedorPadre}>
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
          <Image
            source={require('../assets/icono/ni.png')}
            style={stylesNav.imagenLogo}
          />
        </TouchableOpacity>
      </View>
      <View style={stylesNav.ContenedorPadreIconoLogin}>
        <View
          style={[
            dataIngreso.error === false
              ? stylesNav.contenedorIconoConLog
              : stylesNav.contenedorIconoSinLog,
          ]}>
          {dataIngreso.error === false || dataIngreso.error === {} ? (
            <TouchableOpacity onPress={() => Desloguearse()}>
              <Image
                source={require('../assets/icono/close.png')}
                style={{
                  height: 30,
                  width: 30,
                }}
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={{marginTop: 7}}
              onPress={() => navigation.navigate('Registrarse')}>
              <Image
                source={require('../assets/icono/user.png')}
                style={{width: 20, height: 20, resizeMode: 'contain'}}
              />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
}
