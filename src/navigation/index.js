import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HamburgerButton from '../components/stateless/HamburgerButton';

// ComponentImport

import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import ChangePasswordScreen from '../screens/ChangePasswordScreen';
import ResumeCreationScreen from '../screens/ResumeCreationScreen';
import ModalComponent from '../components/stateless/ModalComponent';
import ResumeCreationHomeScreen from '../screens/ResumeCreationHomeScreen';

const Stack = createStackNavigator();
const Root = createDrawerNavigator();
const Auth = createStackNavigator();
const Resume = createStackNavigator();

function AuthNavigator() {
  return (
    <Auth.Navigator initialRouteName="LoginScreen">
      <Auth.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={({ navigation }) => ({
          title: 'Login',
          headerLeft: () => <HamburgerButton navigation={navigation} />,
        })}
      />

      <Auth.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{ title: 'Register' }}
      />
      <Auth.Screen
        name="UpdatePasswordScreen"
        component={ChangePasswordScreen}
        options={{ title: 'Change Password' }}
      />
    </Auth.Navigator>
  );
}

function ResumeNavigator() {
  return (
    <Resume.Navigator initialRouteName="ResumeCreationHomeScreen">
      <Resume.Screen
        name="ResumeCreationScreen"
        component={ResumeCreationScreen}
        options={{ title: 'Create Resume' }}
      />
      <Resume.Screen
        name="ResumeCreationHomeScreen"
        component={ResumeCreationHomeScreen}
        options={{ title: 'Select a Section' }}
        initialParams={{ resumeId: '0' }}
      />
    </Resume.Navigator>
  );
}

function NavigationStack() {
  return (
    <Stack.Navigator initialRouteName="Resume">
      <Stack.Screen
        name="Auth"
        component={AuthNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Resume"
        component={ResumeNavigator}
        options={{ headerShown: false }}
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
