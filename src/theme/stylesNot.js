import {Platform, StyleSheet} from 'react-native';

//estilos de las noticias
export const stylesNot = StyleSheet.create({
  contenedorPadreNot: {
    width: '90%',
    alignSelf: 'center',
    margin: 20,
  },
  imagenNot: {
    width: '100%',
    height: 220,
    borderRadius: 10,
  },
  contenedorDatosNot: {
    flexDirection: 'row',
    width: '100%',
<<<<<<< HEAD
    justifyContent: 'space-between',
    marginTop:10
=======
>>>>>>> 868f7a66d57acf91721c55911cc4b87152c21686
  },
  textoTituloNot: {
    fontSize: 19,
    color: 'blue',
    fontWeight: 'bold',
    width: '95%',
  },
  tituloPrincipalNot: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
    width: '100%',
  },
  textoDesNot: {
    color: 'black',
    fontSize: 15,
  },
  contenedorNoticiaScreen: {
    height: '100%',
    width: '100%',
    backgroundColor: 'white',
  },
  textoNotTitulo: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 27,
    width: '85%',
  },
  contenedorTextoNot: {
    width: '100%',
  },
  subtituloNot: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
  },
  textoDesDesNot: {
    color: 'black',
<<<<<<< HEAD
    fontSize: 15,
    width: '90%',
    marginLeft: Platform.OS === "ios" ? 10 : null
=======
    fontSize: 17,
    width: '95%',
    marginLeft: 3,
>>>>>>> 868f7a66d57acf91721c55911cc4b87152c21686
  },
  contenedorNotIconFecha: {
    flexDirection: 'row',
    alignContent: 'center',
  },
  imagenNotAbierta: {
    height: 220,
    width: '90%',
    marginTop: 15,
    borderRadius: 5,
  },
  textoContNot: {
    fontFamily: 'Inter-Bold',
    fontWeight:Platform.OS === "ios" ? "bold" : null, 
    color: 'black',
    fontSize: 23,
    marginBottom: 10,
  },
  imgContacNot: {
    height: 90,
    width: 90,
    borderRadius: 40,
    borderColor: 'white',
    borderWidth: 3,
    margin: 5,
  },
  participanteNombreNot: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  participanteApellidoNot: {
    color: 'white',
    marginLeft: 5,
    fontWeight: 'bold',
    fontSize: 20,
  },
  imagenContactNot: {
    height: 30,
    width: 30,
    marginLeft: 10,
  },
  profesionContactoNot: {
    color: 'white',
    fontWeight: 'bold',
    margin: 5,
    fontSize: 15,
  },
  biografiaNotDes: {
    color: 'white',
    width: '90%',
    fontSize: 15,
    marginLeft: 5,
    marginBottom: 15,
  },
  contenedorOtrasNoticiasNot: {
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    width: '90%',
    alignSelf: 'center',
  },
  textoOtrasNoticias: {
    fontFamily: 'Inter-Bold',
    fontWeight:Platform.OS === "ios" ? "bold" : null,
    color: 'black',
    fontSize: 23,
    marginBottom: 15,
    marginTop: 15,
  },
});
