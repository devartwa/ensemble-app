import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './stack/AuthStack';
import {StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar barStyle="light-content" />
        <AuthStack />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
