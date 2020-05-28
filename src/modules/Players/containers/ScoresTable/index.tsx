import React, { useState, useRef, useEffect, memo } from 'react';
import { useSelector } from 'react-redux';
import { ScrollView, Dimensions, View } from 'react-native';
import BottomSheetBehavior from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';

import { selectPlayers } from '../../store/selectors';
import PlayersNames from './components/PlayersNames';
import PlayersMoves from './components/PlayersMoves';
import { styles } from './styles';
import { color } from 'src/theme';

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
      snapPoints={[maxY, minY, 35]}
      initialSnap={1}
      renderHeader={() => (
        <PlayersNames playersAmount={Object.keys(players).length} />
      )}
      renderContent={() => (
        // <Animated.View
        //   style={{
        //     height: Animated.sub(
        //       Dimensions.get('screen').height - y - 90,
        //       Animated.multiply(heightNode, heightDifference),
        //     ),
        //   }}
        // >
        //   <ScrollView
        //     ref={scrollView}
        //     contentContainerStyle={styles.listContent}
        //     onContentSizeChange={() => {
        //       scrollView.current?.scrollToEnd({ animated: true });
        //     }}
        //   >
        //     {Object.values(players).map((player, i) =>
        //       player ? (
        //         <PlayersMoves
        //           key={i}
        //           player={player}
        //           index={i}
        //           playersAmount={Object.keys(players).length}
        //           movesHeights={movesHeights}
        //           onAdjustMoveHeight={adjustMovesHeights}
        //         />
        //       ) : null,
        //     )}
        //   </ScrollView>
        // </Animated.View>
        <View
          style={[
            {
              minHeight: Dimensions.get('screen').height,
            },
            styles.listContent,
          ]}
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
        </View>
      )}
      enabledBottomClamp={true}
    />
  );
};

export default ScoresTable;
