/* Authored by Chubak Bidpaa: chubakbidpaa@gmail.com - 2020 - Corona Times */

import React, { Component } from 'react';
import LoginComponent from '../../components/stateful/LoginComponent';
import RegisterComponent from '../../components/stateful/RegisterComponent';

export default class FirebaseAuthView extends Component {
  state = {};

  render() {
    const {
      navigation,
      signIn,
      error,
      register,
      switcher,
      nullifyError,
      userSignedIn,
      resetLoggedIn,
    } = this.props;

    if (switcher === 'login') {
      return (
        <LoginComponent
          signIn={signIn}
          navigation={navigation}
          error={error}
          nullifyError={nullifyError}
        />
      );
    }
    if (switcher === 'register') {
      return (
        <RegisterComponent
          register={register}
          navigation={navigation}
          error={error}
          nullifyError={nullifyError}
          userSignedIn={userSignedIn}
          resetLoggedIn={resetLoggedIn}
        />
      );
    }
    return false;
  }
}
