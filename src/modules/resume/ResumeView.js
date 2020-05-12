/* Authored by Chubak Bidpaa: chubakbidpaa@gmail.com - 2020 - Corona Times */

import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import ResumeCreationComponent from '../../components/stateful/ResumeComponents/ResumeCreationComponent';
import TechnicalSkillsListComponent from '../../components/stateful/ResumeComponents/TechnicalSkillsListComponent';
import VolunteeringListComponent from '../../components/stateful/ResumeComponents/VolunteeringsListtComponent';
import DegreeListComponent from '../../components/stateful/ResumeComponents/DegreesListComponent';
import SoftwareSkillsListComponent from '../../components/stateful/ResumeComponents/SoftwareSkillsListComponent';
import HistoryExperienceListComponent from '../../components/stateful/ResumeComponents/HistoryExperienceListComponent';

export default class ResumeView extends Component {
  state = {};

  render() {
    const { navigation, switcher, resumeId, route } = this.props;
    if (switcher === 'resumeCreate') {
      return (
        <ResumeCreationComponent navigation={navigation} resumeId={resumeId} />
      );
    }
    if (switcher === 'techSkills') {
      return (
        <TechnicalSkillsListComponent navigation={navigation} route={route} />
      );
    }
    if (switcher === 'volunteerings') {
      return (
        <VolunteeringListComponent navigation={navigation} route={route} />
      );
    }
    if (switcher === 'degree') {
      return <DegreeListComponent navigation={navigation} route={route} />;
    }
    if (switcher === 'softwareSkills') {
      return (
        <SoftwareSkillsListComponent navigation={navigation} route={route} />
      );
    }
    if (switcher === 'historyExp') {
      return (
        <HistoryExperienceListComponent navigation={navigation} route={route} />
      );
    }

    return false;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 30,
  },
});
