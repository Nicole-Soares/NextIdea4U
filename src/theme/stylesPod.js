import {StyleSheet} from 'react-native';
//estilos de los podcasts

export const stylesPod = StyleSheet.create({
  contenedorPadrePod: {
    width: '95%',
    borderRadius: 5,
    alignSelf: 'center',
    marginTop: 35,
    backgroundColor: '#f5f4f8',
    marginLeft: -5,
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
  },
  imagenPod: {
    height: 140,
    width: 140,
    borderRadius: 10,
    marginBottom: 10,
  },
  segundoContenedorTituloPod: {
    marginBottom: 15,
    width: '100%',
  },
  textoPod: {
    color: 'black',
    fontSize: 18,
    letterSpacing: 1,
    fontWeight: 'bold',
    width: 150,
  },
  tituloDelPodNot: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 18,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    width: '90%',
    alignSelf: 'center',
  },
});
