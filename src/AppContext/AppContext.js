import React from 'react';
import {createContext, useState} from 'react';

export const AppContext = createContext({});

export default function AppProvider({children}) {
  const [listadoNoticiasPodcasts, setListadoNoticiasPodcasts] = useState(null);

  return (
    <AppContext.Provider
      value={{
        listadoNoticiasPodcasts,
        setListadoNoticiasPodcasts,
      }}>
      {children}
    </AppContext.Provider>
  );
}
