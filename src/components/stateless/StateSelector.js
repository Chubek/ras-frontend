/* Authored by Chubak Bidpaa: chubakbidpaa@gmail.com - 2020 - Corona Times */
import React from 'react';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';

const cityList = [
  { name: 'AK - Alaska', key: Math.random() },
  { name: 'AL - Alabama', key: Math.random() },
  { name: 'AR - Arkansas', key: Math.random() },
  { name: 'AS - American Samoa', key: Math.random() },
  { name: 'AZ - Arizona', key: Math.random() },
  { name: 'CA - California', key: Math.random() },
  { name: 'CO - Colorado', key: Math.random() },
  { name: 'CT - Connecticut', key: Math.random() },
  { name: 'DC - District of Columbia', key: Math.random() },
  { name: 'DE - Delaware', key: Math.random() },
  { name: 'FL - Florida', key: Math.random() },
  { name: 'GA - Georgia', key: Math.random() },
  { name: 'GU - Guam', key: Math.random() },
  { name: 'HI - Hawaii', key: Math.random() },
  { name: 'IA - Iowa', key: Math.random() },
  { name: 'ID - Idaho', key: Math.random() },
  { name: 'IL - Illinois', key: Math.random() },
  { name: 'IN - Indiana', key: Math.random() },
  { name: 'KS - Kansas', key: Math.random() },
  { name: 'KY - Kentucky', key: Math.random() },
  { name: 'LA - Louisiana', key: Math.random() },
  { name: 'MA - Massachusetts', key: Math.random() },
  { name: 'MD - Maryland', key: Math.random() },
  { name: 'ME - Maine', key: Math.random() },
  { name: 'MI - Michigan', key: Math.random() },
  { name: 'MN - Minnesota', key: Math.random() },
  { name: 'MO - Missouri', key: Math.random() },
  { name: 'MS - Mississippi', key: Math.random() },
  { name: 'MT - Montana', key: Math.random() },
  { name: 'NC - North Carolina', key: Math.random() },
  { name: 'ND - North Dakota', key: Math.random() },
  { name: 'NE - Nebraska', key: Math.random() },
  { name: 'NH - New Hampshire', key: Math.random() },
  { name: 'NJ - New Jersey', key: Math.random() },
  { name: 'NM - New Mexico', key: Math.random() },
  { name: 'NV - Nevada', key: Math.random() },
  { name: 'NY - New York', key: Math.random() },
  { name: 'OH - Ohio', key: Math.random() },
  { name: 'OK - Oklahoma', key: Math.random() },
  { name: 'OR - Oregon', key: Math.random() },
  { name: 'PA - Pennsylvania', key: Math.random() },
  { name: 'PR - Puerto Rico', key: Math.random() },
  { name: 'RI - Rhode Island', key: Math.random() },
  { name: 'SC - South Carolina', key: Math.random() },
  { name: 'SD - South Dakota', key: Math.random() },
  { name: 'TN - Tennessee', key: Math.random() },
  { name: 'TX - Texas', key: Math.random() },
  { name: 'UT - Utah', key: Math.random() },
  { name: 'VA - Virginia', key: Math.random() },
  { name: 'VI - Virgin Islands', key: Math.random() },
  { name: 'VT - Vermont', key: Math.random() },
  { name: 'WA - Washington', key: Math.random() },
  { name: 'WI - Wisconsin', key: Math.random() },
  { name: 'WV - West Virginia', key: Math.random() },
  { name: 'WY - Wyoming', key: Math.random() },
];

export default function StateSelector({ onSetStateValue, toggle }) {
  const keyExtractor = (item, index) => index.toString();

  const renderItem = ({ item }) => (
    <ListItem
      title={item.name}
      leftIcon={{ type: 'font-awesome', name: 'compass' }}
      bottomDivider
      onPress={() => {
        onSetStateValue('contact.state', item.name);
        toggle();
      }}
      chevron
    />
  );

  return (
    <FlatList
      keyExtractor={keyExtractor}
      data={cityList}
      renderItem={renderItem}
    />
  );
}
