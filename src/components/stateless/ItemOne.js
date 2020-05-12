/* Authored by Chubak Bidpaa: chubakbidpaa@gmail.com - 2020 - Corona Times */

import React from 'react';
import { TouchableHighlight, View } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Icon, Text } from 'react-native-elements';
import StringToColor from 'string-to-color';

export default function ListItemComponent({ textOne, onPress }) {
  return (
    <TouchableHighlight
      style={{
        alignItems: 'flex-start',
        borderRadius: 20,
        borderWidth: 10,
        padding: 10,
        backgroundColor: StringToColor(textOne),
        width: '90%',
        marginBottom: 5,
        borderColor: 'purple',
        justifyContent: 'space-around',
      }}
      onPress={onPress}
    >
      <View
        style={{
          flexDirection: 'column',
          flex: 1,
          justifyContent: 'space-around',
          alignItems: 'center',
          flexWrap: 'wrap',
          flexGrow: 2,
        }}
      >
        <Text>{textOne}</Text>
      </View>
    </TouchableHighlight>
  );
}
