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
      icon: 'address-book',
    },
    {
      id: uuid(),
      name: 'objective',
      screenName: 'ObjectiveSecionScreen',
      image: require('../../../../assets/images/placeholder.png'),
      icon: 'bullseye',
    },
    {
      id: uuid(),
      name: 'historyExp',
      screenName: 'HistoryExperienceSectionScreen',
      image: require('../../../../assets/images/placeholder.png'),
      icon: 'briefcase',
    },
    {
      id: uuid(),
      name: 'techSkills',
      screenName: 'TechSkillsSectionScreen',
      image: require('../../../../assets/images/placeholder.png'),
      icon: 'wrench',
    },
    {
      id: uuid(),
      name: 'softwareSkills',
      screenName: 'SoftwareSkillsSectionScreen',
      image: require('../../../../assets/images/placeholder.png'),
      icon: 'laptop',
    },
    {
      id: uuid(),
      name: 'degrees',
      screenName: 'DegreesSectionScreen',
      image: require('../../../../assets/images/placeholder.png'),
      icon: 'university',
    },
    {
      id: uuid(),
      name: 'certifications',
      screenName: 'Certifications',
      icon: 'certificate',
    },
    {
      id: uuid(),
      name: 'awardsAchievements',
      screenName: 'AwardsAchievementsSectionScreen',
      image: require('../../../../assets/images/placeholder.png'),
      icon: 'trophy',
    },
    {
      id: uuid(),
      name: 'volunteerings',
      screenName: 'VolunteeringSectionScreen',
      image: require('../../../../assets/images/placeholder.png'),
      icon: 'heart',
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
          icon={l.icon}
          title={I18t.t(`resumeTiles.${l.name}.title`)}
          onPress={() =>
            navigation.navigate(l.screenName, { params: { resumeId } })
          }
        />
      </Col>,
    );
  });

  return (
    <Grid style={{ marginTop: -5, marginLeft: -8 }}>
      {rows.map(r => {
        return <Row>{r}</Row>;
      })}
    </Grid>
  );
}
