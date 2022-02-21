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
  const [noticia, setNoticia] = useState(null);
  const [podcasts, setPodcasts] = useState(null);
  const [loading, setLoading] = useState(false);
  const [facebookEmail, setFacebookEmail] = useState(null);
  const [facebookId, setFacebookId] = useState(null);
  const [facebookCupleanos, setFacebookCumpleanos] = useState(null);
  const [facebookNombre, setFacebookNombre] = useState(null);
  const [facebookApellido, setFacebookApellido] = useState(null);
  const [googleNombre, setGoogleNombre] = useState(null);
  const [googleId, setGoogleId] = useState(null);
  const [googleEmail, setGoogleEmail] = useState(null);
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
        noticia,
        setNoticia,
        podcasts,
        setPodcasts,
        loading,
        setLoading,
        facebookEmail,
        setFacebookEmail,
        facebookId,
        setFacebookId,
        facebookCupleanos,
        setFacebookCumpleanos,
        facebookNombre,
        setFacebookNombre,
        facebookApellido,
        setFacebookApellido,
        googleNombre,
        setGoogleNombre,
        googleId,
        setGoogleId,
        googleEmail,
        setGoogleEmail,
      }}>
      {children}
    </AppContext.Provider>
  );
}
