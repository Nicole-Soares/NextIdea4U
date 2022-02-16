import Home from './src/screens/Home';
import React, {useContext, useEffect} from 'react';
import {ScrollView} from 'react-native';
import AppProvider, {AppContext} from './src/AppContext/AppContext';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './src/navigation/StackNavigation';
import OneSignal from 'react-native-onesignal';

export default function App() {
  const setTokenUrl = 'https://nextidea4u.com/api/set-token.php';

  useEffect(() => {
    (async () => {
      OneSignal.setLogLevel(6, 0);
      OneSignal.setAppId('71d0ccb3-9640-4fe8-a49b-a9c0157edc64');
      const deviceState = await OneSignal.getDeviceState();
      global.playerId = deviceState.userId;
      if (deviceState.userId) {
        await fetch(setTokenUrl + '?token=' + deviceState.userId, {
          method: 'POST',
          headers: {'Content-Type': 'application/x-www-form-urlencoded'},
          body: 'token=' + deviceState.userId,
        })
          .then(response => {})
          .catch(error => {
            console.log(error);
          });
      }
    })();

    return () => {
      null;
    };
  }, []);

  return (

      <NavigationContainer>
        <AppProvider>
          <StackNavigation />
        </AppProvider>
      </NavigationContainer>
   
  );
}
