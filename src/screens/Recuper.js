import {NavigationContainerRefContext} from '@react-navigation/native';
import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Recuperar({navigation}) {
  const [userEmailRecuperar, setUserEmailRecuperar] = useState('');

  const RecuperarContraseña = async () => {
    try {
      let llamado = await fetch(
        `https://nextidea4u.com/api/login/recover.php?email=${userEmailRecuperar}`,
        {
          method: 'POST',
        },
      );
      let respuesta = await llamado.json();
    
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View
      style={{
        height: '100%',
        width: '100%',
        backgroundColor: 'white',
        justifyContent: 'center',
      }}>
      <View
        style={{
          flexDirection: 'row',
          borderColor: 'gray',
          borderWidth: 1,
          width: '90%',
          alignSelf: 'center',
          alignItems: 'center',
          marginBottom: 10,
        }}>
        <Icon name="envelope-o" size={20} style={{marginLeft: 10}} />
        <TextInput
          placeholder="Email"
          value={userEmailRecuperar}
          onChangeText={e => setUserEmailRecuperar(e)}
        />
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          width: '40%',
        }}>
        <TouchableOpacity
          style={{
            backgroundColor: 'blue',
            borderRadius: 3,
            width: '70%',
            height: 30,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => RecuperarContraseña()}>
          <Text style={{color: 'white', fontWeight: 'bold'}}>Recuperar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{justifyContent: 'center', alignItems: 'center'}}
          onPress={() => navigation.navigate('Ingresar')}>
          <Text style={{color: 'blue'}}>Volver</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
