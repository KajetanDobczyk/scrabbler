import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import { Animated, Easing } from 'react-native';
import { css } from '@emotion/native';

import { IBoardField } from 'src/modules/Game/interfaces';
import Tile from 'src/modules/Game/components/Tile';
import { getBoardFieldsBgColors } from 'src/modules/Game/store/board/data';
import { selectTheme } from 'src/modules/Settings/store/selectors';

import * as S from './styles';

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
  const theme = useSelector(selectTheme);

  const animatedValue = useRef(new Animated.Value(0)).current;
  // const animation = Animated.loop(
  //   Animated.timing(animatedValue, {
  //     toValue: 1,
  //     easing: Easing.linear,
  //     duration: 2000,
  //   }),
  // );

  const overlayOpacityAnimation = animatedValue.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, isTarget ? 0.5 : 0.2, 0],
  });

  // if (isTarget) {
  //   animation.start();
  // } else {
  //   animation.stop();
  // }

  //TODO: Refactor getBoardFieldsBgColors to be more readable and efficient
  return (
    <S.BoardFieldWrapper
      onPress={() => onPress(x, y)}
      style={css({
        backgroundColor: getBoardFieldsBgColors(theme.color)[field.bonus],
      })}
    >
      {isTarget && (
        <S.HighlightOverlay style={{ opacity: overlayOpacityAnimation }} />
      )}
      {field.letter ? (
        <S.TileWrapper>
          <Tile
            letter={field.letter}
            blankLetter={field.blankLetter}
            isHighlighted={isInNewMove}
          />
        </S.TileWrapper>
      ) : null}
    </S.BoardFieldWrapper>
  );
};

export default BoardField;
