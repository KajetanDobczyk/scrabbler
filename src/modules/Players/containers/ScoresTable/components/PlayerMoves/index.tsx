import React from 'react';
import { View, Text } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import { IPlayer } from 'src/modules/Players/interfaces';
import { sumMovesPoints } from 'src/modules/Players/helpers';

import PlayedMove from './components/PlayedMove';
import { styles } from './styles';

type Props = {
  player: IPlayer;
  index: number;
  playersAmount: number;
  movesHeights: Record<string, number>;
  onAdjustMoveHeight: (index: number, height: number) => void;
};

const PlayerMoves: React.FC<Props> = ({
  player,
  index,
  playersAmount,
  movesHeights,
  onAdjustMoveHeight,
}) => (
  <View style={EStyleSheet.child(styles, 'container', index, playersAmount)}>
    {player.moves.map((move, i) => (
      <PlayedMove
        key={i}
        index={i}
        move={move}
        height={movesHeights[i]}
        onLayout={onAdjustMoveHeight}
      />
    ))}
    <Text style={styles.totalPoints}>{sumMovesPoints(player.moves)}</Text>
  </View>
);

export default PlayerMoves;
