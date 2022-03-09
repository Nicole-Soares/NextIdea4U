import {StyleSheet} from 'react-native';

// hoja de estilos del navbar
export const stylesNav = StyleSheet.create({
  contenedorPadre: {
    flexDirection: 'row',
    width: '100%',
    height: 65,
    justifyContent: 'space-around',
    borderBottomWidth: 1,
    borderBottomColor: '#DCDCDC',
  },
  contenedorPadreMenuLogo: {
    flexDirection: 'row',
    justifyContent: 'space-around',

    alignItems: 'center',
  },
  contenedorTextoLogo: {
    flexDirection: 'row',
    width: '54%',
    alignItems: 'center',
  },
  textoNombreApp: {
    fontSize: 35,
    color: 'black',
    fontFamily: 'Inter-Bold',
    marginLeft: -25,
  },
  imagenLogo: {
    borderWidth: 1,
    borderRadius: 10,
    width: 45,
    height: 50,
    marginLeft: 10,
  },
  ContenedorPadreIconoLogin: {
    width: '10%',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    alignItems: 'center',
  },
  contenedorIconoSinLog: {
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 15,
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
