import {Platform, StyleSheet} from 'react-native';

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
    width: '5%',
    alignItems: 'center',
  },
  contenedorTextoLogo: {
    flexDirection: 'row',
    width: '40%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textoNombreApp: {
    fontSize: 35,
    color: 'black',
    fontFamily: 'Inter-Bold',
    fontWeight:Platform.OS === "ios" ? "bold" : null
  },
  imagenLogo: {
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
});
