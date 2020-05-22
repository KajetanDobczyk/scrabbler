import React, { useState, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ScrollView, View, Dimensions } from 'react-native';
import BottomSheetBehavior from 'reanimated-bottom-sheet';

import { selectPlayers } from '../../store/selectors';
import PlayersNames from './components/PlayersNames';
import PlayersMoves from './components/PlayersMoves';
import PlayersTotalScores from './components/PlayersTotalScores';
import { styles } from './styles';

type Props = {
  yRange: {
    y: number;
    min: number;
    max: number;
  };
};

const ScoresTable: React.FC<Props> = ({ yRange }) => {
  const players = useSelector(selectPlayers);

  const scrollView = useRef<any>(null);
  const bottomSheet = useRef<any>(null);

  const [movesHeights, setMovesHeights] = useState<Record<string, number>>({});

  const adjustMovesHeights = (index: number, height: number) => {
    setMovesHeights({
      ...movesHeights,
      [index]: height,
    });
  };

  return (
    <BottomSheetBehavior
      ref={bottomSheet}
      snapPoints={[yRange.max, yRange.min]}
      initialSnap={1}
      renderContent={() => (
        <View
          style={{ height: Dimensions.get('screen').height - yRange.y - 90 }}
        >
          <PlayersNames />
          <ScrollView
            ref={scrollView}
            contentContainerStyle={styles.scrollViewContent}
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
        </View>
      )}
      enabledBottomClamp={true}
    />
  );
};

export default ScoresTable;
