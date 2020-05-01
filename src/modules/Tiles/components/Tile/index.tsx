import React, { useEffect, useRef } from 'react';
import { Text, Animated, Easing } from 'react-native';

import { tilesPoints } from 'src/modules/Tiles/data';
import { Letter } from 'src/modules/Dictionary/interfaces';
import { color } from 'src/theme';

import { styles } from './styles';

type Props = {
  letter: Letter;
  blankLetter?: Letter;
  isInNewMove?: boolean;
  hidePoints?: boolean;
};

const Tile: React.FC<Props> = ({
  letter,
  blankLetter,
  isInNewMove,
  hidePoints,
}) => {
  const points = !hidePoints && tilesPoints[letter];
  const animatedValue = useRef(new Animated.Value(0)).current;
  const animation = Animated.loop(
    Animated.timing(animatedValue, {
      toValue: 1,
      easing: Easing.linear,
      duration: 2000,
    }),
  );

  const bgColorAnimation = animatedValue.interpolate({
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
    <Animated.View style={[styles.container, { bgColorAnimation }]}>
      <Text style={blankLetter ? styles.blankLetter : styles.letter}>
        {letter !== '?' ? letter : blankLetter || ''}
      </Text>
      {points ? <Text style={styles.points}>{tilesPoints[letter]}</Text> : null}
    </Animated.View>
  );
};

export default Tile;
