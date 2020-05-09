import React, { useEffect, useRef } from 'react';
import { Text, Animated, Easing, View } from 'react-native';

import { tilesPoints } from 'src/modules/Tiles/data';
import { Letter } from 'src/modules/Dictionary/interfaces';

import { styles } from './styles';

type Props = {
  letter: Letter;
  blankLetter?: Letter;
  isHighlighted?: boolean;
  hidePoints?: boolean;
};

const Tile: React.FC<Props> = ({
  letter,
  blankLetter,
  isHighlighted,
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

  const highlightOverlayOpacityAnimation = animatedValue.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, 0.2, 0],
  });

  useEffect(() => {
    if (isHighlighted) {
      animation.start();
    } else {
      animation.stop();
    }
  }, [isHighlighted]);

  return (
    <Animated.View style={styles.container}>
      <Animated.View
        style={[
          styles.highlightOverlay,
          {
            opacity: highlightOverlayOpacityAnimation,
          },
        ]}
      />
      <View style={styles.content}>
        <Text
          style={
            blankLetter ? [styles.letter, styles.blankLetter] : styles.letter
          }
        >
          {letter !== '?' ? letter : blankLetter || ''}
        </Text>
        {points ? (
          <Text style={styles.points}>{tilesPoints[letter]}</Text>
        ) : null}
      </View>
    </Animated.View>
  );
};

export default Tile;
