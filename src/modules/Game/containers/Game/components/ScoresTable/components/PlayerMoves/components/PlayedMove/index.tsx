import React from 'react';

import { IPlayedMove } from 'src/modules/Game/interfaces';
import { countPlayedWordPoints } from 'src/modules/Game/store/players/helpers';

import * as S from './styles';

type Props = {
  index: number;
  move: IPlayedMove;
  height?: number;
  onLayout: (index: number, height: number) => void;
};

const PlayedMove: React.FC<Props> = ({ index, move, height, onLayout }) => {
  const isSeven = move.tiles.length === 7;

  let movePoints = isSeven ? 50 : 0;

  // Can't use nativeEvent's height, because it's same height as in given styles
  const handleOnLayout = () => {
    console.log('xd');
    const localHeight =
      26 +
      (move.tiles.length === 7 ? move.words.length + 1 : move.words.length) *
        14;

    if (!height || height < localHeight) {
      onLayout(index, localHeight);
    }
  };

  return (
    <S.PlayedMoveWrapper height={height} onLayout={handleOnLayout}>
      {move.words.map((word, i) => {
        const wordPoints = countPlayedWordPoints(word, move.tiles);
        movePoints += wordPoints;

        return (
          <S.WordRow key={i}>
            <S.Letters>
              {word.map((field, j) => (
                <S.Letter key={j} isBlank={Boolean(field.blankLetter)}>
                  {field.blankLetter || field.letter}
                </S.Letter>
              ))}
            </S.Letters>
            <S.Points>{wordPoints}</S.Points>
          </S.WordRow>
        );
      })}
      {isSeven && (
        <S.WordRow>
          <S.Letters>
            <S.Letter isBonus>Bonus</S.Letter>
          </S.Letters>
          <S.Points isBonus>50</S.Points>
        </S.WordRow>
      )}
      {move.type === 'skipped' && <S.MovePoints skipped>—</S.MovePoints>}
      {move.type === 'loss' && <S.MovePoints loss>X</S.MovePoints>}
      {!move.type && <S.MovePoints>{movePoints}</S.MovePoints>}
    </S.PlayedMoveWrapper>
  );
};

export default PlayedMove;
