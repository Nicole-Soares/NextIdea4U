import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

//screen recuperar contraseña
export default function Recuperar({navigation}) {
  const [userEmailRecuperar, setUserEmailRecuperar] = useState('');
  const [errorEmail, setErrorEmail] = useState();
  const [recuperado, setRecuperado] = useState({});

  //llamo a la api para recuperar contraseña
  const RecuperarContraseña = async () => {
    if (userEmailRecuperar === '') {
      setErrorEmail(true);
    } else {
      setErrorEmail(false);
      try {
        let llamado = await fetch(
          `https://nextidea4u.com/api/login/recover.php?email=${userEmailRecuperar}`,
          {
            method: 'POST',
          },
        );
        let respuesta = await llamado.json();
        setRecuperado(respuesta);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <SafeAreaView
      style={{
        height: '100%',
        width: '100%',
        backgroundColor: 'white',
        justifyContent: 'center',
      }}>
      <View style={{alignItems: 'center', marginBottom: 15}}>
        {recuperado.error === '' ? (
          <View
            style={{
              backgroundColor: '#69E371',
              borderColor: '#69E371',
              borderRadius: 5,
              borderWidth: 1,
              width: '90%',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: '#52B258',
                fontFamily: 'Inter-Bold',
                fontSize: 15,
              }}>
              Se ha enviado su nueva clave por email
            </Text>
          </View>
        ) : null}
      </View>

      <View
        style={{
          flexDirection: 'row',
          borderColor: 'gray',
          borderWidth: 1,
          width: '90%',
          alignSelf: 'center',
          alignItems: 'center',
          marginBottom: 10,
          borderRadius: 10,
        }}>
        <Icon name="envelope-o" size={20} style={{marginLeft: 10}} />
        <TextInput
          placeholder="Email"
          value={userEmailRecuperar}
          onChangeText={e => setUserEmailRecuperar(e)}
        />
      </View>
      {errorEmail ? (
        <Text style={{color: 'red', marginLeft: 23}}>Campo requerido</Text>
      ) : null}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          width: '60%',
          paddingTop: 10,
        }}>
        <TouchableOpacity
          style={{
            backgroundColor: '#005cff',
            borderRadius: 3,
            width: '50%',
            height: 30,
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: 5,
          }}
          onPress={() => RecuperarContraseña()}>
          <Text style={{color: 'white', fontWeight: 'bold'}}>Recuperar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{justifyContent: 'center', alignItems: 'center'}}
          onPress={() => navigation.navigate('Ingresar')}>
          <Text style={{color: '#005cff'}}>Volver</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
