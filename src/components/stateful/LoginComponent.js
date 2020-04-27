/* Authored by Chubak Bidpaa: chubakbidpaa@gmail.com - 2020 - Corona Times */
import React, { Component } from 'react';
import { StyleSheet, ImageBackground } from 'react-native';

import { Col, Row, Grid } from 'react-native-easy-grid';
import {
  Tooltip,
  Icon,
  Input,
  Image,
  Text,
  Button,
} from 'react-native-elements';

import * as en from '../../translations/en.json';
import { showErrorMessage } from '../../helpers';

const image = require('../../../assets/images/background.png');
const logoPlaceholder = require('../../../assets/images/white-logo.png');

export default class LoginPageComponent extends Component {
  state = {
    email: null,
    password: null,
  };

  componentDidUpdate(pervProps) {
    console.log('oldError', pervProps.error);
    console.log('newError', this.props.error);
    if (pervProps.error !== this.props.error) {
      showErrorMessage(this.props.error);
    } else {
      showErrorMessage(pervProps.error);
    }
  }

  onAuth = async () => {
    const { signIn, navigation } = this.props;
    const { email, password } = this.state;

    const authRes = await signIn(email, password);

    if (authRes) {
      navigation.navigate('ResumeCatalogueScreen');
    }
  };

  render() {
    return (
      <ImageBackground resizeMode="cover" source={image} style={styles.bgImage}>
        <Grid>
          <Row size={40} style={styles.logoImage}>
            <Image source={logoPlaceholder} />
          </Row>
          <Row size={30} style={styles.emailInput}>
            <Col size={90}>
              <Input
                placeholder={en.auth.placeholderEmail}
                autoCorrect={false}
                leftIcon={{
                  type: 'font-awesome',
                  name: 'envelope',
                }}
                label={en.auth.email}
                onChangeText={text => this.setState({ email: text })}
              />
            </Col>
            <Col size={10}>
              <Tooltip popover={<Text>{en.auth.emailInfo}</Text>}>
                <Icon name="question-circle" type="font-awesome" color="#f50" />
              </Tooltip>
            </Col>
          </Row>
          <Row size={30} style={styles.emailInput}>
            <Col size={90}>
              <Input
                placeholder={en.auth.password}
                leftIcon={{ type: 'font-awesome', name: 'key' }}
                label={en.auth.password}
                onChangeText={text => this.setState({ password: text })}
                secureTextEntry
              />
            </Col>
            <Col size={10}>
              <Tooltip popover={<Text>{en.auth.passwordInfo}</Text>}>
                <Icon name="question-circle" type="font-awesome" color="#f50" />
              </Tooltip>
            </Col>
          </Row>
          <Row size={50}>
            <Col>
              <Button
                icon={{
                  type: 'font-awesome',
                  name: 'sign-in',
                  color: 'white',
                }}
                title={en.auth.login}
                onPress={() => this.onAuth()}
              />
            </Col>
          </Row>
        </Grid>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  mainContaier: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  bgImage: {
    flex: 1,
    height: '100%',
    width: '100%',
  },
  logoImage: {
    marginTop: 20,
  },
  submitButton: {
    color: '#ff4',
  },
  toolTipCol: {
    marginLeft: -20,
  },
});
