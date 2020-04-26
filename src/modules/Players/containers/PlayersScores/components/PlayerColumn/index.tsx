import React, { useRef, useEffect } from 'react';
import { View, Text, Animated, Easing } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import { IPlayer } from 'src/modules/Players/interfaces';
import { color } from 'src/theme';

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
  let points = 0;

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
          <View key={i} style={styles.move}>
            {move.words.map((word, j) => {
              points = points + word.points;

              return (
                <Text key={j} style={styles.word}>
                  {word.word}
                </Text>
              );
            })}
            <Text style={styles.points}>{points}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default PlayerColumn;
