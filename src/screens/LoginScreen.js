/* Authored by Chubak Bidpaa: chubakbidpaa@gmail.com - 2020 - Corona Times */

import * as React from 'react';
import { useNavigation } from '@react-navigation/native';
import FirebaseAuthView from '../modules/firebase-auth/FirebaseAuthViewContainer';

export default function LoginScreen() {
  const navigation = useNavigation();
  return <FirebaseAuthView navigation={navigation} switcher="login" />;
}
