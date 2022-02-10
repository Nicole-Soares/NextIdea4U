import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {View, Text, Image, TouchableOpacity, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Registrarse({navigation}) {
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
              width: '40%',
              color: 'black',
              fontWeight: 'bold',
              fontSize: 20,
            }}>
            Crea una cuenta
          </Text>
          <Text style={{color: 'black'}}>
            ¿Ya tienes una cuenta? <Text style={{color: 'blue'}}>Ingresa</Text>
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
            Ó regístrate con tu email
          </Text>
        </View>
        <View style={{width: '90%', alignSelf: 'center', margin: 10}}>
          <TextInput
            placeholder="Tu cuenta de email"
            style={{
              borderWidth: 1,
              borderRadius: 5,
              borderColor: '#8898aa',
              margin: 5,
            }}
          />
          <TextInput
            placeholder="Crea una contraseña de ingreso"
            style={{
              borderWidth: 1,
              borderRadius: 5,
              borderColor: '#8898aa',
              margin: 5,
            }}
          />
        </View>
        <View style={{width: '90%', alignSelf: 'center', margin: 10}}>
          <TouchableOpacity
            style={{
              borderRadius: 2,
              backgroundColor: '#3368ce',
              height: 30,
              justifyContent: 'center',
            }}>
            <Text
              style={{color: 'white', fontWeight: 'bold', textAlign: 'center'}}>
              Registrarse
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
