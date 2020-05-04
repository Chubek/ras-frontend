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
  ButtonGroup,
} from 'react-native-elements';
import I18t from '../../../translations';

import StateSelector from './StateSelector';

export default function ContactSection({
  selectedIndex,
  onSetStateValue,
  onValidate,
  getValidIcon,
  state,
}) {
  const [visible, setVisible] = useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };
  if (selectedIndex === 0) {
    return (
      <Grid>
        <Row>
          <Col size={45}>
            <Input
              placeholder={I18t.t('resumeEditLabels.firstName')}
              leftIcon={{ type: 'font-awesome', name: 'user' }}
              onChangeText={t => onSetStateValue('firstName', t)}
            />
          </Col>
          <Col size={45}>
            <Input
              placeholder={I18t.t('resumeEditLabels.lastName')}
              onChangeText={t => onSetStateValue('lastName', t)}
            />
          </Col>
        </Row>
        <Row>
          <Col size={90}>
            <Input
              placeholder={I18t.t('resumeEditLabels.email')}
              leftIcon={{ type: 'font-awesome', name: 'envelope' }}
              onChangeText={t => onSetStateValue('email', t)}
              onBlur={() => onValidate('email')}
            />
          </Col>
          <Col size={5}>
            <Icon
              type="font-awesome"
              name={getValidIcon('email')}
              color="#h00"
            />
          </Col>
        </Row>
        <Row>
          <Col size={90}>
            <Input
              placeholder={I18t.t('resumeEditLabels.phoneNumber')}
              leftIcon={{ type: 'font-awesome', name: 'phone' }}
              onChangeText={t => onSetStateValue('phoneNumber', t)}
              onBlur={() => onValidate('number')}
            />
          </Col>
          <Col size={5}>
            <Icon
              type="font-awesome"
              name={getValidIcon('number')}
              color="#h00"
            />
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
        </Row>
        <Row>
          <Col size={90}>
            <Input
              placeholder={I18t.t('resumeEditLabels.city')}
              leftIcon={{ type: 'font-awesome', name: 'location-arrow' }}
              onChangeText={t => onSetStateValue('city', t)}
            />
          </Col>
        </Row>
        <Row>
          <Col size={90}>
            <Input
              placeholder={I18t.t('resumeEditLabels.zipCode')}
              leftIcon={{ type: 'font-awesome', name: 'user' }}
              onChangeText={t => onSetStateValue('zipCode', t)}
              onBlur={() => onValidate('zipCode')}
            />
          </Col>
          <Col size={5}>
            <Icon
              type="font-awesome"
              name={getValidIcon('zipCode')}
              color="#h00"
            />
          </Col>
        </Row>

        <Overlay
          isVisible={visible}
          onBackdropPress={toggleOverlay}
          onSetStateValue={onSetStateValue}
        >
          <StateSelector onSetStateValue={onSetStateValue} />
        </Overlay>
      </Grid>
    );
  }
  return true;
}
