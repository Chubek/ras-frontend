/* Authored by Chubak Bidpaa: chubakbidpaa@gmail.com - 2020 - Corona Times */

import * as React from 'react';
import { useNavigation } from '@react-navigation/native';
import ResumeView from '../modules/resume/ResumeView';

export default function ResumeEditScreen() {
  const navigation = useNavigation();
  return <ResumeView navigation={navigation} />;
}
