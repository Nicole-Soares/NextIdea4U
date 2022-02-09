import React from 'react';
import {createContext, useState} from 'react';

export const AppContext = createContext({});

export default function AppProvider({children}) {
  const [listadoNoticiasPodcasts, setListadoNoticiasPodcasts] = useState(null);
  const [menuHamburguesa, setMenuHamburguesa] = useState(false);
  const [listadoPodcasts, setListadoPodcasts] = useState(null);

  return (
    <AppContext.Provider
      value={{
        listadoNoticiasPodcasts,
        setListadoNoticiasPodcasts,
        menuHamburguesa,
        setMenuHamburguesa,
        listadoPodcasts,
        setListadoPodcasts,
      }}>
      {children}
    </AppContext.Provider>
  );
}
