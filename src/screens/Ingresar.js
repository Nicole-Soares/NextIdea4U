import React, {useContext, useState} from 'react';
import {View, Text, TouchableOpacity, Image, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import DeviceInfo from 'react-native-device-info';
import {AppContext} from '../AppContext/AppContext';

//screen del ingreso
export default function Ingresar({navigation}) {
  const {userPassword, setUserPassword} = useContext(AppContext);
  const {userEmail, setUserEmail} = useContext(AppContext);
  const [error, setError] = useState(false);
  let deviceId = DeviceInfo.getUniqueId();

console.log(global.playerId)


  const Login = async () => {
    if (userEmail === '' || userPassword === '') {
      setError(true);
    } else {
      setError(false);
      try {
        let llamado = await fetch(
          `https://nextidea4u.com/api/login/login.php?email=${userEmail}&device=${deviceId}&password=${userPassword}&player_id=${global.playerId}`,
          {
            method: 'POST',
          },
        );
        let data = await llamado.json();
        console.log(data, "ingresar")
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <View
      style={{
        backgroundColor: '#f5f4f8',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      }}>
      <View style={{backgroundColor: 'white', width: '90%', elevation: 5}}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            margin: 10,
          }}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Image
              source={require('../assets/icono/icono.png')}
              style={{height: 70, width: 65}}
            />
          </TouchableOpacity>

          <Text
            style={{
              width: '50%',
              color: 'black',
              fontWeight: 'bold',
              fontSize: 20,
            }}>
            Ingresa a tu cuenta
          </Text>
          <Text
            style={{color: 'black'}}
            onPress={() => navigation.navigate('Registrarse')}>
            ¿Aun no eres miembro?{' '}
            <Text style={{color: 'blue'}}>Registrate</Text>
          </Text>
        </View>
        <View style={{alignItems: 'center', width: '100%', margin: 10}}>
          <TouchableOpacity
            style={{
              backgroundColor: '#3b5999',
              width: '70%',
              borderRadius: 2,
              height: 30,
              margin: 10,
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
            }}>
            <Icon
              name="facebook"
              size={20}
              color="white"
              style={{width: '5%'}}
            />
            <Text style={{color: 'white', fontWeight: 'bold', width: '60%'}}>
              {' '}
              Continúa con Facebook{' '}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: '#fb5252',
              width: '70%',
              borderRadius: 2,
              height: 30,
              margin: 10,
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
            }}>
            <Icon name="google" size={20} color="white" />
            <Text style={{color: 'white', fontWeight: 'bold', width: '60%'}}>
              Continúa con Google
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{alignSelf: 'center'}}>
          <Text style={{color: 'black', fontWeight: 'bold', fontSize: 15}}>
            Ó ingresa con tu email
          </Text>
        </View>
        <View style={{width: '90%', alignSelf: 'center', margin: 10}}>
          <TextInput
            placeholder="Email"
            style={{
              borderWidth: 1,
              borderRadius: 5,
              borderColor: '#8898aa',
              margin: 5,
            }}
            value={userEmail}
            onChangeText={e => setUserEmail(e)}
          />
          {error ? (
            <Text style={{color: 'red'}}>
              Por favor ingrese un email válido
            </Text>
          ) : null}
          <TextInput
            placeholder="Contraseña"
            style={{
              borderWidth: 1,
              borderRadius: 5,
              borderColor: '#8898aa',
              margin: 5,
            }}
            value={userPassword}
            onChangeText={e => setUserPassword(e)}
          />
          {error ? <Text style={{color: 'red'}}>Campo requerido</Text> : null}
        </View>
        <View style={{width: '90%', alignSelf: 'center', margin: 10}}>
          <TouchableOpacity
            style={{
              borderRadius: 2,
              backgroundColor: '#3368ce',
              height: 30,
              justifyContent: 'center',
            }}
            onPress={() => Login()}>
            <Text
              style={{color: 'white', fontWeight: 'bold', textAlign: 'center'}}>
              Iniciar sesión
            </Text>
          </TouchableOpacity>

          <View style={{margin: 5}}>
            <TouchableOpacity onPress={() => navigation.navigate('Recuperar')}>
              <Text style={{color: 'blue'}}>Olvidé mi contraseña</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
