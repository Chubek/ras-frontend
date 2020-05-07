/* Authored by Chubak Bidpaa: chubakbidpaa@gmail.com - 2020 - Corona Times */

import * as React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import ResumeCreationHomeComponent from '../components/stateful/ResumeComponents/ResumeCreationHomeComponent';

export default function ResumeEditScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  return <ResumeCreationHomeComponent navigation={navigation} route={route} />;
}
