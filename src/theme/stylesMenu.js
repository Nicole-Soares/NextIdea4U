import {StyleSheet} from 'react-native';

//estilos menu hamburguesa
export const stylesMenu = StyleSheet.create({
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
  segundoContenedor: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    marginTop: 20,
  },
  logo: {
    height: 65,
    width: 60,
    marginLeft: 20,
  },
  contenedorCerrar: {
    justifyContent: 'center',
  },
  iconoCerrar: {
    marginRight: -15,
  },
  contenedorRedi: {
    marginLeft: 20,
    marginTop: 20,
  },
  texto: {color: 'black', fontSize: 15, fontWeight: 'bold', marginBottom: 5},
  contenedorIniciar: {
    alignItems: 'center',
    marginTop: 15,
    width: '100%',
  },
  botonIniciar: {
    borderWidth: 1,
    borderColor: 'blue',
    width: '90%',
    borderRadius: 5,
    height: 35,
    marginBottom: 10,
  },
  textoBotonIniciar: {
    fontWeight: 'bold',
    color: 'blue',
    marginTop: 5,
    fontSize: 15,
    alignSelf: 'center',
  },
  botonRegistrar: {
    borderWidth: 1,
    borderColor: 'blue',
    width: '90%',
    borderRadius: 5,
    height: 35,
    backgroundColor: 'blue',
    marginBottom: 15,
  },
  textoRegistrar: {
    fontWeight: 'bold',
    color: 'white',
    marginTop: 5,
    alignSelf: 'center',
    fontSize: 15,
  },
  linea: {
    borderTopColor: '#f5f4f8',
    borderTopWidth: 1,
    marginTop: 13,
    width: '90%',
    alignSelf: 'center',
  },
  contenedorRedes: {
    marginTop: 20,
  },
  contenedorSeguinos: {
    alignItems: 'center',
    width: '30%',
    marginBottom: 20,
  },
  textoSeguinos: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 15,
  },
  contenedorIconos: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '90%',
    alignSelf: 'center',
  },
  contenedorEscuchanosIconos: {
    marginTop: 20,
    borderBottomColor: '#f5f4f8',
    borderBottomWidth: 1,
    width: '95%',
    alignSelf: 'center',
  },
  contenedorEscuchanos: {
    alignItems: 'center',
    width: '30%',
    marginBottom: 20,
  },
  escuchanos: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 15,
    marginLeft: 10,
  },
  contenedorIconosEscuchanos: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '90%',
    alignSelf: 'center',
    marginBottom: 15,
  },
  contenedorParteInferior: {
    alignSelf: 'center',
    width: '88%',
    marginTop: 20,
  },
  textoNext: {
    fontFamily: 'Inter-Bold',
    color: 'black',
  },
  textoData: {
    fontFamily: 'Inter-Regular',
    color: 'gray',
    marginTop: 10,
  },
});
