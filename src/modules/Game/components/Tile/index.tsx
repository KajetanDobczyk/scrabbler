import React, { useEffect, useRef } from 'react';
import { Animated } from 'react-native';

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
  const animatedOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (isHighlighted) {
      Animated.loop(
        Animated.timing(animatedOpacity, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
        { iterations: -1 },
      ).start();
    }
  }, [isHighlighted]);

  return (
    <S.TileWrapper>
      <S.HighlightOverlay
        style={{
          opacity: animatedOpacity,
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
