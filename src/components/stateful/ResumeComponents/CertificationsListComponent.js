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
import ListItemFour from '../../stateless/ListItemFour';

export default function CertificationListComponent({
  route,
  navigation,
  appendCerts,
  certifications,
  resumeId,
}) {
  const [list, setList] = useState(certifications);

  const [overlay, toggleOverlay] = useState(false);
  const [index, setIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(2);
  const [certName, setCertName] = useState(null);
  const [grantedBy, setGrantedBy] = useState(null);
  const [dateEarned, setDateEarned] = useState(null);
  const [dateExpires, setDateExpires] = useState(null);
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
        certName,
        grantedBy,
        dateEarned,
        dateExpires,
      },
    ]);
  };

  const onAppendCerts = () => {
    appendCerts(list);
  };

  return (
    <View
      style={{ flex: 1, alignItems: 'center', justifyContent: 'space-around' }}
    >
      {list.map((l, i) => {
        return (
          <ListItemFour
            key={l.id}
            textOne={l.certName}
            textTwo={l.grantedBy}
            textThree={l.dateEarned}
            textFour={l.dateExpires}
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
              placeholder={list[index].almaMater}
              label={I18t.t('certifications.certName')}
              onChangeText={t => setCertName(t)}
            />
          </Row>
          <Row>
            <Input
              placeholder={list[index].degree}
              label={I18t.t('certifications.grantedBy')}
              onChangeText={t => setGrantedBy(t)}
            />
          </Row>
          <Row>
            <Input
              placeholder={list[index].dateEarned}
              label={I18t.t('certifications.dateEarned')}
              onChangeText={t => setDateEarned(t)}
            />
          </Row>
          <Row>
            <Input
              placeholder={list[index].dateEarned}
              label={I18t.t('certifications.dateExpires')}
              onChangeText={t => setDateExpires(t)}
            />
          </Row>
          <Button
            icon={{ type: 'font-awesome', name: 'send' }}
            title={I18t.t('send')}
            onPress={onAppendCerts}
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
