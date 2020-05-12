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

export default function ObjectiveSection({ selectedIndex, onSetStateValue }) {
  const [visible, setVisible] = useState(false);
  const toggleOverlay = () => {
    setVisible(!visible);
  };

  if (selectedIndex === 1) {
    return (
      <Grid>
        <Row>
          <Col size={60}>
            <Text h3>{I18t.t('objectiveLabels.header')}</Text>
          </Col>
          <Col size={10}>
            <Tooltip popover={<Text>{I18t.t('objectiveLabels.tooltip')}</Text>}>
              <Icon type="font-awesome" name="question-circle" color="0f0" />
            </Tooltip>
          </Col>
        </Row>
        <Row>
          <Col size={90}>
            <Input
              placeholder={I18t.t('objectiveLabels.objective')}
              leftIcon={{ type: 'font-awesome', name: 'expand' }}
              onChangeText={t =>
                onSetStateValue('summaryObjective.objective', t)
              }
              multiline
              numberOfLines={5}
            />
          </Col>
          <Col size={10}>
            <Tooltip
              popover={
                <Text>{I18t.t('objectiveLabels.objectiveToolTip')}</Text>
              }
            >
              <Icon type="font-awesome" name="question-circle" color="0f0" />
            </Tooltip>
          </Col>
        </Row>
        <Row>
          <Col size={90}>
            <Input
              placeholder={I18t.t('objectiveLabels.summary')}
              leftIcon={{ type: 'font-awesome', name: 'asterisk' }}
              onChangeText={t => onSetStateValue('summaryObjective.summary', t)}
              multiline
              numberOfLines={5}
            />
          </Col>
          <Col size={10}>
            <Tooltip
              popover={<Text>{I18t.t('objectiveLabels.summaryToolTip')}</Text>}
            >
              <Icon type="font-awesome" name="question-circle" color="0f0" />
            </Tooltip>
          </Col>
        </Row>
        <Row>
          <Col size={90}>
            <Input
              placeholder={I18t.t('objectiveLabels.bluf')}
              leftIcon={{ type: 'font-awesome', name: 'bold' }}
              onChangeText={t => onSetStateValue('summaryObjective.bluf', t)}
              multiline
              numberOfLines={5}
            />
          </Col>
          <Col size={10}>
            <Tooltip
              popover={<Text>{I18t.t('objectiveLabels.blufToolTip')}</Text>}
            >
              <Icon type="font-awesome" name="question-circle" color="0f0" />
            </Tooltip>
          </Col>
        </Row>
      </Grid>
    );
  }
  return false;
}
