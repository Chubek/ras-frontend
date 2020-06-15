/* Authored by Chubak Bidpaa: chubakbidpaa@gmail.com - 2020 - Corona Times */

import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import ResumeCreationComponent from '../../components/stateful/ResumeComponents/ResumeCreationComponent';
import TechnicalSkillsListComponent from '../../components/stateful/ResumeComponents/TechnicalSkillsListComponent';
import VolunteeringListComponent from '../../components/stateful/ResumeComponents/VolunteeringsListtComponent';
import DegreeListComponent from '../../components/stateful/ResumeComponents/DegreesListComponent';
import SoftwareSkillsListComponent from '../../components/stateful/ResumeComponents/SoftwareSkillsListComponent';
import HistoryExperienceListComponent from '../../components/stateful/ResumeComponents/HistoryExperienceListComponent';
import ContactSectionComponent from '../../components/stateful/ResumeComponents/ContactSectionComponent';
import AwardsListComponent from '../../components/stateful/ResumeComponents/AwardsListComponent';
import CertificationsListComponent from '../../components/stateful/ResumeComponents/CertificationsListComponent';
import ObjeciveSection from '../../components/stateful/ResumeComponents/ObjectiveSection';
export default class ResumeView extends Component {
  state = {};

  render() {
    const { navigation, switcher, resumeId, route } = this.props;
    if (switcher === 'resumeCreate') {
      return (
        <ResumeCreationComponent
          navigation={navigation}
          resumeId={resumeId}
          createResume={this.props.createResume}
        />
      );
    }
    if (switcher === 'techSkills') {
      return (
        <TechnicalSkillsListComponent
          navigation={navigation}
          route={route}
          appendTechSkills={this.props.appendTechSkills}
          resumeId={this.props.resumeId}
        />
      );
    }
    if (switcher === 'volunteerings') {
      return (
        <VolunteeringListComponent
          navigation={navigation}
          route={route}
          appendVolunteerings={this.props.appendVolunteerings}
          resumeId={this.props.reusmeId}
        />
      );
    }
    if (switcher === 'degree') {
      return (
        <DegreeListComponent
          navigation={navigation}
          route={route}
          appendDegrees={this.props.appendDegrees}
          resumeId={this.props.resumeId}
        />
      );
    }
    if (switcher === 'softwareSkills') {
      return (
        <SoftwareSkillsListComponent
          navigation={navigation}
          route={route}
          appendSoftwareSkills={this.props.appendSoftwareSkills}
          resumeId={this.props.resumeId}
        />
      );
    }
    if (switcher === 'historyExp') {
      return (
        <HistoryExperienceListComponent
          navigation={navigation}
          route={route}
          appendHistory={this.props.appendHistory}
          resumeId={resumeId}
        />
      );
    }
    if (switcher === 'contact') {
      return (
        <ContactSectionComponent
          navigation={navigation}
          route={route}
          setContactInfo={this.props.setContactInfo}
          resumeId={this.props.resumeId}
          contactInfo={this.props.contactInfo}
        />
      );
    }
    if (switcher === 'objective') {
      return (
        <ObjeciveSection
          navigation={navigation}
          route={route}
          setSummaryObjective={this.props.setSummaryObjective}
          resumeId={this.props.resumeId}
        />
      );
    }
    if (switcher === 'cert') {
      return (
        <CertificationsListComponent
          navigation={navigation}
          route={route}
          appendCert={this.props.appendCert}
          resumeId={this.props.resumeId}
          certifications={this.props.certifications}
        />
      );
    }
    if (switcher === 'award') {
      return (
        <AwardsListComponent
          navigation={navigation}
          route={route}
          appendAwards={this.props.appendAwards}
          resumeId={this.props.resumeId}
          awardsAchievements={this.props.awardsAchievements}
        />
      );
    }

    return false;
  }
}
