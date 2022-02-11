import React from 'react';
import {createContext, useState} from 'react';

export const AppContext = createContext({});

//variables en el contexto
export default function AppProvider({children}) {
  const [listadoNoticiasPodcasts, setListadoNoticiasPodcasts] = useState(null);
  const [menuHamburguesa, setMenuHamburguesa] = useState(false);
  const [listadoPodcasts, setListadoPodcasts] = useState(null);
  const [userPassword, setUserPassword] = useState('');
  const [userEmail, setUserEmail] = useState('');

  return (
    <AppContext.Provider
      value={{
        listadoNoticiasPodcasts,
        setListadoNoticiasPodcasts,
        menuHamburguesa,
        setMenuHamburguesa,
        listadoPodcasts,
        setListadoPodcasts,
        userPassword,
        setUserPassword,
        userEmail,
        setUserEmail,
      }}>
      {children}
    </AppContext.Provider>
  );
}
