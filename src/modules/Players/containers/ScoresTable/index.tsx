import React, { useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import { ScrollView } from 'react-native';

import { selectPlayers, selectCurrentPlayerId } from '../../store/selectors';
import PlayersNames from './components/PlayersNames';
import PlayersMoves from './components/PlayersMoves';
import PlayersTotalScores from './components/PlayersTotalScores';
import { styles } from './styles';

const ScoresTable = () => {
  const currentPlayerId = useSelector(selectCurrentPlayerId);
  const players = useSelector(selectPlayers);

  const scrollView = useRef<any>(null);

  const [movesHeights, setMovesHeights] = useState<Record<string, number>>({});

  const adjustMovesHeights = (index: number, height: number) => {
    setMovesHeights({
      ...movesHeights,
      [index]: height,
    });
  };

  return (
    <>
      <PlayersNames />
      <ScrollView
        ref={scrollView}
        contentContainerStyle={styles.container}
        onContentSizeChange={() => {
          scrollView.current.scrollToEnd({ animated: true });
        }}
      >
        {Object.values(players).map((player, i) =>
          player ? (
            <PlayersMoves
              key={i}
              player={player}
              index={i}
              playersAmount={Object.keys(players).length}
              movesHeights={movesHeights}
              onAdjustMoveHeight={adjustMovesHeights}
            />
          ) : null,
        )}
      </ScrollView>
      <PlayersTotalScores />
    </>
  );
};

export default ScoresTable;
