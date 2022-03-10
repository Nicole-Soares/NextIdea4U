import {Platform, StyleSheet} from 'react-native';

//estilos de la screen de registrarse

export const stylesReg = StyleSheet.create({
  contenedorPadre: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },

  contenedorSuperior: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    margin: 10,
  },
  textoCrearCuenta: {
    width:  Platform.OS === "ios" ? "46%" :'40%',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
<<<<<<< HEAD
    
  },
  contenedorFacebook: {
    alignItems: 'center',
    width: '100%',
    marginTop:10
=======
    marginBottom: 10,
  },
  contenedorFacebook: {
    alignItems: 'center',
    width: '90%',
    marginTop: 15,
>>>>>>> 868f7a66d57acf91721c55911cc4b87152c21686
  },
  botonFace: {
    backgroundColor: '#3b5999',
    width: '100%',
    borderRadius: 5,
    height: 40,
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
    borderRadius: 5,
    height: 40,
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
    marginBottom: 15,

    width: '100%',
  },
  inputPassword: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#8898aa',
    marginBottom: 5,
    width: '100%',
  },
  contenedorRegistrarse: {
    width: '90%',
    alignSelf: 'center',
  },
  botonReg: {
    borderRadius: 5,
    backgroundColor: '#005cff',
    height: 45,
    justifyContent: 'center',
  },
  textoReg: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
