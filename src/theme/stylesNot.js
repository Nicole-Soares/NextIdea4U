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
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  textoTituloNot: {
    fontSize: 20,
    color: 'blue',
    fontWeight: 'bold',
    width:"95%"
  },
  tituloPrincipalNot: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
    width: '100%',
  },
  textoDesNot: {
    color: 'black',
    fontSize: 15,
  },
});
