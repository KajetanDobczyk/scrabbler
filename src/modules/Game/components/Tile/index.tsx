import React from 'react';
import { View } from 'react-native';
import * as Animatable from 'react-native-animatable';

import { Letter } from 'src/modules/Dictionary/interfaces';
import { tilesPoints } from 'src/modules/Dictionary/data';
import animations from 'src/theme/animations';

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

  return (
    <S.TileWrapper>
      {isHighlighted && (
        <S.HighlightOverlay
          animation={animations.flash}
          iterationCount="infinite"
          easing="ease-in-out"
        />
      )}
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
