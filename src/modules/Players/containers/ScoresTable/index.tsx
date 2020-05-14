import React, { useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import { ScrollView } from 'react-native';

import { selectPlayers, selectCurrentPlayerId } from '../../store/selectors';
import PlayerMoves from './components/PlayerMoves';
import TableHeader from './components/TableHeader';
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
      <TableHeader />
      <ScrollView
        ref={scrollView}
        contentContainerStyle={styles.container}
        onContentSizeChange={() => {
          scrollView.current.scrollToEnd({ animated: true });
        }}
      >
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
    </>
  );
};

export default ScoresTable;
