import React, { useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import { ScrollView } from 'react-native';

import { selectPlayers } from 'src/modules/Game/store/players/selectors';

import PlayersNames from './components/PlayersNames';
import PlayerMoves from './components/PlayerMoves';
import PlayersTotalScores from './components/PlayersTotalScores';
import CurrentPlayerMenu from './components/CurrentPlayerMenu';

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

  const validPlayers = Object.values(players).filter((player) => player);

  return (
    <>
      <PlayersNames />
      <ScrollView
        ref={scrollView}
        contentContainerStyle={{
          width: '100%',
          flexGrow: 1,
          flexDirection: 'row',
        }}
        onContentSizeChange={scrollToEnd}
      >
        {validPlayers.map((player, i) => (
          <PlayerMoves
            key={i}
            player={player!}
            movesHeights={movesHeights}
            onAdjustMoveHeight={adjustMovesHeights}
            isLastPlayer={i === validPlayers.length - 1}
          />
        ))}
      </ScrollView>
      <PlayersTotalScores />
      <CurrentPlayerMenu />
    </>
  );
};

export default ScoresTable;
