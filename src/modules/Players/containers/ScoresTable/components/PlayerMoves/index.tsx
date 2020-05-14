import React from 'react';
import { View, Text } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import { sumMovesPoints } from 'src/modules/Players/helpers';
import { IPlayer } from 'src/modules/Players/interfaces';

import PlayedMove from './components/PlayedMove';
import CurrentPlayerMenu from './components/CurrentPlayerMenu';
import { styles } from './styles';

type Props = {
  player: IPlayer;
  index: number;
  playersAmount: number;
  movesHeights: Record<string, number>;
  isCurrent: boolean;
  onAdjustMoveHeight: (index: number, height: number) => void;
};

const PlayerMoves: React.FC<Props> = ({
  player,
  index,
  playersAmount,
  movesHeights,
  isCurrent,
  onAdjustMoveHeight,
}) => (
  <View style={EStyleSheet.child(styles, 'container', index, playersAmount)}>
    <View style={styles.moves}>
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
    {isCurrent && <CurrentPlayerMenu />}
  </View>
);

export default PlayerMoves;
