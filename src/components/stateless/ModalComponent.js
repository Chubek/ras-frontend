import React from 'react';
import { View, Text } from 'react-native';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { ListItem } from 'react-native-elements';

import { signOut } from '../../modules/firebase-auth/FirebaseAuthState';

const list = [
  {
    key: Math.random(),
    label: 'Sign Out',
    action: () => signOut(),
    icon: { type: 'font-awesome', name: 'sign-out' },
  },
];

function ModalComponent({ navigation, userSignedIn, signOut }) {
  const greetings = userSignedIn ? 'Signed In' : 'Guest';
  return (
    <View>
      {list.map((l, i) => (
        <ListItem
          key={l.key}
          leftIcon={l.icon}
          title={l.label}
          onPress={() => signOut()}
          bottomDivider
        />
      ))}
    </View>
  );
}

export default compose(
  connect(
    state => ({
      userSignedIn: state.firebaseAuth.userSignedIn,
    }),
    dispatch => ({
      signOut: () => dispatch(signOut()),
    }),
  ),
)(props => <ModalComponent {...props} />);
