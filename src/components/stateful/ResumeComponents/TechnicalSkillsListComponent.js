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

export default function TechnicalSkillsListComponent({ route, navigation }) {
  const [list, setList] = useState([
    {
      id: uuid(),
      skillName: 'Basic Karate',
      proficiency: 'Skilled',
      importance: 'Very Imporant',
    },
    {
      id: uuid(),
      skillName: 'Speed Typing',
      proficiency: 'Beginner',
      importance: 'Not Imporant',
    },
  ]);

  const levelButtons = [
    I18t.t('skillLevels.very'),
    I18t.t('skillLevels.enough'),
    I18t.t('skillLevels.adequate'),
    I18t.t('skillLevels.justLearned'),
  ];
  const importanceButtons = [
    I18t.t('skillImportance.very'),
    I18t.t('skillImportance.normal'),
    I18t.t('skillImportance.medium'),
    I18t.t('skillImportance.sideHustle'),
  ];
  const [overlay, toggleOverlay] = useState(false);
  const [index, setIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(2);
  const [skillName, setSkillName] = useState(null);
  const [proficiency, setProficiency] = useState(null);
  const [importance, setImportance] = useState(null);
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
        skillName: 'New',
        proficiency: 'None',
        importance: 'None',
      },
    ]);
  };

  const updateIndexLevel = givenIndex => {
    setSelectedIndex(givenIndex);
    setProficiency(levelButtons[selectedIndex]);
  };

  const updateIndexImportnce = givenIndex => {
    setSelectedIndex(givenIndex);
    setImportance(importanceButtons[selectedIndex]);
  };

  return (
    <View
      style={{ flex: 1, alignItems: 'center', justifyContent: 'space-around' }}
    >
      {list.map((l, i) => {
        return (
          <ListItemComponent
            key={l.id}
            textOne={l.skillName}
            textTwo={l.proficiency}
            textThree={l.importance}
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
              placeholder={list[index].skillName}
              label={I18t.t('techSkills.skillName')}
              onChangeText={t => setSkillName(t)}
            />
          </Row>

          <Row>
            <ButtonGroup
              onPress={updateIndexLevel}
              selectedIndex={selectedIndex}
              buttons={levelButtons}
              containerStyle={{ height: 50, width: '100%', borderRadius: 20 }}
            />
          </Row>

          <Row>
            <ButtonGroup
              onPress={updateIndexImportnce}
              selectedIndex={selectedIndex}
              buttons={importanceButtons}
              containerStyle={{ height: 50, width: '100%', borderRadius: 20 }}
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
