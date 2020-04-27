import React from 'react';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Text, Icon } from 'react-native-elements';
import PropTypes from 'prop-types';

export default function ClosableMessageComponent({
  variant,
  onSetHide,
  showIf,
  message,
}) {
  // I made this function retarded like this because ESLint was being a nob and I don't wish to disable anything.
  const makeBackgroundStyle = state => {
    if (state === 'success') {
      return {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'space-around',
        padding: 10,
        backgroundColor: '#0C6291',
        margin: 20,
      };
    }
    if (state === 'error') {
      return {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'space-around',
        padding: 10,
        margin: 20,
        backgroundColor: '#A63446',
      };
    }

    if (state === 'warning') {
      return {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'space-around',
        padding: 10,
        backgroundColor: '#F4D06F',
        margin: 20,
        borderRadius: 20,
      };
    }

    return false;
  };

  if (showIf) {
    return (
      <Grid style={makeBackgroundStyle(variant)}>
        <Row size={90}>
          <Col size={5} style={{ alignItems: 'flex-end' }}>
            <Icon
              type="font-awesome"
              color="#000"
              name="window-close"
              onPress={onSetHide}
            />
          </Col>
        </Row>
        <Row size={200}>
          <Col size={100} style={{ color: '#ff0', alignSelf: 'flex-start' }}>
            <Text> {message} </Text>
          </Col>
        </Row>
      </Grid>
    );
  }
  return false;
}

ClosableMessageComponent.propTypes = {
  variant: PropTypes.oneOf(['warning', 'success', 'error']).isRequired,
  setHide: PropTypes.func,
  showIf: PropTypes.bool,
  message: PropTypes.string,
};
