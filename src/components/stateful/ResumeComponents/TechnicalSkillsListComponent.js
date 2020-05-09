import React, { useState, Fragment } from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  TouchableHighlight,
} from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import {
  Tooltip,
  Icon,
  Tile,
  Input,
  Text,
  Button,
  Overlay,
  Card,
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

  const [overlay, toggleOverlay] = useState(false);
  const [index, setIndex] = useState(0);
  const [skillName, setSkillName] = useState(null);
  const [proficiency, setProficiency] = useState(null);
  const [importance, setImportance] = useState(null);
  const toggle = theIndex => {
    toggleOverlay(!overlay);
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

  return (
    <View
      style={{ flex: 1, alignItems: 'center', justifyContent: 'space-around' }}
    >
      {list.map((l, i) => {
        return (
          <ListItemComponent
            textOne={l.skillName}
            textTwo={l.proficiency}
            textThree={l.importance}
            onPress={() => toggleOverlay(i)}
            style={{ flex: 0.4 }}
          />
        );
      })}
      <Icon name="plus-circle" type="font-awesome" onPress={addToList} />

      <Overlay isVisible={overlay} onBackdropPress={toggleBack}>
        <Row>
          <Input
            placeholder={list[index].skillName}
            label={I18t.t('techSkills.skillName')}
            onChangeText={t => setSkillName(t)}
          />
        </Row>
        <Row>
          <Input
            placeholder={list[index].proficiency}
            label={I18t.t('techSkills.proficiency')}
            onChangeText={t => setProficiency(t)}
          />
        </Row>
        <Row>
          <Input
            placeholder={list[index].importance}
            label={I18t.t('techSkills.importance')}
            onChangeText={t => setImportance(t)}
          />
        </Row>
      </Overlay>
    </View>
  );
}
