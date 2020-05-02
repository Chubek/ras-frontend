/* Authored by Chubak Bidpaa: chubakbidpaa@gmail.com - 2020 - Corona Times */

import React, { Component } from 'react';
import LoginComponent from '../../components/stateful/LoginComponent';
import RegisterComponent from '../../components/stateful/RegisterComponent';
import ChangePasswordComponent from '../../components/stateful/ChangePasswordComponent';

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
      message,
      resetLoggedIn,
      setProfile,
      updatePassword,
    } = this.props;

    if (switcher === 'login') {
      return (
        <LoginComponent
          signIn={signIn}
          userSignedIn={userSignedIn}
          navigation={navigation}
          error={error}
          nullifyError={nullifyError}
          setProfile={setProfile}
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
          setProfile={setProfile}
        />
      );
    }
    if (switcher === 'passUpdate') {
      return (
        <ChangePasswordComponent
          error={error}
          message={message}
          navigation={navigation}
          updatePassword={updatePassword}
        />
      );
    }
    return false;
  }
}
