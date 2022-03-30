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
    borderRadius: 6,
  },
  contenedorDatosNot: {
    flexDirection: 'row',
    width: '100%',
    marginTop: 10,
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
    fontSize: 18,
    lineHeight: 25,
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
    fontSize: 20,
    width: '85%',
    marginLeft: 3,
  },
  contenedorNotIconFecha: {
    flexDirection: 'row',
    alignContent: 'center',
  },
  imagenNotAbierta: {
    height: 220,
    width: '100%',
    marginTop: 15,
    borderRadius: 5,
  },
  textoContNot: {
    fontFamily: 'Inter-Bold',
    color: 'black',
    fontSize: 18,
    marginBottom: 5,
  },
  imgContacNot: {
    height: 110,
    width: 110,
    borderRadius: 120,
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
    fontFamily: 'Inter-SemiBold',
    margin: 5,
    fontSize: 14,
  },
  biografiaNotDes: {
    color: 'white',
    width: '90%',
    fontSize: 14,
    marginLeft: 5,
    marginBottom: 15,
    fontFamily: 'Inter-Regular',
    lineHeight: 20,
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
    marginBottom: 5,
    marginTop: 15,
  },
});
