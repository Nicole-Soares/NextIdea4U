import {StyleSheet} from 'react-native';

//estilos de la hoja de ingresar
export const stylesIng = StyleSheet.create({
  contenedorPadre: {
    backgroundColor: 'white',
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
  },
  botonFace: {
    backgroundColor: '#3b5999',
    width: '100%',
    borderRadius: 2,
    height: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  botonGoogle: {
    backgroundColor: '#fb5252',
    width: '100%',
    borderRadius: 2,
    height: 30,
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textoGoFa: {
    color: 'white',
    fontWeight: 'bold',
    width: '60%',
    marginLeft: 10,
  },
  contenedorIngresarMail: {
    alignSelf: 'center',
    marginTop: 10,
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
    paddingLeft: 10,
  },
  contenedorBotones: {
    width: '90%',
    alignSelf: 'center',
  },
  botonIniciar: {
    borderRadius: 2,
    backgroundColor: '#005cff',
    height: 30,
    justifyContent: 'center',
    margin: 10,
  },
  textoIniciar: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
