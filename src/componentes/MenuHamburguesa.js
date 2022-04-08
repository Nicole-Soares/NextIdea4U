import {Link} from '@react-navigation/native';
import React, {useContext, useRef, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Linking,
  Animated,
  Dimensions,
  Platform,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';
import {AppContext} from '../AppContext/AppContext';
import {stylesMenu} from '../theme/stylesMenu';

//menu Hamburguesa
export default function MenuHamburguesa({navigation}) {
  const {setMenuHamburguesa, dataIngreso, desloguearse} =
    useContext(AppContext);
  const moveAnimation = useRef(new Animated.Value(-200)).current;
  const platform = Platform.OS === 'ios' ? 385 : 412;

  useEffect(() => {
    const animate = () => {
      Animated.spring(moveAnimation, {
        duration: 1000,
        toValue: Dimensions.get('window').width - platform,
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
    <Animated.View style={[stylesMenu.container, {marginLeft: moveAnimation}]}>
      <ScrollView>
        <SafeAreaView>
          <View style={stylesMenu.segundoContenedor}>
            <View>
              <Image
                source={require('../assets/icono/icono.png')}
                style={stylesMenu.logo}
              />
            </View>
            <View style={stylesMenu.contenedorCerrar}>
              <Icon
                name="close"
                color="black"
                size={30}
                onPress={() => CerrarMenu()}
                style={stylesMenu.iconoCerrar}
              />
            </View>
          </View>
          <View style={stylesMenu.contenedorRedi}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
              <Text style={stylesMenu.texto}>Inicio</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
              <Text style={stylesMenu.texto}>Noticias</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('PodcastsScreen')}>
              <Text style={stylesMenu.texto}>Podcasts</Text>
            </TouchableOpacity>
          </View>
          {dataIngreso.error === false || dataIngreso.error === {} ? null : (
            <View style={stylesMenu.contenedorIniciar}>
              <TouchableOpacity
                style={stylesMenu.botonIniciar}
                onPress={() => navigation.navigate('Ingresar')}>
                <Text style={stylesMenu.textoBotonIniciar}>Iniciar sesión</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={stylesMenu.botonRegistrar}
                onPress={() => navigation.navigate('Registrarse')}>
                <Text style={stylesMenu.textoRegistrar}>Registrarse</Text>
              </TouchableOpacity>
            </View>
          )}
          <View style={stylesMenu.linea}></View>
          <View style={stylesMenu.contenedorRedes}>
            <View style={stylesMenu.contenedorSeguinos}>
              <Text style={stylesMenu.textoSeguinos}>Seguinos</Text>
            </View>
            <View style={stylesMenu.contenedorIconos}>
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
                  Linking.openURL(
                    'https://www.linkedin.com/company/nextidea4u/',
                  )
                }
              />
              <Icon
                name="twitter"
                size={25}
                color="black"
                onPress={() =>
                  Linking.openURL('https://twitter.com/nextidea4u')
                }
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
          <View style={stylesMenu.contenedorEscuchanosIconos}>
            <View style={stylesMenu.contenedorEscuchanos}>
              <Text style={stylesMenu.escuchanos}>Escuchanos</Text>
            </View>
            <View style={stylesMenu.contenedorIconosEscuchanos}>
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
          <View style={stylesMenu.contenedorParteInferior}>
            <Text style={stylesMenu.textoNext}>NextIdea4U</Text>
            <Text
              style={stylesMenu.textoData}
              onPress={() =>
                Linking.openURL(
                  'https://www.nextidea4u.com/pages/sobre-nosotros',
                )
              }>
              Sobre nosotros
            </Text>
            <Text
              style={stylesMenu.textoData}
              onPress={() =>
                Linking.openURL(
                  'https://www.nextidea4u.com/pages/terminos-y-condiciones',
                )
              }>
              Términos y condiciones
            </Text>
            <Text
              style={stylesMenu.textoData}
              onPress={() =>
                Linking.openURL(
                  'https://www.nextidea4u.com/pages/politica-de-privacidad',
                )
              }>
              Polí­tica de privacidad
            </Text>
            <Text
              style={stylesMenu.textoData}
              onPress={() =>
                Link.openURL(
                  'https://www.nextidea4u.com/pages/politica-de-cookies',
                )
              }>
              Polí­tica de cookies
            </Text>
          </View>
        </SafeAreaView>
      </ScrollView>
    </Animated.View>
  );
}
