import React from 'react';
import {
  View
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigation from './AppNavigation'
import { SplashLoading } from './src/Screens';



const App = () => {
  return (
    <NavigationContainer style={{ flex: 1 }}>
      {/* <SplashLoading /> */}
      <AppNavigation />

    </NavigationContainer>
  );
};


export default App;
