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
import ListOne from '../../stateless/ListOne';

export default function SoftwareSkillsListComponent({ route, navigation }) {
  const [objectiveList, setObjectiveList] = useState([
    {
      id: uuid(),
      objective: 'Objective 1',
    },
    {
      id: uuid(),
      objective: 'Objective 1',
    },
  ]);
  const [summaryList, setSummaryList] = useState([
    {
      id: uuid(),
      summary: 'Summary 1',
    },
    {
      id: uuid(),
      summary: 'Summary 1',
    },
  ]);

  const [blufList, setBlufList] = useState([
    {
      id: uuid(),
      bluf: 'Bluf 1',
    },
    {
      id: uuid(),
      bluf: 'Bluf 1',
    },
  ]);

  const headerButtons = [
    I18t.t('objectiveLabels.objective'),
    I18t.t('objectiveLabels.summary'),
    I18t.t('objectiveLabels.bluf'),
  ];

  const [overlay, toggleOverlay] = useState(false);
  const [index, setIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(1);
  const [objective, setObjective] = useState([]);
  const [summary, setSummary] = useState([]);
  const [bluf, setBluf] = useState([]);
  const toggle = theIndex => {
    toggleOverlay(true);
    setIndex(theIndex);
  };

  const toggleBack = () => {
    toggleOverlay(false);
  };

  const addToObjectiveList = () => {
    setObjectiveList([
      ...objectiveList,
      {
        id: uuid(),
        objective: 'New',
      },
    ]);
  };

  const addToSummaryList = () => {
    setSummaryList([
      ...summaryList,
      {
        id: uuid(),
        summary: 'New',
      },
    ]);
  };

  const addToBlufList = () => {
    setBlufList([
      ...objectiveList,
      {
        id: uuid(),
        bluf: 'New',
      },
    ]);
  };

  if (selectedIndex === 0) {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'space-around',
        }}
      >
        <ButtonGroup
          onPress={givenIndex => setSelectedIndex(givenIndex)}
          selectedIndex={selectedIndex}
          buttons={headerButtons}
          containerStyle={{ height: 50, width: '100%', borderRadius: 20 }}
        />
        {objectiveList.map((l, i) => {
          return (
            <ListOne
              key={l.id}
              textOne={l.objective}
              onPress={() => toggle(i)}
              style={{ flex: 0.4, marginBottom: 5 }}
            />
          );
        })}
        <Icon
          name="plus-circle"
          type="font-awesome"
          onPress={addToObjectiveList}
        />

        <Overlay isVisible={overlay} onBackdropPress={toggleBack}>
          <Grid>
            <Row>
              <Input
                placeholder={objectiveList[index].objective}
                onChangeText={t => setObjective(t)}
              />
            </Row>

            <Button
              icon={{ type: 'font-awesome', name: 'plus' }}
              title={I18t.t('add')}
              onPress={() =>
                setObjectiveList([...objectiveList, { objective }])
              }
            />
            <Button
              icon={{ type: 'font-awesome', name: 'times' }}
              title={I18t.t('remove')}
              buttonStyle={{ backgroundColor: 'red' }}
              onPress={() => setObjectiveList(objectiveList.splice(index, 0))}
            />
          </Grid>
        </Overlay>
      </View>
    );
  }
  if (selectedIndex === 1) {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'space-around',
        }}
      >
        <ButtonGroup
          onPress={givenIndex => setSelectedIndex(givenIndex)}
          selectedIndex={selectedIndex}
          buttons={headerButtons}
          containerStyle={{ height: 50, width: '100%', borderRadius: 20 }}
        />
        {objectiveList.map((l, i) => {
          return (
            <ListOne
              key={l.id}
              textOne={l.summary}
              onPress={() => toggle(i)}
              style={{ flex: 0.4, marginBottom: 5 }}
            />
          );
        })}
        <Icon
          name="plus-circle"
          type="font-awesome"
          onPress={addToSummaryList}
        />

        <Overlay isVisible={overlay} onBackdropPress={toggleBack}>
          <Grid>
            <Row>
              <Input
                placeholder={summaryList[index].summary}
                onChangeText={t => setSummary(t)}
              />
            </Row>

            <Button
              icon={{ type: 'font-awesome', name: 'plus' }}
              title={I18t.t('add')}
              onPress={() => setSummaryList([...summaryList, { summary }])}
            />
            <Button
              icon={{ type: 'font-awesome', name: 'times' }}
              title={I18t.t('remove')}
              buttonStyle={{ backgroundColor: 'red' }}
              onPress={() => setSummaryList(summaryList.splice(index, 0))}
            />
          </Grid>
        </Overlay>
      </View>
    );
  }
  if (selectedIndex === 2) {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'space-around',
        }}
      >
        <ButtonGroup
          onPress={givenIndex => setSelectedIndex(givenIndex)}
          selectedIndex={selectedIndex}
          buttons={headerButtons}
          containerStyle={{ height: 50, width: '100%', borderRadius: 20 }}
        />
        {objectiveList.map((l, i) => {
          return (
            <ListOne
              key={l.id}
              textOne={l.bluf}
              onPress={() => toggle(i)}
              style={{ flex: 0.4, marginBottom: 5 }}
            />
          );
        })}
        <Icon name="plus-circle" type="font-awesome" onPress={addToBlufList} />

        <Overlay isVisible={overlay} onBackdropPress={toggleBack}>
          <Grid>
            <Row>
              <Input
                placeholder={blufList[index].bluf}
                onChangeText={t => setBluf(t)}
              />
            </Row>

            <Button
              icon={{ type: 'font-awesome', name: 'plus' }}
              title={I18t.t('add')}
              onPress={() => setBlufList([...blufList, { bluf }])}
            />
            <Button
              icon={{ type: 'font-awesome', name: 'times' }}
              title={I18t.t('remove')}
              buttonStyle={{ backgroundColor: 'red' }}
              onPress={() => setBlufList(blufList.splice(index, 0))}
            />
          </Grid>
        </Overlay>
      </View>
    );
  }
  return false;
}
