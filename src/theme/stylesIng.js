import {StyleSheet} from 'react-native';

//estilos de la hoja de ingresar
export const stylesIng = StyleSheet.create({
  contenedorPadre: {
    backgroundColor: '#f5f4f8',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  contenedorHermano: {
    backgroundColor: 'white',
    width: '90%',
    elevation: 5,
  },
  contenedorArriba: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    margin: 10,
  },
  estilosTextoRegistrate: {
    width: '50%',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
  },
  contenedorBotonesRedesSociales: {
    alignItems: 'center',
    width: '100%',
    margin: 10,
  },
  botonFace: {
    backgroundColor: '#3b5999',
    width: '70%',
    borderRadius: 2,
    height: 30,
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  botonGoogle: {
    backgroundColor: '#fb5252',
    width: '70%',
    borderRadius: 2,
    height: 30,
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  textoGoFa: {
    color: 'white',
    fontWeight: 'bold',
    width: '60%',
  },
  contenedorIngresarMail: {
    alignSelf: 'center',
  },
  textoIngresa: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 15,
  },
  contenedorInputs: {
    width: '90%',
    alignSelf: 'center',
    margin: 10,
  },
  estilosInputs: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#8898aa',
    margin: 5,
  },
  contenedorBotones: {
    width: '90%',
    alignSelf: 'center',
    margin: 10,
  },
  botonIniciar: {
    borderRadius: 2,
    backgroundColor: '#3368ce',
    height: 30,
    justifyContent: 'center',
  },
  textoIniciar: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
