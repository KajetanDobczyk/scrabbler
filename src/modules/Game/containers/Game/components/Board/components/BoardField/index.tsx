import React from 'react';
import { useSelector } from 'react-redux';
import { css } from '@emotion/native';

import { IBoardField } from 'src/modules/Game/interfaces';
import Tile from 'src/modules/Game/components/Tile';
import { getBoardFieldsBgColors } from 'src/modules/Game/store/board/data';
import { selectTheme } from 'src/modules/Settings/store/selectors';
import animations from 'src/theme/animations';

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

  //TODO: Refactor getBoardFieldsBgColors to be more readable and efficient
  return (
    <S.BoardFieldWrapper
      onPress={() => onPress(x, y)}
      style={css({
        backgroundColor: getBoardFieldsBgColors(theme.color)[field.bonus],
      })}
    >
      {isTarget && (
        <S.HighlightOverlay
          animation={animations.flashLight}
          iterationCount="infinite"
          easing="ease-in-out"
        />
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
