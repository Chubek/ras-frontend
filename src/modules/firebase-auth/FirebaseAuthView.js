/* Authored by Chubak Bidpaa: chubakbidpaa@gmail.com - 2020 - Corona Times */

import React, { Component } from 'react';
import LoginComponent from '../../components/stateful/LoginComponent';

export default class FirebaseAuthView extends Component {
  state = {};

  render() {
    const { navigation, signIn, error, switcher } = this.props;
    if (switcher === 'login') {
      return (
        <LoginComponent signIn={signIn} navigation={navigation} error={error} />
      );
    }
    return false;
  }
}
