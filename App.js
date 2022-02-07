import Home from './src/screens/Home';
import React from 'react';
import 'react-native';
import AppProvider from './src/AppContext/AppContext';

export default function App() {
  return (
    <AppProvider>
      <Home />
    </AppProvider>
  );
}
