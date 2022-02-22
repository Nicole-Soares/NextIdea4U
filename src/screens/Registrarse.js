import React, {useState, useContext, useEffect} from 'react';
import {View, Text, Image, TouchableOpacity, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import DeviceInfo from 'react-native-device-info';
import {stylesReg} from '../theme/stylesReg';
import {
  LoginManager,
  GraphRequest,
  GraphRequestManager,
} from 'react-native-fbsdk-next';
import {AppContext} from '../AppContext/AppContext';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';

//screen del registro
export default function Registrarse({navigation}) {
  const {
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
  const [errorRegistrar, setErrorRegistrar] = useState(false);
  const [userPasswordRegistrar, setUserPasswordRegistrar] = useState('');
  const [userEmailRegistrar, setUserEmailRegistrar] = useState('');
  const [dataFacebook, setDataFacebook] = useState(null);
  const [dataGoogle, setDataGoogle] = useState(null);

  let deviceId = DeviceInfo.getUniqueId();

  //registro del usuario
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
      } catch (error) {
        console.log(error);
      }
    }
  };

  //ingreso con face
  const fbLogin = ressCallBack => {
    LoginManager.logOut();
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
  // llamo a la api para google
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
        } catch (error) {
          console.log(error);
        }
      }
      ingresarGoogle();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataGoogle]);
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
          <TouchableOpacity
            style={stylesReg.botonFace}
            onPress={() => onFbLogin()}>
            <Icon
              name="facebook"
              size={20}
              color="white"
              style={{width: '5%'}}
            />
            <Text style={stylesReg.textoFace}> Continúa con Facebook </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={stylesReg.botonGoogle}
            onPress={() => googleLogin()}>
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
