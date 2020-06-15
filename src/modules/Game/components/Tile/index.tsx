import React, { useEffect, useRef } from 'react';
import { Text, Animated, Easing, View } from 'react-native';
import { useSelector } from 'react-redux';

import { Letter } from 'src/modules/Dictionary/interfaces';
import { tilesPoints } from 'src/modules/Dictionary/data';
import { selectTheme } from 'src/modules/Settings/store/selectors';

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
  const theme = useSelector(selectTheme);

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

  const themedStyles = styles(theme, {
    opacity: blankLetter ? 0.3 : 1,
  });

  return (
    <Animated.View style={themedStyles.container}>
      <Animated.View
        style={[
          themedStyles.highlightOverlay,
          {
            opacity: highlightOverlayOpacityAnimation,
          },
        ]}
      />
      <View style={themedStyles.content}>
        <Text style={themedStyles.letter}>
          {letter !== '?' ? letter : blankLetter || ''}
        </Text>
        {points ? (
          <Text style={themedStyles.points}>{tilesPoints[letter]}</Text>
        ) : null}
      </View>
    </Animated.View>
  );
};

export default Tile;
