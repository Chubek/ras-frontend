/* Authored by Chubak Bidpaa: chubakbidpaa@gmail.com - 2020 - Corona Times */

import React from 'react';
import { TouchableHighlight, View } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Icon, Text } from 'react-native-elements';
import StringToColor from 'string-to-color';

export default function TileComponent({ title, icon, onPress }) {
  return (
    <TouchableHighlight onPress={onPress}>
      <View
        style={{
          borderColor: 'purple',
          borderWidth: 5,
          borderRadius: 10,
          alignContent: 'center',
          width: '95%',
          margin: 10,
          padding: 10,
          height: '90%',
          backgroundColor: StringToColor(title),
        }}
      >
        <Icon name={icon} type="font-awesome" size={45} />

        <Col size={30} />

        <Text style={{ textAlign: 'center', fontFamily: 'Lato-Semibold' }}>
          {title}
        </Text>

        
      </View>
    </TouchableHighlight>
  );
}
