// @flow
import { compose } from 'recompose';
import { connect } from 'react-redux';

import AuthView from './AuthView';
import { login } from './AuthState';

export default compose(
  connect(
    state => ({
      authenticated: state.authenticated,
      email: state.email,
      password: state.password,
    }),
    dispatch => ({
      login: ({ email, password }) => dispatch(login({ email, password })),

      // Could run check authentication here
    }),
  ),
)(AuthView);
