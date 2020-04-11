import React from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';

import { styles } from './styles';
import TurnsHistory from './components/TurnsHistory';
import PlayersScoresHeader from './components/PlayersScoresHeader';
import PlayersScoresFooter from './components/PlayersScoresFooter';
import { selectPlayers } from '../../store/slice';

const PlayersScores = () => {
  const players = useSelector(selectPlayers);

  return (
    <View style={styles.container}>
      <PlayersScoresHeader players={players} />
      <TurnsHistory players={players} />
      <PlayersScoresFooter players={players} />
    </View>
  );
};

export default PlayersScores;
