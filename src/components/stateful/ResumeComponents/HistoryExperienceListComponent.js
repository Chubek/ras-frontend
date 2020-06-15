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

import ListItemFive from '../../stateless/ListItemFive';

export default function HistoryExperienceListComponent({
  route,
  navigation,
  appendHistory,
  historyExperience,
}) {
  const [list, setList] = useState(historyExperience);

  const [overlay, toggleOverlay] = useState(false);
  const [index, setIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(2);
  const [companyName, setCompanyName] = useState(null);
  const [location, setLocation] = useState(null);
  const [dateFrom, setDateFrom] = useState(null);
  const [dateTo, setDateTo] = useState(null);
  const [dutiesAndTasks, setDutiesAndTasks] = useState(null);
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
        companyName,
        location,
        dateFrom,
        dateTo,
        dutiesAndTasks,
      },
    ]);
  };

  const onAppendHistory = () => {
    appendHistory(list);
  };

  return (
    <View
      style={{ flex: 1, alignItems: 'center', justifyContent: 'space-around' }}
    >
      {list.map((l, i) => {
        return (
          <ListItemFive
            key={l.id}
            textOne={l.companyName}
            textTwo={l.location}
            textThree={l.dateFrom}
            textFour={l.dateTo}
            textFive={l.dutiesAndTasks[0]}
            onPress={() => toggle(i)}
            numOf={index}
            style={{ flex: 0.4, marginBottom: 5 }}
          />
        );
      })}
      <Icon name="plus-circle" type="font-awesome" onPress={addToList} />

      <Overlay isVisible={overlay} onBackdropPress={toggleBack}>
        <Grid>
          <Row size={14} style={{ marginBottom: 8 }}>
            <Input
              placeholder={list[index].companyName}
              label={I18t.t('historyExp.companyName')}
              onChangeText={t => setCompanyName(t)}
              labelStyle={{ fontSize: 12 }}
              inputStyle={{ fontSize: 12 }}
              inputContainerStyle={{ height: '50%' }}
            />
          </Row>

          <Row size={14} style={{ marginBottom: 8 }}>
            <Input
              placeholder={list[index].location}
              label={I18t.t('historyExp.location')}
              onChangeText={t => setLocation(t)}
              labelStyle={{ fontSize: 12 }}
              inputStyle={{ fontSize: 12 }}
              inputContainerStyle={{ height: '50%' }}
            />
          </Row>
          <Row size={14} style={{ marginBottom: 8 }}>
            <Input
              placeholder={list[index].dateFrom}
              label={I18t.t('historyExp.dateFrom')}
              onChangeText={t => setDateFrom(t)}
              labelStyle={{ fontSize: 12 }}
              inputStyle={{ fontSize: 12 }}
              inputContainerStyle={{ height: '50%' }}
            />
          </Row>
          <Row size={14} style={{ marginBottom: 4 }}>
            <Input
              placeholder={list[index].dateTo}
              label={I18t.t('historyExp.dateTo')}
              onChangeText={t => setDateTo(t)}
              labelStyle={{ fontSize: 12 }}
              inputStyle={{ fontSize: 12 }}
              inputContainerStyle={{ height: '50%' }}
            />
          </Row>
          <Row size={25} style={{ marginTop: -10, marginBottom: 8 }}>
            <ReactChipsInput
              label={I18t.t('historyExp.dutiesAndTasks')}
              initialChips={list[index].dutiesAndTasks}
              onChangeChips={chips =>
                setDutiesAndTasks([...list[index].dutiesAndTasks, chips])
              }
              alertRequired
              chipStyle={{
                borderColor: 'blue',
                backgroundColor: 'grey',
              }}
            />
          </Row>
          <Row size={14}>
            <Col size={50}>
              <Button
                icon={{ type: 'font-awesome', name: 'send' }}
                title={I18t.t('send')}
                onPress={onAppendHistory}
              />
            </Col>
            <Col size={50}>
              <Button
                icon={{ type: 'font-awesome', name: 'times' }}
                title={I18t.t('remove')}
                buttonStyle={{ backgroundColor: 'red' }}
              />
            </Col>
          </Row>
        </Grid>
      </Overlay>
    </View>
  );
}
