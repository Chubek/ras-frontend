import React from 'react';
import { Row, Grid } from 'react-native-easy-grid';
import { Icon } from 'react-native-elements';

export default function HamburgerButton({ navigation }) {
  return (
    <Grid style={{ margin: 20 }}>
      <Row size={10}>
        <Icon
          type="font-awesome"
          name="bars"
          color="#000"
          style={{ padding: 10, margin: 20 }}
          onPress={() => navigation.toggleDrawer()}
        />
      </Row>
    </Grid>
  );
}
