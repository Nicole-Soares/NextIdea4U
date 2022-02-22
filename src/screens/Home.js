/* eslint-disable react-hooks/exhaustive-deps */
import React, {useContext, useEffect} from 'react';
import {ScrollView, View} from 'react-native';
import {AppContext} from '../AppContext/AppContext';
import Navbar from '../componentes/Navbar';
import Noticias from '../componentes/Noticias';
import MenuHamburguesa from '../componentes/MenuHamburguesa';

//screen del home

export default function Home({navigation}) {
  const {setListadoNoticiasPodcasts, menuHamburguesa, setMenuHamburguesa} =
    useContext(AppContext);

useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setMenuHamburguesa(false);
      TraerNoticias();
      async function TraerNoticias() {
        try {
          let data = await fetch(
            'https://nextidea4u.com/api/home/get-items.php',
          );

          let respuesta = await data.json();

          setListadoNoticiasPodcasts(respuesta);
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

  return (
    <View style={{width: '100%', height: '100%'}}>
      {menuHamburguesa ? <MenuHamburguesa navigation={navigation} /> : null}
      <Navbar navigation={navigation} />
      <ScrollView style={{height: '100%', width: '100%', flex: 1}}>
        <Noticias navigation={navigation} />
      </ScrollView>
    </View>
  );
}
