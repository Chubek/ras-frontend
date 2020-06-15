/* Authored by Chubak Bidpaa: chubakbidpaa@gmail.com - 2020 - Corona Times */
import React, { useState } from 'react';
import { StyleSheet, ImageBackground } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import {
  Tooltip,
  Icon,
  Input,
  Text,
  Overlay,
  Button,
} from 'react-native-elements';
import I18t from '../../../translations';

import StateSelector from '../../stateless/StateSelector';

export default function ContactSection({ route, navigation. setContactInfo, contactInfo, resumeId }) {
  const [visible, setVisible] = useState(false);
  const [zipCode, setZipCode] = useState(contactInfo.zipCode);
  const [firstName, setFirstName] = useState(contactInfo.firstName);
  const [lastName, setLastName] = useState(contactInfo.lastName);
  const [email, setEmail] = useState(contactInfo.email);
  const [phoneNumber, setPhoneNumber] = useState(contactInfo.phoneNumber);
  const [state, setState] = useState(contactInfo.state);
  const [city, setCity] = useState(contactInfo.city);
  const [emailValid, setEmailValid] = useState('times');
  const [numberValid, setNumberValid] = useState('times');
  const [zipCodeValid, setZipCodeValid] = useState('times');

  const toggleOverlay = () => {
    setVisible(!visible);
  };
  const onValidate = toValidate => {
    if (toValidate === 'email') {
      /* eslint-disable */
      if (
        /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(email)
      ) {
        setEmailValid('check');
      }
    }
    /* eslint-enable */
    if (toValidate === 'zipCode') {
      if (/^\d{5}(?:[-\s]\d{4})?/.test(zipCode)) {
        setZipCodeValid('check');
      }
    }
    if (toValidate === 'number') {
      /* eslint-disable */
      if (
        /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(
          phoneNumber,
        )
      ) {
        setNumberValid('check');
      }
    }
    /* eslint-enable */
  };

  onSetContactInfo = () => {
    setContactInfo({firstName, lastName, email, phoneNumber, city, state, zipCode});
  }

  const onCleanState = () => {
    setZipCode('');
    setCity('');
    setEmail('');
    setFirstName('');
    setLastName('');
    setPhoneNumber('');
    setState('');
    
  }

  return (
    <Grid>
      <Row>
        <Col size={45}>
          <Input
            placeholder={I18t.t('resumeEditLabels.firstName')}
            leftIcon={{ type: 'font-awesome', name: 'user' }}
            onChangeText={t => setFirstName(t)}
          />
        </Col>
        <Col size={45}>
          <Input
            placeholder={I18t.t('resumeEditLabels.lastName')}
            onChangeText={t => setLastName(t)}
          />
        </Col>
      </Row>
      <Row>
        <Col size={90}>
          <Input
            placeholder={I18t.t('resumeEditLabels.email')}
            leftIcon={{ type: 'font-awesome', name: 'envelope' }}
            onChangeText={t => setEmail(t)}
            onBlur={() => onValidate('email')}
          />
        </Col>
        <Col size={5}>
          <Icon type="font-awesome" name={emailValid} color="#h00" />
        </Col>
      </Row>
      <Row>
        <Col size={90}>
          <Input
            placeholder={I18t.t('resumeEditLabels.phoneNumber')}
            leftIcon={{ type: 'font-awesome', name: 'phone' }}
            onChangeText={t => setPhoneNumber(t)}
            onBlur={() => onValidate('number')}
          />
        </Col>
        <Col size={5}>
          <Icon type="font-awesome" name={numberValid} color="#h00" />
        </Col>
      </Row>
      <Row>
        <Col size={30}>
          <Button
            title={I18t.t('resumeEditLabels.state')}
            leftIcon={{ type: 'font-awesome', name: 'compass' }}
            onPress={toggleOverlay}
            containerStyle={{ marginLeft: 5 }}
          />
        </Col>
        <Col size={70}>
          <Text style={{ marginLeft: 5 }}>{state}</Text>
        </Col>
        <Row>
          <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
            <StateSelector onSetStateValue={setState} toggle={toggleOverlay} />
          </Overlay>
        </Row>
      </Row>
      <Row>
        <Col size={90}>
          <Input
            placeholder={I18t.t('resumeEditLabels.city')}
            leftIcon={{ type: 'font-awesome', name: 'location-arrow' }}
            onChangeText={t => setCity(t)}
          />
        </Col>
      </Row>
      <Row>
        <Col size={90}>
          <Input
            placeholder={I18t.t('resumeEditLabels.zipCode')}
            leftIcon={{ type: 'font-awesome', name: 'user' }}
            onChangeText={t => setZipCode(t)}
            onBlur={() => onValidate('zipCode')}
          />
        </Col>
        <Col size={5}>
          <Icon type="font-awesome" name={zipCodeValid} color="#h00" />
        </Col>
      </Row>
      <Button
            icon={{ type: 'font-awesome', name: 'send' }}
            title={I18t.t('send')}
            onPress={onSetContactInfo}
          />
          <Button
            icon={{ type: 'font-awesome', name: 'times' }}
            title={I18t.t('clean')}
            buttonStyle={{ backgroundColor: 'red' }}
            onPress={onCleanState}
          />
    </Grid>
  );
}
