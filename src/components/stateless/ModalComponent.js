import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Text, Icon, Button } from 'react-native-elements';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { signOut } from '../../modules/firebase-auth/FirebaseAuthState';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

function ModalComponent({ navigation, userSignedIn, signOut }) {
  const greetings = userSignedIn ? 'Signed In' : 'Guest';
  return (
    <Grid>
          <Text> {greetings} </Text>
      <Button title="Logout" onPress={() => signOut()} />
      <Button title="Dismiss" onPress={() => navigation.goBack()} />
    </Grid>
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
