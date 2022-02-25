import {StyleSheet} from 'react-native';

//estilos de la screen de registrarse

export const stylesReg = StyleSheet.create({
  contenedorPadre: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  contenedorGris: {
    backgroundColor: 'white',
    width: '90%',
    elevation: 5,
  },
  contenedorSuperior: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    margin: 10,
  },
  textoCrearCuenta: {
    width: '40%',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
  },
  contenedorFacebook: {
    alignItems: 'center',
    width: '100%',
  },
  botonFace: {
    backgroundColor: '#3b5999',
    width: '100%',
    borderRadius: 2,
    height: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textoFace: {
    color: 'white',
    fontWeight: 'bold',
    width: '95%',
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
  textoGoogle: {
    color: 'white',
    fontWeight: 'bold',
    width: '95%',
    marginLeft: 10,
  },
  textoRegistrarEmail: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 15,
  },
  contenedorInputs: {
    width: '90%',
    alignSelf: 'center',
    margin: 10,
  },
  inputEmail: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#8898aa',
    margin: 5,
    paddingLeft: 10,
  },
  inputPassword: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#8898aa',
    margin: 5,
    paddingLeft: 10,
  },
  contenedorRegistrarse: {
    width: '90%',
    alignSelf: 'center',
  },
  botonReg: {
    borderRadius: 2,
    backgroundColor: '#005cff',
    height: 30,
    justifyContent: 'center',
    margin: 10,
  },
  textoReg: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
