/* Authored by Chubak Bidpaa: chubakbidpaa@gmail.com - 2020 - Corona Times */

import * as React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import ResumeView from '../modules/resume/ResumeView';

export default function SoftwareSkillsListScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  return <ResumeView navigation={navigation} route={route} switcher="award" />;
}
