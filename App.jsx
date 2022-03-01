/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { useColorScheme } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { HomeBottomTab } from './src/componets/navigations/HomeBottomTab';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <NavigationContainer>
      <HomeBottomTab isDarkMode={isDarkMode} />
    </NavigationContainer>
  );
};

export default App;
