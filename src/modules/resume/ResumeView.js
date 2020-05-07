/* Authored by Chubak Bidpaa: chubakbidpaa@gmail.com - 2020 - Corona Times */

import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import ResumeCreationComponent from '../../components/stateful/ResumeComponents/ResumeCreationComponent';

export default class ResumeView extends Component {
  state = {};

  render() {
    const { navigation, switcher, resumeId } = this.props;
    if (switcher === 'resumeCreate') {
      return (
        <ResumeCreationComponent navigation={navigation} resumeId={resumeId} />
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
