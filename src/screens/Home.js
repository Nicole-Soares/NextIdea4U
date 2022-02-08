import React, {useContext, useEffect} from 'react';
import {View, Text, ScrollView, Dimensions} from 'react-native';
import {AppContext} from '../AppContext/AppContext';
import MoreNoticias from '../componentes/MoreNoticias';
import Navbar from '../componentes/Navbar';
import Noticias from '../componentes/Noticias';
import MenuHamburguesa from '../componentes/MenuHamburguesa';

//screen del home

export default function Home() {
  const {setListadoNoticiasPodcasts, menuHamburguesa} = useContext(AppContext);

  useEffect(() => {
    TraerNoticias();
    async function TraerNoticias() {
      try {
        let data = await fetch('https://nextidea4u.com/api/home/get-items.php');

        let respuesta = await data.json();

        setListadoNoticiasPodcasts(respuesta);
      } catch (error) {
        console.error(error);
      }
    }
  }, []);

  return (
    <ScrollView style={{height: '100%', width: '100%', flex: 1}}>
      {menuHamburguesa ? <MenuHamburguesa /> : null}
      <Navbar />
      <Noticias />
    </ScrollView>
  );
}
