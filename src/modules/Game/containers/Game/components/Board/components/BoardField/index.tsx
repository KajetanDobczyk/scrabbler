import React, { useRef } from 'react';
import { View, Animated, TouchableOpacity, Easing } from 'react-native';

import { IBoardField } from 'src/modules/Game/interfaces';
import Tile from 'src/modules/Game/components/Tile';
import { boardFieldsColors } from 'src/modules/Game/data';

import { stylesFun } from './styles';

type Props = {
  x: number;
  y: number;
  field: IBoardField;
  onPress: (x: number, y: number) => void;
  isTarget: boolean;
  isInNewMove: boolean;
};

const BoardField: React.FC<Props> = ({
  x,
  y,
  field,
  onPress,
  isTarget,
  isInNewMove,
}) => {
  const animatedValue = useRef(new Animated.Value(0)).current;
  const animation = Animated.loop(
    Animated.timing(animatedValue, {
      toValue: 1,
      easing: Easing.linear,
      duration: 2000,
    }),
  );

  const overlayOpacityAnimation = animatedValue.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, isTarget ? 0.5 : 0.2, 0],
  });

  if (isTarget) {
    animation.start();
  } else {
    animation.stop();
  }

  const styles = stylesFun({
    backgroundColor: boardFieldsColors[field.bonus],
  });

  return (
    <TouchableOpacity style={styles.container} onPress={() => onPress(x, y)}>
      {isTarget && (
        <Animated.View
          style={[
            styles.highlightOverlay,
            { opacity: overlayOpacityAnimation },
          ]}
        />
      )}
      {field.letter ? (
        <View style={styles.tileWrapper}>
          <Tile
            letter={field.letter}
            blankLetter={field.blankLetter}
            isHighlighted={isInNewMove}
          />
        </View>
      ) : null}
    </TouchableOpacity>
  );
};

export default BoardField;
