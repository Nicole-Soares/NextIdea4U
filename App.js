import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import {Platform} from "react-native";
import AppProvider from './src/AppContext/AppContext';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './src/navigation/StackNavigation';
import OneSignal from 'react-native-onesignal';
import {SafeAreaView} from 'react-native-safe-area-context';
import SplashScreen from './src/screens/SplashScreen';

export default function App() {
  const setTokenUrl = 'https://nextidea4u.com/api/set-token.php';
  const [splashScreenOn, setSplashScreenOn] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setSplashScreenOn(false);
    }, 2000);
  }, []);

  //sacar el device
  useEffect(() => {
    (async () => {
      OneSignal.setLogLevel(6, 0);
      OneSignal.setAppId('13e549b0-e55d-45bb-9807-1ba1bac02cbe');
      const deviceState = await OneSignal.getDeviceState();
      global.playerId = deviceState.userId;
      //console.log(deviceState);
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
        {Platform.OS === "android" && splashScreenOn ? <SplashScreen /> : <StackNavigation />}
      </AppProvider>
    </NavigationContainer>
  );
}
