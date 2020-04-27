import { compose } from 'recompose';
import { connect } from 'react-redux';
import React from 'react';
import FirebaseAuthView from './FirebaseAuthView';
import { signIn } from './FirebaseAuthState';

export default compose(
  connect(
    state => ({
      userSignedIn: state.firebaseAuth.userSignedIn,
      userProfile: state.firebaseAuth.userProfile,
      error: state.firebaseAuth.error,
    }),
    dispatch => ({
      signIn: (email, password) => dispatch(signIn(email, password)),
    }),
  ),
)(props => <FirebaseAuthView {...props} />);
