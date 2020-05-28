import React, { useState, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ScrollView, Dimensions } from 'react-native';
import BottomSheetBehavior from 'reanimated-bottom-sheet';

import { selectPlayers } from '../../store/selectors';
import PlayersNames from './components/PlayersNames';
import PlayerMoves from './components/PlayerMoves';
import { styles } from './styles';

type Props = {
  y: number;
  minY: number;
  maxY: number;
  onBottom: boolean;
};

const ScoresTable: React.FC<Props> = ({ y, minY, maxY, onBottom }) => {
  const players = useSelector(selectPlayers);

  const scrollView = useRef<ScrollView>(null);
  const bottomSheet = useRef<BottomSheetBehavior>(null);

  const [movesHeights, setMovesHeights] = useState<Record<string, number>>({});

  const adjustMovesHeights = (index: number, height: number) => {
    setMovesHeights({
      ...movesHeights,
      [index]: height,
    });
  };

  useEffect(() => {
    setTimeout(() => {
      bottomSheet.current?.snapTo(onBottom ? 2 : 1);
    }, 1);
  }, [onBottom]);

  return (
    <BottomSheetBehavior
      ref={bottomSheet}
      snapPoints={[maxY, minY, 33]}
      initialSnap={1}
      enabledInnerScrolling={false}
      renderHeader={() => (
        <PlayersNames playersAmount={Object.keys(players).length} />
      )}
      renderContent={() => (
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
      )}
      enabledBottomClamp={true}
    />
  );
};

export default ScoresTable;
