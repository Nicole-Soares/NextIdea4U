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
    marginBottom: 10,
  },
  contenedorBotonesRedesSociales: {
    alignItems: 'center',
    width: '100%',
    marginTop: 15,
  },
  botonFace: {
    backgroundColor: '#3b5999',
    width: '100%',
    borderRadius: 5,
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
  },
  botonGoogle: {
    backgroundColor: '#fb5252',
    width: '100%',
    borderRadius: 5,
    height: 45,
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
    marginTop: 15,
    marginBottom: 15,
  },
  textoIngresa: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 15,
  },
  contenedorInputs: {
    width: '100%',
    alignItems: 'center',
  },
  estilosInputs: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#8898aa',
    margin: 10,
    width: '100%',
  },
  contenedorBotones: {
    width: '100%',
    alignSelf: 'center',
  },
  botonIniciar: {
    borderRadius: 5,
    backgroundColor: '#005cff',
    height: 45,
    marginTop: 5,
    justifyContent: 'center',
  },
  textoIniciar: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
