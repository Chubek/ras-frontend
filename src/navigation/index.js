import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HamburgerButton from '../components/stateless/HamburgerButton';

// ComponentImport

import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import ChangePasswordScreen from '../screens/ChangePasswordScreen';

import ModalComponent from '../components/stateless/ModalComponent';

const Stack = createStackNavigator();
const Root = createDrawerNavigator();

function NavigationStack() {
  return (
    <Stack.Navigator initialRouteName="LoginScreen">
      {/* ScreenNames */}
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={({ navigation }) => ({
          title: 'Login',
          headerRight: () => <HamburgerButton navigation={navigation} />,
        })}
      />

      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{ title: 'Register' }}
      />
      <Stack.Screen
        name="UpdatePasswordScreen"
        component={ChangePasswordScreen}
        options={{ title: 'Change Password' }}
      />
    </Stack.Navigator>
  );
}

export default function RootNavigation() {
  return (
    <NavigationContainer>
      <Root.Navigator drawerContent={props => <ModalComponent {...props} />}>
        <Root.Screen
          name="Main"
          component={NavigationStack}
          options={{ headerShown: false }}
        />
      </Root.Navigator>
    </NavigationContainer>
  );
}
