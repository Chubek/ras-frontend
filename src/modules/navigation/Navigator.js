import React from 'react';

import AuthScreen from '../auth/AuthView';
import AppNavigator from './RootNavigation';
import { isLoggedIn } from '../auth/AuthState';

export default function NavigatorView() {
  if (isLoggedIn) {
    return <AppNavigator />;
  } 
    return <AuthScreen />;
  
}
