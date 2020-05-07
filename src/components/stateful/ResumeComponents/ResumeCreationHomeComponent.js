/* Authored by Chubak Bidpaa: chubakbidpaa@gmail.com - 2020 - Corona Times */

import React, { Component, Fragment } from 'react';
import { StyleSheet, View } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import {
  Tooltip,
  Icon,
  Tile,
  Input,
  Text,
  Button,
  Card,
} from 'react-native-elements';
import uuid from 'react-uuid';
import I18t from '../../../translations';
import TileComponent from '../../stateless/TileComponent';

export default function ResumeCreationHomeComponent({ route, navigation }) {
  const { resumeId } = route.params;
  const sections = [
    {
      id: uuid(),
      name: 'contact',
      screenName: 'ContactSectionScreen',
      image: require('../../../../assets/images/placeholder.png'),
    },
    {
      id: uuid(),
      name: 'objective',
      screenName: 'ObjectiveSecionScreen',
      image: require('../../../../assets/images/placeholder.png'),
    },
    {
      id: uuid(),
      name: 'historyExp',
      screenName: 'HistoryExperienceSectionScreen',
      image: require('../../../../assets/images/placeholder.png'),
    },
    {
      id: uuid(),
      name: 'techSkills',
      screenName: 'TechSkillsSectionScreen',
      image: require('../../../../assets/images/placeholder.png'),
    },
    {
      id: uuid(),
      name: 'softwareSkills',
      screenName: 'SoftwareSkillsSectionScreen',
      image: require('../../../../assets/images/placeholder.png'),
    },
    {
      id: uuid(),
      name: 'degrees',
      screenName: 'DegreesSectionScreen',
      image: require('../../../../assets/images/placeholder.png'),
    },
    { id: uuid(), name: 'certifications', screenName: 'Certifications' },
    {
      id: uuid(),
      name: 'awardsAchievements',
      screenName: 'AwardsAchievementsSectionScreen',
      image: require('../../../../assets/images/placeholder.png'),
    },
    {
      id: uuid(),
      name: 'volunteerings',
      screenName: 'VolunteeringSectionScreen',
      image: require('../../../../assets/images/placeholder.png'),
    },
  ];

  const rows = [];
  for (let i = 0; i < Math.round(sections.length / 3); i += 1) {
    rows.push([]);
  }
  sections.forEach((l, i) => {
    rows[i % 3].push(
      <Col size={3}>
        <TileComponent
          icon={{ name: 'play-circle', type: 'font-awesome' }}
          title={I18t.t(`resumeTiles.${l.name}.title`)}
          subtitle={I18t.t(`resumeTiles.${l.name}.subtitle`)}
          onPress={() =>
            navigation.navigate(l.screenName, { params: { resumeId } })
          }
        />
      </Col>,
    );
  });

  return (
    <Grid>
      {rows.map(r => {
        return <Row>{r}</Row>;
      })}
    </Grid>
  );
}
