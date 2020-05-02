/* Authored by Chubak Bidpaa: chubakbidpaa@gmail.com - 2020 - Corona Times */
import React, { Component } from 'react';
import { StyleSheet, ImageBackground } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Tooltip, Icon, Input, Text, Button } from 'react-native-elements';
import I18t from '../../translations';
import ClosableMessage from '../stateless/ClosableMessage';

const image = require('../../../assets/images/background.png');

export default class LoginPageComponent extends Component {
  state = {
    email: null,
    password: null,
    showError: false,
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.error) {
      this.setState({
        showError: true,
      });
    }
    if (nextProps.userSignedIn) {
      this.props.setProfile();
      this.props.navigation.navigate('UpdatePasswordScreen');
    }
  }

  hideMessage = () => {
    this.setState({ showError: false });
    this.onNullifyError();
  };

  onNullifyError = () => {
    this.props.nullifyError();
  };

  onAuth = () => {
    const { signIn } = this.props;
    const { email, password } = this.state;

    signIn(email, password);
  };

  render() {
    return (
      <ImageBackground resizeMode="cover" source={image} style={styles.bgImage}>
        <Grid>
          <Row size={50} style={styles.emailInput}>
            <Col size={90}>
              <Input
                placeholder={I18t.t('auth.placeholderEmail')}
                autoCorrect={false}
                leftIcon={{
                  type: 'font-awesome',
                  name: 'envelope',
                }}
                label={I18t.t('auth.email')}
                onChangeText={text => this.setState({ email: text })}
              />
            </Col>
            <Col size={10}>
              <Tooltip popover={<Text>{I18t.t('auth.emailInfo')}</Text>}>
                <Icon name="question-circle" type="font-awesome" color="#f50" />
              </Tooltip>
            </Col>
          </Row>
          <Row size={30} style={styles.emailInput}>
            <Col size={90}>
              <Input
                placeholder={I18t.t('auth.password')}
                leftIcon={{ type: 'font-awesome', name: 'key' }}
                label={I18t.t('auth.password')}
                onChangeText={text => this.setState({ password: text })}
                secureTextEntry
              />
            </Col>
            <Col size={10}>
              <Tooltip popover={<Text>{I18t.t('auth.passwordInfo')}</Text>}>
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
                title={I18t.t('auth.login')}
                onPress={() => this.onAuth()}
              />
            </Col>
          </Row>
        </Grid>
        <ClosableMessage
          showIf={this.state.showError}
          variant="error"
          onSetHide={this.hideMessage}
          message={this.props.error}
          blurType="dark"
          fontSize={20}
          containerHeight={20}
          style={styles.closableMessage}
        />
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
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  closableMessage: {
    flex: 1,
    position: 'absolute',
    left: 0,
    top: 0,
  },
});
