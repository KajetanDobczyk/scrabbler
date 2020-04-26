import React from 'react';
import { useSelector } from 'react-redux';
import { ScrollView } from 'react-native-gesture-handler';

import { selectPlayers, selectCurrentPlayerId } from '../../store/slice';
import PlayerColumn from './components/PlayerColumn';
import { styles } from './styles';

const PlayersScores = () => {
  const currentPlayerId = useSelector(selectCurrentPlayerId);
  const players = useSelector(selectPlayers);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {Object.values(players).map((player, i) =>
        player ? (
          <PlayerColumn
            key={i}
            player={player}
            index={i}
            playersAmount={Object.keys(players).length}
            isCurrent={currentPlayerId.toString() === Object.keys(players)[i]}
          />
        ) : null,
      )}
    </ScrollView>
  );
};

export default PlayersScores;
