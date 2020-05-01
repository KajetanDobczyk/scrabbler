import React, { useRef, useEffect } from 'react';
import { View, Text, Animated, Easing } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import { sumMovesPoints } from 'src/modules/Players/helpers';
import { IPlayer } from 'src/modules/Players/interfaces';
import { color } from 'src/theme';

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
}) => {
  const animatedValue = useRef(new Animated.Value(0)).current;
  const animation = Animated.loop(
    Animated.timing(animatedValue, {
      toValue: 1,
      easing: Easing.linear,
      duration: 10000,
    }),
  );

  const backgroundColor = animatedValue.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [color.lightGreen, color.green, color.lightGreen],
  });

  useEffect(() => {
    if (isCurrent) {
      animation.start();
    } else {
      animation.stop();
      animatedValue.setValue(0);
    }
  }, [isCurrent]);

  return (
    <View style={EStyleSheet.child(styles, 'container', index, playersAmount)}>
      <Animated.View style={[styles.header, { backgroundColor }]}>
        <Text style={styles.name}>{player.name}</Text>
      </Animated.View>
      <View style={styles.moves}>
        {player.moves.map((move, i) => (
          <PlayedMove key={i} move={move} />
        ))}
        <Text style={styles.totalPoints}>{sumMovesPoints(player.moves)}</Text>
      </View>
    </View>
  );
};

export default PlayerColumn;
