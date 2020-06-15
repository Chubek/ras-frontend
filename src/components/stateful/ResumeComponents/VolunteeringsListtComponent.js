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

export default function VolunteeringsListComponent({
  route,
  navigation,
  appendVolunteerings,
  volunteerings,
}) {
  const [list, setList] = useState(volunteerings);

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
        orgName,
        tasksCompleted,
        dates,
      },
    ]);
  };

  const onAppendVolunteerings = () => {
    appendVolunteerings(list);
  };

  return (
    <View
      style={{ flex: 1, alignItems: 'center', justifyContent: 'space-around' }}
    >
      {list.map((l, i) => {
        return (
          <ListItemComponent
            key={l.id}
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
        <Grid>
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
            onPress={onAppendVolunteerings}
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
