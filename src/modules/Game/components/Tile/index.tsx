import React, { useEffect, useRef } from 'react';
import { Animated, Easing } from 'react-native';

import { Letter } from 'src/modules/Dictionary/interfaces';
import { tilesPoints } from 'src/modules/Dictionary/data';

import * as S from './styles';

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
  // const animation = Animated.loop(
  //   Animated.timing(animatedValue, {
  //     toValue: 1,
  //     easing: Easing.linear,
  //     duration: 2000,
  //   }),
  // );

  const highlightOverlayOpacityAnimation = animatedValue.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, 0.2, 0],
  });

  useEffect(() => {
    // if (isHighlighted) {
    //   animation.start();
    // } else {
    //   animation.stop();
    // }
  }, [isHighlighted]);

  return (
    <S.TileWrapper>
      <S.HighlightOverlay
        style={{
          opacity: highlightOverlayOpacityAnimation,
        }}
      />
      <S.Content>
        <S.Letter isBlank={Boolean(blankLetter)}>
          {letter !== '?' ? letter : blankLetter || ''}
        </S.Letter>
        {points ? <S.Points>{tilesPoints[letter]}</S.Points> : null}
      </S.Content>
    </S.TileWrapper>
  );
};

export default Tile;
