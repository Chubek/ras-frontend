import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Text, Icon } from 'react-native-elements';
import PropTypes from 'prop-types';
import { BlurView, VibrancyView } from '@react-native-community/blur';

export default function ClosableMessageComponent({
  variant,
  onSetHide,
  showIf,
  message,
  blurType,
  fontSize,
  containerHeight,
}) {
  // I made this function retarded like this because ESLint was being a nob and I don't wish to disable anything.
  const makeBackgroundStyle = (state, theHeight) => {
    if (state === 'success') {
      return {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'space-around',
        padding: 10,
        backgroundColor: '#0C6291',
        margin: 20,
        borderRadius: 20,
        height: theHeight,
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
        borderRadius: 20,
        height: theHeight,
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
        height: theHeight,
      };
    }

    return false;
  };

  const makeTextStyle = size => {
    return {
      fontSize: size,
    };
  };

  if (showIf) {
    return (
      <View style={styles.container}>
        <View style={styles.blurContainer}>
          <BlurView
            blurType={blurType}
            blurAmount={100}
            reducedTransparencyFallbackColor="pink"
            style={[styles.blurView]}
          />
          <Grid style={makeBackgroundStyle(variant, containerHeight)}>
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
            <Row size={350}>
              <Col
                size={100}
                style={{ color: '#ff0', alignSelf: 'flex-start' }}
              >
                <Text style={makeTextStyle(fontSize)}> {message} </Text>
              </Col>
            </Row>
          </Grid>
        </View>
      </View>
    );
  }
  return false;
}

ClosableMessageComponent.propTypes = {
  variant: PropTypes.oneOf(['warning', 'success', 'error']).isRequired,
  setHide: PropTypes.func,
  showIf: PropTypes.bool,
  message: PropTypes.string,
  blurType: PropTypes.string,
  fontSize: PropTypes.number,
  containerHeight: PropTypes.number,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignContent: 'center',
    backgroundColor: 'transparent',
  },
  blurContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  blurView: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
});
