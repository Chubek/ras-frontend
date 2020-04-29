import { compose } from 'recompose';
import { connect } from 'react-redux';
import React from 'react';
import FirebaseAuthView from './FirebaseAuthView';
import {
  signIn,
  registerWithEmailAndPassword,
  getUserProfile,
  sendVerificationEmail,
} from './FirebaseAuthState';
import { SET_ERROR, SET_LOGGEDIN } from './FirebaseAuthConstants';

export default compose(
  connect(
    state => ({
      userSignedIn: state.firebaseAuth.userSignedIn,
      userProfile: state.firebaseAuth.userProfile,
      error: state.firebaseAuth.error,
    }),
    dispatch => ({
      signIn: (email, password) => dispatch(signIn(email, password)),
      nullifyError: () => dispatch({ type: SET_ERROR, payload: null }),
      register: (email, password) =>
        dispatch(registerWithEmailAndPassword(email, password)),
      resetLoggedIn: () => dispatch({ type: SET_LOGGEDIN, payload: false }),
    }),
  ),
)(props => <FirebaseAuthView {...props} />);
