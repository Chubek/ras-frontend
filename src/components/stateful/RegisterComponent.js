/* Authored by Chubak Bidpaa: chubakbidpaa@gmail.com - 2020 - Corona Times */
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Tooltip, Icon, Input, Text, Button } from 'react-native-elements';
import ClosableMessage from '../stateless/ClosableMessage';
import I18t from '../../translations';
import { emailPattern } from '../../helpers';

export default class RegisterPageComponent extends Component {
  state = {
    email: null,
    password: null,
    showError: false,
    emailIsValid: 'times',
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.error) {
      this.setState({
        showError: true,
      });
    }
    if (nextProps.userSignedIn) {
      this.props.navigation.navigate('ResumeCatalogueScreen');
      this.props.setProfile();
    }
  }

  onValidateEmail = email => {
    if (emailPattern.test(email)) {
      this.setState({ email, emailIsValid: 'check' });
    } else {
      this.setState({ emailIsValid: 'times' });
    }
  };

  onRegister = async () => {
    const { email, password } = this.state;
    const { register } = this.props;

    if (email && password) {
      await register(email, password);
    }
  };

  hideMessage = () => {
    this.setState({ showError: false });
    this.onNullifyError();
    this.props.resetLoggedIn();
  };

  onNullifyError = () => {
    this.props.nullifyError();
  };

  render() {
    return (
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
              onChangeText={text => this.onValidateEmail(text)}
            />
          </Col>
          <Col size={10}>
            <Icon
              name={this.state.emailIsValid}
              type="font-awesome"
              color="#f50"
            />
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
        <Row size={10}>
          <Col>
            <Button
              icon={{
                type: 'font-awesome',
                name: 'user-plus',
                color: 'white',
              }}
              title={I18t.t('register')}
              onPress={() => this.onRegister()}
            />
          </Col>
        </Row>
        <Row size={100}>
          <Col size={100}>
            <ClosableMessage
              showIf={this.state.showError}
              variant="error"
              onSetHide={this.hideMessage}
              message={this.props.error}
              blurType="dark"
              fontSize={20}
              containerHeight={20}
            />
          </Col>
        </Row>
      </Grid>
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
