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

export default function DegreesListComponent({ route, navigation }) {
  const [list, setList] = useState([
    {
      id: uuid(),
      almaMater: 'Harvard',
      degree: 'Bsc CS',
      dateEarned: '2012',
    },
    {
      id: uuid(),
      almaMater: 'Johns Hopkins',
      degree: 'Doctorate in Medicine',
      dateEarned: '2015',
    },
  ]);

  const [overlay, toggleOverlay] = useState(false);
  const [index, setIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(2);
  const [almaMater, setAlmaMater] = useState(null);
  const [degree, setDegree] = useState(null);
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
        almaMater: 'New',
        degree: 'None',
        dateEarned: 'None',
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
            textOne={l.almaMater}
            textTwo={l.degree}
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
              placeholder={list[index].almaMater}
              label={I18t.t('degrees.almaMater')}
              onChangeText={t => setAlmaMater(t)}
            />
          </Row>
          <Row>
            <Input
              placeholder={list[index].degree}
              label={I18t.t('degrees.degree')}
              onChangeText={t => setDegree(t)}
            />
          </Row>
          <Row>
            <Input
              placeholder={list[index].dateEarned}
              label={I18t.t('degrees.dateEarned')}
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
