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
import ReactChipsInput from 'react-native-chips';
import I18t from '../../../translations';
import StringToColor from 'string-to-color';

import ListItemComponent from '../../stateless/ListItemComponent';

export default function TechnicalSkillsListComponent({ route, navigation }) {
  const [list, setList] = useState([
    {
      id: uuid(),
      orgName: 'Red Cross',
      tasksCompleted: ['Seminar 2020', 'Seminar 2018'],
      dates: ['2019'],
    },
    {
      id: uuid(),
      orgName: 'Boy Scouts',
      tasksCompleted: ['Class 2010', 'Camp 2008'],
      dates: ['2008'],
    },
  ]);

  const [overlay, toggleOverlay] = useState(false);
  const [index, setIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(2);
  const [orgName, setOrgName] = useState(null);
  const [tasksCompleted, setTasks] = useState(null);
  const [dates, setDates] = useState(null);
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
        orgName: 'New',
        tasksCompleted: [],
        dates: [],
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
            textOne={l.orgName}
            textTwo={l.tasksCompleted[0]}
            textThree={l.dates[0]}
            onPress={() => toggle(i)}
            numOf={index}
            style={{ flex: 0.4, marginBottom: 5 }}
          />
        );
      })}
      <Icon name="plus-circle" type="font-awesome" onPress={addToList} />

      <Overlay isVisible={overlay} onBackdropPress={toggleBack}>
        <Row>
          <Input
            placeholder={list[index].orgName}
            label={I18t.t('techSkills.skillName')}
            onChangeText={t => setOrgName(t)}
          />
        </Row>

        <Row>
          <ReactChipsInput
            label={I18t.t('volunteerings.tasksCompleted')}
            initialChips={list[index].tasksCompleted}
            onChangeChips={chips =>
              setTasks([...list[index].tasksCompleted, chips])
            }
            alertRequired
            chipStyle={{ borderColor: 'blue', backgroundColor: 'grey' }}
            inputStyle={{ fontSize: 22 }}
          />
        </Row>

        <Row>
          <ReactChipsInput
            label={I18t.t('volunteerings.dates')}
            initialChips={list[index].dates}
            onChangeChips={chips => setDates([...list[index].dates, chips])}
            alertRequired
            chipStyle={{ borderColor: 'blue', backgroundColor: 'grey' }}
            inputStyle={{ fontSize: 22 }}
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
      </Overlay>
    </View>
  );
}
