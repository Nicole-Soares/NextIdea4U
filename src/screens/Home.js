/* eslint-disable react-hooks/exhaustive-deps */
import React, {useContext, useEffect, useState} from 'react';
import {ScrollView, View, SafeAreaView, Text} from 'react-native';
import {AppContext} from '../AppContext/AppContext';
import Navbar from '../componentes/Navbar';
import MenuHamburguesa from '../componentes/MenuHamburguesa';
import Listado from '../componentes/Listado';

//screen del home

export default function Home({navigation}) {
  const {
    setListadoNoticiasPodcasts,
    menuHamburguesa,
    setMenuHamburguesa,
    setPagina,
    pagina,
    setDatos,
    datos,
    setLoading,
    maxPaginas,
    setMaxPaginas,
    listadoNoticiasPodcasts,
  } = useContext(AppContext);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setMenuHamburguesa(false);
      TraerNoticias();
      async function TraerNoticias() {
        try {
          let data = await fetch(
            `https://nextidea4u.com/api/home/get-items.php?page=1`,
            {
              method: 'POST',
            },
          );

          let respuesta = await data.json();

          setListadoNoticiasPodcasts(respuesta);
          setDatos(respuesta);
        } catch (error) {
          console.error(error);
        }
      }

      // The screen is focused
      // Call any action
    });

    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe;
  }, [navigation]);

  // para saber cuando esta 20px antes del final de la screen
  const isCloseToBottom = ({layoutMeasurement, contentOffset, contentSize}) => {
    const paddingToBottom = 5;
    return (
      layoutMeasurement.height + contentOffset.y >=
      contentSize.height - paddingToBottom
    );
  };

  //lo que hace cuando llega al final de la screen
  const enableSomeButton = () => {
    if (pagina < datos.maxPages) {
      setPagina(pagina + 1);

      TraerNoticias();
      async function TraerNoticias() {
        setLoading(true);
        try {
          let data = await fetch(
            `https://nextidea4u.com/api/home/get-items.php?page=${pagina}`,
            {
              method: 'POST',
            },
          );

          let respuesta = await data.json();

          setLoading(false);

          setListadoNoticiasPodcasts({
            podcasts: datos.podcasts,
            news: datos.news,
            more: listadoNoticiasPodcasts.more.concat(respuesta.news),
          });
        } catch (error) {
          console.error(error);
        }
      }
    }
  };

  return (
    <SafeAreaView style={{width: '100%', height: '100%'}}>
      <Navbar navigation={navigation} />
      <ScrollView
        style={{height: '100%', width: '100%', flex: 1}}
        onScroll={({nativeEvent}) => {
          if (isCloseToBottom(nativeEvent)) {
            enableSomeButton();
          }
        }}>
        <Listado navigation={navigation} />
      </ScrollView>
      {menuHamburguesa ? <MenuHamburguesa navigation={navigation} /> : null}
    </SafeAreaView>
  );
}
