import React, { useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import { ScrollView, View, LayoutChangeEvent } from 'react-native';
import BottomSheetBehavior from 'reanimated-bottom-sheet';

import { selectPlayers } from '../../store/selectors';
import PlayersNames from './components/PlayersNames';
import PlayersMoves from './components/PlayersMoves';
import PlayersTotalScores from './components/PlayersTotalScores';
import { styles } from './styles';
import { color } from 'src/theme';

const ScoresTable = () => {
  const players = useSelector(selectPlayers);

  const scrollView = useRef<any>(null);

  const [movesHeights, setMovesHeights] = useState<Record<string, number>>({});
  const [dimensions, setDimensions] = useState({
    y: 0,
    height: 0,
  });

  const adjustMovesHeights = (index: number, height: number) => {
    setMovesHeights({
      ...movesHeights,
      [index]: height,
    });
  };

  const handleOnLayout = (event: LayoutChangeEvent) => {
    setDimensions({
      y: event.nativeEvent.layout.y,
      height: event.nativeEvent.layout.height,
    });
  };

  console.log(dimensions);

  return (
    <View
      style={[styles.container, { minHeight: dimensions.height }]}
      onLayout={handleOnLayout}
    >
      <PlayersTotalScores />
    </View>
    // <BottomSheetBehavior
    //   snapPoints={[-15, 307]}
    //   renderContent={() => (
    //     <View style={{ minHeight: 200 }}>
    //       <PlayersNames />
    //       <ScrollView
    //         ref={scrollView}
    //         contentContainerStyle={styles.container}
    //         onContentSizeChange={() => {
    //           scrollView.current.scrollToEnd({ animated: true });
    //         }}
    //       >
    //         {Object.values(players).map((player, i) =>
    //           player ? (
    //             <PlayersMoves
    //               key={i}
    //               player={player}
    //               index={i}
    //               playersAmount={Object.keys(players).length}
    //               movesHeights={movesHeights}
    //               onAdjustMoveHeight={adjustMovesHeights}
    //             />
    //           ) : null,
    //         )}
    //       </ScrollView>
    //     </View>
    //   )}
    //   enabledBottomClamp={true}
    // />
  );
};

export default ScoresTable;
