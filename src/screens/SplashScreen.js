import React, {useEffect, useRef} from 'react';
import {Animated, Dimensions, Image, Text, View} from 'react-native';

export default function SplashScreen() {
  const startAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    setTimeout(() => {
      Animated.sequence([
        Animated.timing(startAnimation, {
          toValue: -Dimensions.get('window').height + 100,
          useNativeDriver: true,
        }),
      ]).start();
    }, 2000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Animated.View
      style={{
        transform: [{translateY: startAnimation}],
        width: '100%',
        height: '100%',
      }}>
      <Image
        source={require('../assets/icono/app.png')}
        style={{width: '100%', height: '100%'}}></Image>
    </Animated.View>
  );
}
