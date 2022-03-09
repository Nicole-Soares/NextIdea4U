import {Link} from '@react-navigation/native';
import React, {useContext, useRef, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Linking,
  Animated,
  StyleSheet,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {AppContext} from '../AppContext/AppContext';

//menu Hamburguesa
export default function MenuHamburguesa({navigation}) {
  const {setMenuHamburguesa, dataIngreso, desloguearse} =
    useContext(AppContext);
  const moveAnimation = useRef(new Animated.Value(-200)).current;

  useEffect(() => {
    const animate = () => {
      Animated.spring(moveAnimation, {
        toValue: Dimensions.get('window').width - 412,
        duration: 1000,
        useNativeDriver: false,
      }).start();
    };

    animate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function CerrarMenu() {
    setMenuHamburguesa(false);
  }

  return (
    <Animated.View style={[styles.container, {marginLeft: moveAnimation}]}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '90%',
          marginTop: 20,
        }}>
        <View>
          <Image
            source={require('../assets/icono/icono.png')}
            style={{height: 65, width: 60, marginLeft: 20}}
          />
        </View>
        <View style={{justifyContent: 'center'}}>
          <Icon
            name="close"
            color="black"
            size={30}
            onPress={() => CerrarMenu()}
            style={{marginRight: -15}}
          />
        </View>
      </View>
      <View style={{marginLeft: 20, marginTop: 20}}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text
            style={{
              color: 'black',
              fontSize: 15,
              fontWeight: 'bold',
              marginBottom: 5,
            }}>
            Inicio
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text
            style={{
              color: 'black',
              fontSize: 15,
              fontWeight: 'bold',
              marginBottom: 5,
            }}>
            Noticias
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('PodcastsScreen')}>
          <Text style={{color: 'black', fontSize: 15, fontWeight: 'bold'}}>
            Podcasts
          </Text>
        </TouchableOpacity>
      </View>
      {dataIngreso.error === false || dataIngreso.error === {} ? null : (
        <View
          style={{
            alignItems: 'center',
            marginTop: 15,
            width: '100%',
          }}>
          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderColor: 'blue',
              width: '90%',
              borderRadius: 5,
              height: 35,
              marginBottom: 10,
            }}
            onPress={() => navigation.navigate('Ingresar')}>
            <Text
              style={{
                fontWeight: 'bold',
                color: 'blue',
                marginTop: 5,
                fontSize: 15,
                alignSelf: 'center',
              }}>
              Iniciar sesión
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderColor: 'blue',
              width: '90%',
              borderRadius: 5,
              height: 35,
              backgroundColor: 'blue',
              marginBottom: 15,
            }}
            onPress={() => navigation.navigate('Registrarse')}>
            <Text
              style={{
                fontWeight: 'bold',
                color: 'white',
                marginTop: 5,
                alignSelf: 'center',
                fontSize: 15,
              }}>
              Registrarse
            </Text>
          </TouchableOpacity>
        </View>
      )}

      <View
        style={{
          borderTopColor: '#f5f4f8',
          borderTopWidth: 1,
          marginTop: 13,
          width: '90%',
          alignSelf: 'center',
        }}></View>
      <View style={{marginTop: 20}}>
        <View style={{alignItems: 'center', width: '30%', marginBottom: 20}}>
          <Text style={{color: 'black', fontWeight: 'bold', fontSize: 15}}>
            Seguinos
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            width: '90%',
            alignSelf: 'center',
          }}>
          <Icon
            name="instagram"
            size={25}
            color="black"
            onPress={() =>
              Linking.openURL('https://www.instagram.com/nextidea4u/')
            }
          />
          <Icon
            name="facebook"
            size={25}
            color="black"
            onPress={() =>
              Linking.openURL('https://www.facebook.com/nextidea4u')
            }
          />
          <Icon
            name="linkedin-square"
            size={25}
            color="black"
            onPress={() =>
              Linking.openURL('https://www.linkedin.com/company/nextidea4u/')
            }
          />
          <Icon
            name="twitter"
            size={25}
            color="black"
            onPress={() => Linking.openURL('https://twitter.com/nextidea4u')}
          />
          <Icon
            name="youtube-play"
            size={25}
            color="black"
            onPress={() =>
              Linking.openURL(
                'https://www.youtube.com/channel/UCgfn7CcOW8n0VOn-NPZLr4w',
              )
            }
          />
          <TouchableOpacity
            onPress={() =>
              Linking.openURL('https://www.tiktok.com/@nextidea4u')
            }>
            <Image
              source={require('../assets/icono/tiktok.png')}
              style={{height: 25, width: 20}}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          marginTop: 20,
          borderBottomColor: '#f5f4f8',
          borderBottomWidth: 1,
          width: '95%',
          alignSelf: 'center',
        }}>
        <View style={{alignItems: 'center', width: '30%', marginBottom: 20}}>
          <Text
            style={{
              color: 'black',
              fontWeight: 'bold',
              fontSize: 15,
              marginLeft: 10,
            }}>
            Escuchanos
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            width: '90%',
            alignSelf: 'center',
            marginBottom: 15,
          }}>
          <Icon
            name="spotify"
            size={25}
            color="black"
            onPress={() =>
              Linking.openURL(
                'https://open.spotify.com/show/3XyUugkQz4bTHKb96MqBem?si=55bae6b8e9104efd&nd=1',
              )
            }
          />
          <Icon
            name="podcast"
            size={25}
            color="black"
            onPress={() =>
              Linking.openURL(
                'https://podcasts.apple.com/us/podcast/podcasts-de-next-idea-4u/id1597339890',
              )
            }
          />
          <Icon
            name="google"
            size={25}
            color="black"
            onPress={() =>
              Linking.openURL(
                'https://podcasts.google.com/feed/aHR0cHM6Ly9teC5pdm9veC5jb20vZXMvcG9kY2FzdHMtbmV4dC1pZGVhLTR1X2ZnX2YxMTQxMTEyNF9maWx0cm9fMS54bWw',
              )
            }
          />
          <Icon
            name="headphones"
            size={25}
            color="black"
            onPress={() =>
              Linking.openURL(
                'https://www.ivoox.com/podcast-podcasts-next-idea-4u_sq_f11411124_1.html',
              )
            }
          />
        </View>
      </View>
      <View style={{alignSelf: 'center', width: '88%', marginTop: 20}}>
        <Text style={{fontFamily: 'Inter-Bold', color: 'black'}}>
          NextIdea4U
        </Text>
        <Text
          style={{
            fontFamily: 'Inter-Regular',
            color: 'gray',
            marginTop: 10,
          }}
          onPress={() =>
            Linking.openURL('https://www.nextidea4u.com/pages/sobre-nosotros')
          }>
          Sobre nosotros
        </Text>
        <Text
          style={{
            fontFamily: 'Inter-Regular',
            color: 'gray',
            marginTop: 10,
          }}
          onPress={() =>
            Linking.openURL(
              'https://www.nextidea4u.com/pages/terminos-y-condiciones',
            )
          }>
          Términos y condiciones
        </Text>
        <Text
          style={{
            fontFamily: 'Inter-Regular',
            color: 'gray',
            marginTop: 10,
          }}
          onPress={() =>
            Linking.openURL(
              'https://www.nextidea4u.com/pages/politica-de-privacidad',
            )
          }>
          Polí­tica de privacidad
        </Text>
        <Text
          style={{
            fontFamily: 'Inter-Regular',
            color: 'gray',
            marginTop: 10,
          }}
          onPress={() =>
            Link.openURL('https://www.nextidea4u.com/pages/politica-de-cookies')
          }>
          Polí­tica de cookies
        </Text>
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    elevation: 100,
    zIndex: 100,
    backgroundColor: 'white',
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '90%',
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'tomato',
    transform: [
      {
        scaleX: 0.5,
      },
    ],
  },
});
