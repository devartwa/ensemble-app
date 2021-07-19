import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

//screens import
import SignIn from '../screens/SignIn';
import Feed from '../screens/Feed';

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="SignIn"
      detachInactiveScreens={false}>
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="Feed" component={Feed} />
    </Stack.Navigator>
  );
};
