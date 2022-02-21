import React, {useContext, useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, Image, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import DeviceInfo from 'react-native-device-info';
import {AppContext} from '../AppContext/AppContext';
import {
  LoginManager,
  GraphRequest,
  GraphRequestManager,
} from 'react-native-fbsdk-next';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';

//screen del ingreso
export default function Ingresar({navigation}) {
  const {
    userPassword,
    setUserPassword,
    facebookEmail,
    setFacebookEmail,
    facebookId,
    setFacebookId,
    facebookCupleanos,
    setFacebookCumpleanos,
    facebookNombre,
    setFacebookNombre,
    facebookApellido,
    setFacebookApellido,
    googleNombre,
    setGoogleNombre,
    googleId,
    setGoogleId,
    googleEmail,
    setGoogleEmail,
  } = useContext(AppContext);
  const {userEmail, setUserEmail} = useContext(AppContext);
  const [error, setError] = useState(false);
  const [dataFacebook, setDataFacebook] = useState(null);
  const [dataGoogle, setDataGoogle] = useState(null);
  let deviceId = DeviceInfo.getUniqueId();

  //conectar con la api de ingreso
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
        console.log(data, 'ingresar');
      } catch (error) {
        console.log(error);
      }
    }
  };

  //ingreso con facebook
  const fbLogin = ressCallBack => {
    LoginManager.logOut();
    return LoginManager.logInWithPermissions([
      'public_profile',
      'email',
      'user_birthday',
    ]).then(
      result => {
        console.log('result :', result);
        if (
          result.declinedPermissions &&
          result.declinedPermissions.includes('email')
        ) {
          ressCallBack({message: 'el email es requerido'});
        }
        if (result.isCancelled) {
          console.log('error');
        } else {
          const infoRequest = new GraphRequest(
            '/me?fields=email, first_name, last_name, picture, birthday',
            null,
            ressCallBack,
          );

          new GraphRequestManager().addRequest(infoRequest).start();
        }
      },

      function (error) {
        console.log('hay un error en el login', error);
      },
    );
  };

  const onFbLogin = async () => {
    console.log('hola');
    try {
      await fbLogin(_responseInfoCallBack);
    } catch (error) {
      console.log('error', error);
    }
  };

  const _responseInfoCallBack = async (error, result) => {
    if (error) {
      console.log(error);
      return;
    } else {
      setDataFacebook(result);
      console.log(result, 'resultado');
    }
  };

  //conectar con la api de facebook
  useEffect(() => {
    if (dataFacebook) {
      setFacebookEmail(dataFacebook.email);
      setFacebookId(dataFacebook.id);
      setFacebookCumpleanos(dataFacebook.birthday);
      setFacebookNombre(dataFacebook.first_name);
      setFacebookApellido(dataFacebook.last_name);
      async function ingresarFacebook() {
        try {
          let llamado = await fetch(
            `https://nextidea4u.com/api/login/login-facebook.php?device=${deviceId}&email=${facebookEmail}&name=${facebookNombre}&last=${facebookApellido}&external=${facebookId}&birthday=${facebookCupleanos}&player_id=${global.playerId}`,
          );
          let data = await llamado.json();
          console.log(data, 'data');
        } catch (error) {
          console.log(error);
        }
      }
      ingresarFacebook();
    }
  }, [dataFacebook]);

  //ingreso con google
 

  const googleLogin = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      setDataGoogle(userInfo);
    } catch (error) {
      if (error.code === statusCodes.SING_IN_CANCELLED) {
        //si el usuario cancela
        console.log(error);
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log(error);
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log(error);
      } else {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    if (dataGoogle) {
      setGoogleEmail(dataGoogle.user.email);
      setGoogleId(dataGoogle.user.id);
      setGoogleNombre(dataGoogle.user.name);

      async function ingresarGoogle() {
        try {
          let llamado = await fetch(
            `https://nextidea4u.com/api/login/login-google.php?device=${deviceId}&email=${googleEmail}&name=${googleNombre}&external=${googleId}&player_id=${global.playerId}`,
          );
          let data = await llamado.json();
          console.log(data, 'data');
        } catch (error) {
          console.log(error);
        }
      }
      ingresarGoogle();
    }
  }, [dataGoogle]);
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
            }}
            onPress={onFbLogin}>
            <Icon
              name="facebook"
              size={20}
              color="white"
              style={{width: '5%'}}
            />
            <Text style={{color: 'white', fontWeight: 'bold', width: '60%'}}>
              Continúa con Facebook
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
            }}
            onPress={() => googleLogin()}>
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
