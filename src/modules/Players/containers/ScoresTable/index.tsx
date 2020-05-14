import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { ScrollView, View } from 'react-native';

import { selectPlayers, selectCurrentPlayerId } from '../../store/selectors';
import PlayerMoves from './components/PlayerMoves';
import TableHeader from './components/TableHeader';
import { styles } from './styles';

const ScoresTable = () => {
  const currentPlayerId = useSelector(selectCurrentPlayerId);
  const players = useSelector(selectPlayers);

  const [movesHeights, setMovesHeights] = useState<Record<string, number>>({});

  const adjustMovesHeights = (index: number, height: number) => {
    setMovesHeights({
      ...movesHeights,
      [index]: height,
    });
  };

  return (
    <View style={styles.container}>
      <TableHeader />
      <ScrollView contentContainerStyle={styles.playersMoves}>
        {Object.values(players).map((player, i) =>
          player ? (
            <PlayerMoves
              key={i}
              player={player}
              index={i}
              playersAmount={Object.keys(players).length}
              movesHeights={movesHeights}
              onAdjustMoveHeight={adjustMovesHeights}
              isCurrent={currentPlayerId.toString() === Object.keys(players)[i]}
            />
          ) : null,
        )}
      </ScrollView>
    </View>
  );
};

export default ScoresTable;
