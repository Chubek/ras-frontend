/* Authored by Chubak Bidpaa: chubakbidpaa@gmail.com - 2020 - Corona Times */
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import {
  Tooltip,
  Icon,
  Input,
  Image,
  Text,
  Button,
} from 'react-native-elements';
import ClosableMessage from '../stateless/ClosableMessage';
import I18t from '../../translations';
import { emailPattern } from '../../helpers';

export default class ChangePasswordComponent extends Component {
  state = {
    newPassword: null,
    oldPassword: null,
    showError: false,
    showMessage: false,
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.error) {
      this.setState({
        showError: true,
      });
    }
    if (nextProps.message) {
      this.setState({ showMessage: true });
      this.props.navigation.navigate('ResumeCatalogueScreen');
    }
  }

  onUpdatePassword = () => {
    const { newPassword, oldPassword } = this.state;
    const { updatePassword } = this.props;

    updatePassword(oldPassword, newPassword);
  };

  hideError = () => {
    this.setState({ showError: false });
  };

  hideMessage = () => {
    this.setState({ showMessage: false });
  };

  render() {
    return (
      <Grid>
        <Row size={40}>
          <Col>
            <Input
              autoCorrect={false}
              leftIcon={{
                type: 'font-awesome',
                name: 'envelope',
              }}
              label={I18t.t('updatePass.oldPass')}
              secureTextEntry
              onChangeText={text => this.setState({ oldPassword: text })}
            />
          </Col>
        </Row>
        <Row size={40}>
          <Col>
            <Input
              autoCorrect={false}
              leftIcon={{
                type: 'font-awesome',
                name: 'envelope',
              }}
              label={I18t.t('updatePass.newPass')}
              secureTextEntry
              onChangeText={text => this.setState({ newPassword: text })}
            />
          </Col>
        </Row>
        <Row size={50}>
          <Col>
            <Button
              icon={{
                type: 'font-awesome',
                name: 'refresh',
                color: 'white',
              }}
              title={I18t.t('updatePass.updatePass')}
              onPress={() => this.onUpdatePassword()}
            />
          </Col>
        </Row>
        <Row size={100}>
          <Col size={100}>
            <ClosableMessage
              showIf={this.state.showError}
              variant="error"
              onSetHide={this.hideError}
              message={this.props.error}
              blurType="dark"
              fontSize={20}
              containerHeight={20}
            />
          </Col>
        </Row>
        <Row size={100}>
          <Col size={100}>
            <ClosableMessage
              showIf={this.state.showMessage}
              variant="success"
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

const styles = StyleSheet.create({});
