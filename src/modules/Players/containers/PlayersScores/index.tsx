import React from 'react';
import { useSelector } from 'react-redux';
import { ScrollView } from 'react-native-gesture-handler';
import { View } from 'react-native';

import { selectPlayers } from '../../store/slice';
import PlayerColumn from './components/PlayerColumn';
import { styles } from './styles';

const PlayersScores = () => {
  const players = useSelector(selectPlayers);

  return (
    <ScrollView>
      <View style={styles.container}>
        {Object.values(players).map((player, i) =>
          player ? <PlayerColumn key={i} player={player} /> : null,
        )}
      </View>
    </ScrollView>
  );
};

export default PlayersScores;
