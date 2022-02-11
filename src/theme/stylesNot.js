import {StyleSheet} from 'react-native';

//estilos de las noticias
export const stylesNot = StyleSheet.create({
  contenedorPadreNot: {
    width: '90%',
    alignSelf: 'center',
    margin: 20,
  },
  imagenNot: {
    width: '100%',
    height: 220,
    borderRadius: 10,
  },
  contenedorDatosNot: {
    margin: 5,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  textoTituloNot: {
    fontSize: 15,
    color: 'blue',
    fontWeight: 'bold',
  },
  tituloPrincipalNot: {
    fontSize: 15,
    color: 'black',
    fontWeight: 'bold',
  },
  textoDesNot: {
    color: 'black',
    fontSize: 15,
  },
});
