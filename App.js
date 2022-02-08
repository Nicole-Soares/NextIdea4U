import Home from './src/screens/Home';
import React, {useContext} from 'react';
import 'react-native';
import AppProvider, {AppContext} from './src/AppContext/AppContext';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './src/navigation/StackNavigation';


export default function App() {
  
  return (
    <NavigationContainer>
      <AppProvider>
        <StackNavigation />
      </AppProvider>
    </NavigationContainer>
  );
}
