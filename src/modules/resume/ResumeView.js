/* Authored by Chubak Bidpaa: chubakbidpaa@gmail.com - 2020 - Corona Times */

import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import ResumeEditComponent from '../../components/stateful/ResumeEditComponent';

export default class ResumeView extends Component {
  state = {};

  render() {
    const { navigation } = this.props;
    return <ResumeEditComponent navigation={navigation} />;
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
