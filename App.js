import React from 'react';
import { View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigation from './AppNavigation';
import { Colors } from './src/Config';


const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={Colors.fountain_blue} />
      <AppNavigation />
    </NavigationContainer>
  );
};

export default App;
