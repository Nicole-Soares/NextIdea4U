import {StyleSheet} from 'react-native';

// hoja de estilos del navbar
export const stylesNav = StyleSheet.create({
  contenedorPadre: {
    flexDirection: 'row',
    width: '100%',
    height: 65,
    justifyContent: 'space-around',
    borderBottomWidth: 1,
    borderBottomColor: '#f5f4f8',
  },
  contenedorPadreMenuLogo: {
    flexDirection: 'row',
    justifyContent: 'space-around',

    alignItems: 'center',
  },
  contenedorTextoLogo: {
    flexDirection: 'row',
    width: '60%',
    alignItems: 'center',
  },
  textoNombreApp: {
    fontSize: 35,
    color: 'black',
    fontFamily: 'Inter-Bold',
    marginLeft: -25,
  },
  imagenLogo: {
    width: 200,
    height: 100,
    resizeMode: 'contain',
    marginLeft: -15,
  },
  ContenedorPadreIconoLogin: {
    width: '10%',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    alignItems: 'center',
  },
  contenedorIconoSinLog: {
    width: 25,
    height: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contenedorIconoConLog: {
    width: 25,
    height: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
