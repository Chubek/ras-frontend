/* Authored by Chubak Bidpaa: chubakbidpaa@gmail.com - 2020 - Corona Times */

import React, { Component } from 'react';
import { StyleSheet, ImageBackground } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Tooltip, Icon, Input, Text, Button } from 'react-native-elements';
import I18t from '../../../translations';

export default class ResumeCreationComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resumeName: null,
      resumeId: null,
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.resumeId !== prevState.resumeId) {
      return { resumeId: nextProps.resumeId };
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.resumeId !== this.props.resumeId) {
      /* eslint-disable */
      this.setState({
        resumeId: resumeId,
      });
      /* eslint-enable */
      this.props.navigation.navigate('ResumeCreationHomeScreen', {
        params: {
          resumeId: this.props.resumeId,
        },
      });
    }
  }

  onCreateResume() {
    const { createResume } = this.props;
    const { resumeName } = this.state;

    createResume(resumeName);
  }

  render() {
    return (
      <Grid>
        <Row size={30} />
        <Row size={60}>
          <Input
            label={I18t.t('resumeCreation.resumeName')}
            leftIcon={{ type: 'font-awesome', name: 'arrow-right' }}
            style={styles.nameInput}
            onChangeText={value => this.setState({ resumeName: value })}
          />
        </Row>
        <Row size={60}>
          <Col size={30} />
          <Col size={80}>
            <Button
              icon={{
                type: 'font-awesome',
                name: 'plus',
                size: 15,
                color: 'white',
              }}
              title={I18t.t('resumeCreation.create')}
              style={{ marginRight: 10 }}
              onPress={() => this.onCreateResume()}
            />
          </Col>
          <Col size={10} />
        </Row>
      </Grid>
    );
  }
}

const styles = StyleSheet.create({
  nameInput: {
    marginTop: '50%',
  },
});
