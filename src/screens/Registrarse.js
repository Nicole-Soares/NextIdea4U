import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import DeviceInfo from 'react-native-device-info';
import {stylesReg} from '../theme/stylesReg';

//screen del registro
export default function Registrarse({navigation}) {
  const [errorRegistrar, setErrorRegistrar] = useState(false);
  const [userPasswordRegistrar, setUserPasswordRegistrar] = useState('');
  const [userEmailRegistrar, setUserEmailRegistrar] = useState('');

  let deviceId = DeviceInfo.getUniqueId();

  const Registrar = async () => {
    if (userPasswordRegistrar === '' || userEmailRegistrar === '') {
      setErrorRegistrar(true);
    } else {
      setErrorRegistrar(false);
      try {
        let llamada = await fetch(
          `https://nextidea4u.com/api/login/register.php?email=${userEmailRegistrar}&device=${deviceId}&password=${userPasswordRegistrar}&player_id=${global.playerId}`,
          {
            method: 'POST',
          },
        );
        let data = await llamada.json();
        console.log(data, "registrarse")
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <View style={stylesReg.contenedorPadre}>
      <View style={stylesReg.contenedorGris}>
        <View style={stylesReg.contenedorSuperior}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Image
              source={require('../assets/icono/icono.png')}
              style={{height: 70, width: 65}}
            />
          </TouchableOpacity>

          <Text style={stylesReg.textoCrearCuenta}>Crea una cuenta</Text>
          <Text
            style={{color: 'black'}}
            onPress={() => navigation.navigate('Ingresar')}>
            ¿Ya tienes una cuenta? <Text style={{color: 'blue'}}>Ingresa</Text>
          </Text>
        </View>
        <View style={stylesReg.contenedorFacebook}>
          <TouchableOpacity style={stylesReg.botonFace}>
            <Icon
              name="facebook"
              size={20}
              color="white"
              style={{width: '5%'}}
            />
            <Text style={stylesReg.textoFace}> Continúa con Facebook </Text>
          </TouchableOpacity>
          <TouchableOpacity style={stylesReg.botonGoogle}>
            <Icon name="google" size={20} color="white" />
            <Text style={stylesReg.textoGoogle}>Continúa con Google</Text>
          </TouchableOpacity>
        </View>
        <View style={{alignSelf: 'center'}}>
          <Text style={stylesReg.textoRegistrarEmail}>
            Ó regístrate con tu email
          </Text>
        </View>
        <View style={stylesReg.contenedorInputs}>
          <TextInput
            placeholder="Tu cuenta de email"
            style={stylesReg.inputEmail}
            value={userEmailRegistrar}
            onChangeText={e => setUserEmailRegistrar(e)}
          />
          {errorRegistrar ? (
            <Text style={{color: 'red'}}>
              Por favor ingrese un email válido
            </Text>
          ) : null}
          <TextInput
            placeholder="Crea una contraseña de ingreso"
            style={stylesReg.inputPassword}
            value={userPasswordRegistrar}
            onChangeText={e => setUserPasswordRegistrar(e)}
          />
          {errorRegistrar ? (
            <Text style={{color: 'red'}}>Campo requerido</Text>
          ) : null}
        </View>
        <View style={stylesReg.contenedorRegistrarse}>
          <TouchableOpacity
            style={stylesReg.botonReg}
            onPress={() => Registrar()}>
            <Text style={stylesReg.textoReg}>Registrarse</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
