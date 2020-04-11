import React from 'react';
import { View } from 'react-native';

import { styles } from './styles';
import TurnsHistory from './components/TurnsHistory';
import PlayersScoresHeader from './components/PlayersScoresHeader';
import PlayersScoresFooter from './components/PlayersScoresFooter';

const PlayersScores = () => (
  <View style={styles.container}>
    <PlayersScoresHeader />
    <TurnsHistory />
    <PlayersScoresFooter />
  </View>
);

export default PlayersScores;
