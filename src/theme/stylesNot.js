import {StyleSheet} from 'react-native';

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
    justifyContent: 'space-between',
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
    fontSize: 15,
    width: '90%',
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
    color: 'black',
    fontSize: 23,
    marginBottom: 10,
  },
  imgContacNot: {
    height: 70,
    width: 70,
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
    margin: 5,
    fontSize: 15,
  },
  contenedorOtrasNoticiasNot: {
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    width: '90%',
    alignSelf: 'center',
  },
  textoOtrasNoticias: {
    fontFamily: 'Inter-Bold',
    color: 'black',
    fontSize: 23,
    marginBottom: 15,
    marginTop: 15,
  },
});
