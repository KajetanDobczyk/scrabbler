import React, { useEffect, useRef } from 'react';
import { View, Text, Animated, Easing } from 'react-native';

import { tilesPoints } from 'src/modules/Tiles/data';
import { Letter } from 'src/modules/Dictionary/interfaces';
import { color } from 'src/theme';

import { styles } from './styles';

type Props = {
  letter: Letter;
  isInNewMove?: boolean;
};

const Tile: React.FC<Props> = ({ letter, isInNewMove }) => {
  const points = tilesPoints[letter];
  const animatedValue = useRef(new Animated.Value(0)).current;
  const animation = Animated.loop(
    Animated.timing(animatedValue, {
      toValue: 1,
      easing: Easing.linear,
      duration: 2000,
    }),
  );

  const backgroundColor = animatedValue.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [color.cream, color.white, color.cream],
  });

  useEffect(() => {
    if (isInNewMove) {
      animation.start();
    } else {
      animation.stop();
    }
  }, [isInNewMove]);

  return (
    <Animated.View style={[styles.container, { backgroundColor }]}>
      <Text style={styles.letter}>{letter !== '?' ? letter : ''}</Text>
      {points ? <Text style={styles.points}>{tilesPoints[letter]}</Text> : null}
    </Animated.View>
  );
};

export default Tile;
