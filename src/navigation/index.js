import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

// ComponentImport

import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';

const Stack = createStackNavigator();

export default function NavigationStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="RegisterScreen">
        {/* ScreenNames */}
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{ title: 'Register' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
