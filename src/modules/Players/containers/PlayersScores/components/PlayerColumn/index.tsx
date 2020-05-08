import React from 'react';
import { View, Text } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import { sumMovesPoints } from 'src/modules/Players/helpers';
import { IPlayer } from 'src/modules/Players/interfaces';

import PlayedMove from './components/PlayedMove';
import { styles } from './styles';

type Props = {
  player: IPlayer;
  index: number;
  playersAmount: number;
  isCurrent: boolean;
};

const PlayerColumn: React.FC<Props> = ({
  player,
  index,
  playersAmount,
  isCurrent,
}) => (
  <View style={EStyleSheet.child(styles, 'container', index, playersAmount)}>
    <View style={styles.header}>
      <Text style={isCurrent ? [styles.name, styles.currentName] : styles.name}>
        {player.name}
      </Text>
    </View>
    <View style={styles.moves}>
      {player.moves.map((move, i) => (
        <PlayedMove key={i} move={move} />
      ))}
      <Text style={styles.totalPoints}>{sumMovesPoints(player.moves)}</Text>
    </View>
  </View>
);

export default PlayerColumn;
