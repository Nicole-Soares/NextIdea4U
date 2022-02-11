import {StyleSheet} from 'react-native';

//estilos de la screen de registrarse

export const stylesReg = StyleSheet.create({
  contenedorPadre: {
    backgroundColor: '#f5f4f8',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  contenedorGris: {
    backgroundColor: 'white',
    width: '90%',
    elevation: 5,
  },
  contenedorSuperior:{
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    margin: 10,
  },
  textoCrearCuenta:{
    width: '40%',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
  },
  contenedorFacebook:{
    alignItems: 'center', width: '100%', margin: 10
  },
  botonFace:{
    backgroundColor: '#3b5999',
    width: '70%',
    borderRadius: 2,
    height: 30,
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  textoFace:{
    color: 'white', fontWeight: 'bold', width: '60%'
  },
  botonGoogle:{
    backgroundColor: '#fb5252',
    width: '70%',
    borderRadius: 2,
    height: 30,
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  textoGoogle:{
    color: 'white', fontWeight: 'bold', width: '60%'
  },
  textoRegistrarEmail:{
    color: 'black', fontWeight: 'bold', fontSize: 15
  },
  contenedorInputs:{
    width: '90%', alignSelf: 'center', margin: 10
  },
  inputEmail:{
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#8898aa',
    margin: 5,
  },
  inputPassword:{
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#8898aa',
    margin: 5,
  },
  contenedorRegistrarse:{
    width: '90%', alignSelf: 'center', margin: 10
  },
  botonReg:{
    borderRadius: 2,
    backgroundColor: '#3368ce',
    height: 30,
    justifyContent: 'center',
  },
  textoReg:{
    color: 'white', fontWeight: 'bold', textAlign: 'center'
  }
});
