import React, { useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import { ScrollView, Dimensions } from 'react-native';
import BottomSheetBehavior from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';

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

  const heightNode = new Animated.Value(1);
  const heightDifference = yRange.max - yRange.min;

  return (
    <BottomSheetBehavior
      ref={bottomSheet}
      snapPoints={[yRange.max, yRange.min]}
      initialSnap={1}
      callbackNode={heightNode}
      renderContent={() => (
        <Animated.View
          style={{
            height: Animated.sub(
              Dimensions.get('screen').height - yRange.y - 90,
              Animated.multiply(heightNode, heightDifference),
            ),
          }}
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
        </Animated.View>
      )}
      enabledBottomClamp={true}
    />
  );
};

export default ScoresTable;
