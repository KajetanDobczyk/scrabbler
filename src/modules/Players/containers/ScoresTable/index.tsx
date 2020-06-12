import React, { useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import { ScrollView, Dimensions, View } from 'react-native';

import { selectPlayers } from '../../store/selectors';
import PlayersNames from './components/PlayersNames';
import PlayerMoves from './components/PlayerMoves';
import { styles } from './styles';
import { color } from 'src/theme';

const ScoresTable = () => {
  const players = useSelector(selectPlayers);

  const scrollView = useRef<ScrollView>(null);

  const [movesHeights, setMovesHeights] = useState<Record<string, number>>({});

  const adjustMovesHeights = (index: number, height: number) => {
    setMovesHeights({
      ...movesHeights,
      [index]: height,
    });
  };

  return (
    <View>
      <PlayersNames playersAmount={Object.keys(players).length} />
      <ScrollView
        ref={scrollView}
        contentContainerStyle={[
          {
            minHeight: Dimensions.get('window').height,
          },
          styles.listContent,
        ]}
        onContentSizeChange={() => {
          scrollView.current?.scrollToEnd({ animated: true });
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
            />
          ) : null,
        )}
      </ScrollView>
    </View>
  );
};

export default ScoresTable;
