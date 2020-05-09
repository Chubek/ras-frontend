/* Authored by Chubak Bidpaa: chubakbidpaa@gmail.com - 2020 - Corona Times */

import React from 'react';
import { TouchableHighlight, View } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Icon, Text } from 'react-native-elements';
import StringToColor from 'string-to-color';

export default function ListItemComponent({
  textOne,
  textTwo,
  textThree,
  onPress,
}) {
  return (
    <TouchableHighlight
      style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'flex-start',
        borderRadius: 20,
        borderWidth: 10,
        padding: 10,
        backgroundColor: StringToColor(textOne),
        height: '20%',
        width: '90%',
      }}
      onPress={onPress}
    >
      <View>
        <Text>{textOne}</Text>
        <Text>{textTwo}</Text>
        <Text>{textThree}</Text>
      </View>
    </TouchableHighlight>
  );
}
