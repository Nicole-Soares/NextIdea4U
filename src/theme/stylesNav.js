import {StyleSheet} from 'react-native';

// hoja de estilos del navbar
export const stylesNav = StyleSheet.create({
  contenedorPadre: {
    flexDirection: 'row',
    width: '100%',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#DCDCDC',
  },
  contenedorPadreMenuLogo: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '50%',
    alignItems: 'center',
  },
  contenedorTextoLogo: {
    flexDirection: 'row',
  },
  textoNombreApp: {
    fontSize: 30,
    color: 'black',
    fontWeight: 'bold',
  },
  imagenLogo: {
    borderWidth: 1,
    borderRadius: 10,
    width: 40,
    height: 40,
    marginLeft: 10,
  },
  ContenedorPadreIconoLogin: {
    width: '50%',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
