import React, { useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import { ScrollView } from 'react-native';

import { selectPlayers } from '../../store/selectors';
import PlayersNames from './components/PlayersNames';
import PlayersMoves from './components/PlayersMoves';
import PlayersTotalScores from './components/PlayersTotalScores';
import { styles } from './styles';
import CurrentPlayerMenu from '../../components/CurrentPlayerMenu';

const ScoresTable = () => {
  const players = useSelector(selectPlayers);

  const scrollView = useRef<ScrollView>(null);

  const [movesHeights, setMovesHeights] = useState<Record<string, number>>({});

  const scrollToEnd = () => {
    scrollView.current?.scrollToEnd({ animated: true });
  };

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
        onContentSizeChange={scrollToEnd}
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
      <CurrentPlayerMenu />
    </>
  );
};

export default ScoresTable;
