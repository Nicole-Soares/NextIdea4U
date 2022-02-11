import {StyleSheet} from 'react-native';
//estilos de los podcasts

export const stylesPod = StyleSheet.create({
  contenedorPadrePod: {
    width: '90%',
    backgroundColor: '#EFEFEF',
    borderRadius: 5,
    alignSelf: 'center',
    margin: 20,
  },
  contenedorTituloPod: {
    flexDirection: 'row',
    margin: 10,
    width: '30%',
    justifyContent: 'space-between',
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  segundoContenedorPadrePod: {
    alignSelf: 'center',
    margin: 20,
  },
  imagenPod: {
    height: 140,
    width: 140,
    borderRadius: 10,
  },
  segundoContenedorTituloPod: {
    marginBottom: 10,
    width: '85%',
  },
  textoPod: {
    color: 'black',
    fontSize: 17,
    letterSpacing: 1,
    fontWeight: 'bold',
  },
});
