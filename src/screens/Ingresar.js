import React, {useContext, useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  Alert,
  Platform,
  SafeAreaView,
} from 'react-native';
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
import {stylesIng} from '../theme/stylesIng';
import {stylesReg} from '../theme/stylesReg';

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
  const {userEmail, setUserEmail, dataIngreso, setDataIngreso} =
    useContext(AppContext);
  const [error, setError] = useState(false);
  const [dataFacebook, setDataFacebook] = useState(null);
  const [dataGoogle, setDataGoogle] = useState(null);
  let deviceId = DeviceInfo.getUniqueId();

  console.log(dataFacebook, 'dataFace');
  //conectar con la api de ingreso
  const Login = async () => {
    if (userEmail === '' || userPassword === '') {
      setError(true);
    } else {
      try {
        let llamado = await fetch(
          `https://nextidea4u.com/api/login/login.php?email=${userEmail}&device=${deviceId}&password=${userPassword}&player_id=${global.playerId}`,
          {
            method: 'POST',
          },
        );
        let data = await llamado.json();
        setDataIngreso(data);
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    if (dataIngreso.error === true) {
      Alert.alert('Email / clave incorrectos o usuario no registrado');
    } else if (dataIngreso.error === false) {
      navigation.navigate('Home');
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataIngreso]);

  //ingreso con facebook
  const fbLogin = ressCallBack => {
    LoginManager.logOut();
    // los permisos de lo que necesito
    return LoginManager.logInWithPermissions([
      'public_profile',
      'email',
      'user_birthday',
    ]).then(
      result => {
        if (
          result.declinedPermissions &&
          result.declinedPermissions.includes('email')
        ) {
          ressCallBack({message: 'el email es requerido'});
        }
        if (result.isCancelled) {
          console.log('error');
        } else {
          //armo la request para pedir a face los datos
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
    }
  };

  //conectar con la api de facebook
  useEffect(() => {
    if (dataFacebook) {
      console.log('hola');
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
          setDataIngreso(data);
        } catch (error) {
          console.log(error);
        }
      }
      ingresarFacebook();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataFacebook]);

  //ingreso con google

  const googleLogin = async () => {
    GoogleSignin.configure();
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
  // conectar con la api de google
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
          setDataIngreso(data);
        } catch (error) {
          console.log(error);
        }
      }
      ingresarGoogle();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataGoogle]);

  return (
    <SafeAreaView
      style={{
        backgroundColor: '#f5f4f8',
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <View style={stylesReg.contenedorPadre}>
        <View style={stylesIng.contenedorHermano}>
          <View style={stylesIng.contenedorArriba}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
              <Image
                source={require('../assets/icono/icono.png')}
                style={{height: 70, width: 65, marginBottom: 15}}
              />
            </TouchableOpacity>

            <Text style={stylesIng.estilosTextoRegistrate}>
              Ingresa a tu cuenta
            </Text>
            <Text
              style={{color: 'black'}}
              onPress={() => navigation.navigate('Registrarse')}>
              ¿Aun no eres miembro?{' '}
              <Text style={{color: '#005cff'}}>Registrate</Text>
            </Text>
          </View>
          {Platform.OS === 'android' ? (
            <View style={stylesIng.contenedorBotonesRedesSociales}>
              <TouchableOpacity style={stylesIng.botonFace} onPress={onFbLogin}>
                <Icon
                  name="facebook"
                  size={20}
                  color="white"
                  style={{width: '5%', marginLeft: 80}}
                />
                <Text style={stylesIng.textoGoFa}>Continúa con Facebook</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={stylesIng.botonGoogle}
                onPress={() => googleLogin()}>
                <Icon
                  name="google"
                  size={20}
                  color="white"
                  style={{marginLeft: 80, width: '5%'}}
                />
                <Text style={stylesIng.textoGoFa}>Continúa con Google</Text>
              </TouchableOpacity>
            </View>
          ) : null}

          <View style={stylesIng.contenedorIngresarMail}>
            <Text style={stylesIng.textoIngresa}>Ó ingresa con tu email</Text>
          </View>
          <View style={stylesIng.contenedorInputs}>
            <TextInput
              placeholder="Email"
              style={stylesIng.estilosInputs}
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
              secureTextEntry={true}
              style={stylesIng.estilosInputs}
              value={userPassword}
              onChangeText={e => setUserPassword(e)}
            />
            {error ? <Text style={{color: 'red'}}>Campo requerido</Text> : null}
          </View>
          <View style={stylesIng.contenedorBotones}>
            <TouchableOpacity
              style={stylesIng.botonIniciar}
              onPress={() => Login()}>
              <Text style={stylesIng.textoIniciar}>Iniciar sesión</Text>
            </TouchableOpacity>

            <View style={{marginTop: 15, marginLeft: 5}}>
              <TouchableOpacity
                onPress={() => navigation.navigate('Recuperar')}>
                <Text style={{color: '#005cff'}}>Olvidé mi contraseña</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
