import React, { useState, Fragment } from 'react';
import { View } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import {
  Icon,
  Input,
  Text,
  Button,
  Overlay,
  ButtonGroup,
} from 'react-native-elements';
import uuid from 'react-uuid';
import I18t from '../../../translations';
import StringToColor from 'string-to-color';
import ListItemComponent from '../../stateless/ListItemComponent';

export default function CertificationListComponent({ route, navigation }) {
  const [list, setList] = useState([
    {
      id: uuid(),
      awardName: 'Harvard',
      awardCompany: 'Bsc CS',
      dateEarned: '2012',
    },
    {
      id: uuid(),
      awardName: 'Harvard',
      awardCompany: 'Bsc CS',
      dateEarned: '2012',
    },
  ]);

  const [overlay, toggleOverlay] = useState(false);
  const [index, setIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(2);
  const [awardName, setAwardName] = useState(null);
  const [awardCompany, setAwardCompany] = useState(null);
  const [dateEarned, setDateEarned] = useState(null);
  const toggle = theIndex => {
    toggleOverlay(true);
    setIndex(theIndex);
  };

  const toggleBack = () => {
    toggleOverlay(false);
  };

  const addToList = () => {
    setList([
      ...list,
      {
        id: uuid(),
        certName: 'Harvard',
        grantedBy: 'Bsc CS',
        dateEarned: '2012',
        dateExpires: '2016',
      },
    ]);
  };

  return (
    <View
      style={{ flex: 1, alignItems: 'center', justifyContent: 'space-around' }}
    >
      {list.map((l, i) => {
        return (
          <ListItemComponent
            key={l.id}
            textOne={l.awardName}
            textTwo={l.awardCompany}
            textThree={l.dateEarned}
            onPress={() => toggle(i)}
            numOf={index}
            style={{ flex: 0.4, marginBottom: 5 }}
          />
        );
      })}
      <Icon name="plus-circle" type="font-awesome" onPress={addToList} />

      <Overlay isVisible={overlay} onBackdropPress={toggleBack}>
        <Grid>
          {' '}
          <Row>
            <Input
              placeholder={list[index].awardName}
              label={I18t.t('awards.awardName')}
              onChangeText={t => setAwardName(t)}
            />
          </Row>
          <Row>
            <Input
              placeholder={list[index].awardCompany}
              label={I18t.t('awards.awardCompany')}
              onChangeText={t => setAwardCompany(t)}
            />
          </Row>
          <Row>
            <Input
              placeholder={list[index].dateEarned}
              label={I18t.t('certifications.dateEarned')}
              onChangeText={t => setDateEarned(t)}
            />
          </Row>
          <Button
            icon={{ type: 'font-awesome', name: 'send' }}
            title={I18t.t('send')}
          />
          <Button
            icon={{ type: 'font-awesome', name: 'times' }}
            title={I18t.t('remove')}
            buttonStyle={{ backgroundColor: 'red' }}
          />
        </Grid>
      </Overlay>
    </View>
  );
}
