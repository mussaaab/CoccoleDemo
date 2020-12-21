import React from 'react';
import { View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigation from './AppNavigation';
import { SplashLoading } from './src/Screens';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar translucent={true} backgroundColor="transparent" />
      <AppNavigation />
    </NavigationContainer>
  );
};

export default App;
