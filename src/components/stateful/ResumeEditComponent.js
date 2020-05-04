/* Authored by Chubak Bidpaa: chubakbidpaa@gmail.com - 2020 - Corona Times */
import React, { Component } from 'react';
import { StyleSheet, ImageBackground } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import {
  Tooltip,
  Icon,
  Input,
  Text,
  Button,
  ButtonGroup,
} from 'react-native-elements';
import I18t from '../../translations';
import ClosableMessage from '../stateless/ClosableMessage';
import ContactSection from './ResumeEditSections/ContactSection';

export default class ResumeEditComponent extends Component {
  constructor() {
    super();
    /* eslint-disable*/
    this.state = {
      selectedIndex: 0,
      pngUrl: null,
      pdfUrl: null,
      contact: {
        firstName: null,
        lastName: null,
        phoneNumber: null,
        emailAddress: null,
        city: null,
        state: 'Unselected',
        zipCode: null,
      },
      summaryObjective: {
        objective: null,
        summary: null,
        bluf: null,
      },
      historyExperience: [
        {
          companyName: null,
          location: null,
          datesFrom: null,
          datesTo: null,
          dutiesAndTasks: [],
        },
      ],
      technicalSkills: [
        {
          skillName: null,
          skillProficiency: null,
          skillImportance: null,
        },
      ],
      softwareSkills: [
        {
          softwareName: null,
          skillProficiency: null,
          skillImportance: null,
        },
      ],
      degrees: [
        {
          almaMater: null,
          degree: null,
          dateEarned: null,
        },
      ],
      certifications: [
        {
          certName: null,
          grantedBy: null,
          dateEarned: null,
          dateExpires: null,
        },
      ],
      awardsAchievements: [
        {
          awardName: null,
          awardCompany: null,
          dateEarned: null,
        },
      ],
      volunteering: [
        {
          orgName: null,
          tasksCompleted: [],
          dates: [],
        },
      ],
      validatedIcons: {
        emailValid: 'times',
        numberValid: 'times',
        zipCodeValid: 'times',
      },
    };
    /* eslint-enable */
    this.getValidIcon = this.getValidIcon.bind(this);
    this.onSetStateValue = this.onSetStateValue.bind(this);
    this.onValidate = this.onValidate.bind(this);
  }

  onSetStateValue(state, value) {
    /* eslint-disable */
    const stateVar = eval(state);
    /* eslint-enable */
    this.setState({ [stateVar]: value });
  }

  onValidate(toValidate) {
    if (toValidate === 'email') {
      /* eslint-disable */
      if (
        /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(
          this.state.contact.emailAddress,
        )
      ) {
        this.setState({ 'validatedIcons.emailValid': 'check' });
      }
    }
    /* eslint-enable */
    if (toValidate === 'zipCode') {
      if (/^\d{5}(?:[-\s]\d{4})?/.test(this.state.contact.zipCode)) {
        this.setState({ 'validatedIcons.zipCodeValid': 'check' });
      }
    }
    if (toValidate === 'number') {
      /* eslint-disable */
      if (
        /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(
          this.state.contact.phoneNumber,
        )
      ) {
        this.setState({ 'validatedIcons.numberValid': 'check' });
      }
    }
    /* eslint-enable */
  }

  getValidIcon(info) {
    if (info === 'number') {
      return this.state.validatedIcons.numberValid;
    }
    if (info === 'zipCode') {
      return this.state.validatedIcons.zipCodeValid;
    }
    return this.state.validatedIcons.emailValid;
  }

  updateIndex(selectedIndex) {
    this.setState({ selectedIndex });
  }

  render() {
    const buttons = [
      I18t.t('resumeHeaders.contact'),
      I18t.t('resumeHeaders.sumObj'),
      I18t.t('resumeHeaders.histExp'),
      I18t.t('resumeHeaders.skills'),
      I18t.t('resumeHeaders.degCert'),
      I18t.t('resumeHeaders.awards'),
      I18t.t('resumeHeaders.volunteer'),
    ];
    const { selectedIndex } = this.state;
    return (
      <Grid>
        <Row size={30}>
          <ButtonGroup
            onPress={index => this.updateIndex(index)}
            selectedIndex={selectedIndex}
            buttons={buttons}
            containerStyle={{
              height: '35%',
              width: '90%',
              alignContent: 'center',
              justifyContent: 'center',
              borderBottomEndRadius: 20,
              borderTopLeftRadius: 20,
            }}
            textStyle={{
              fontSize: 8,
              marginLeft: 5,
              marginRight: 5,
            }}
            buttonStyle={{
              alignItems: 'center',
              justifyContent: 'center',
            }}
            selectedButtonStyle={{
              alignItems: 'center',
              justifyContent: 'center',
            }}
          />
        </Row>
        <Row size={70}>
          <ContactSection
            selectedIndex={this.state.selectedIndex}
            onSetStateValue={this.onSetStateValue}
            onValidate={this.onValidate}
            getValidIcon={this.getValidIcon}
            state={this.state.contact.state}
          />
        </Row>
      </Grid>
    );
  }
}
