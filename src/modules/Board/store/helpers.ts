import range from 'lodash/range';

import { tilesPoints } from 'src/modules/Tiles/data';
import { Letter } from 'src/modules/Dictionary/interfaces';

import { IBoardTile, IBoardFields, WordDirection } from '../interfaces';

export const isMoveThroughCenter = (newMove: IBoardTile[]) =>
  newMove.find((tile) => tile.x === 7 && tile.y === 7);

export const areLettersUnalligned = (newMove: IBoardTile[]) =>
  !(
    newMove.every((tile) => tile.x === newMove[0].x) ||
    newMove.every((tile) => tile.y === newMove[0].y)
  );

export const isAnyLetterLoose = (
  newMove: IBoardTile[],
  boardFields: IBoardFields,
) =>
  newMove
    .map(
      ({ x, y }) =>
        boardFields[y][x - 1]?.letter !== '' ||
        boardFields[y][x + 1]?.letter !== '' ||
        (boardFields[y - 1] && boardFields[y - 1][x]?.letter !== '') ||
        (boardFields[y + 1] && boardFields[y + 1][x]?.letter !== ''),
    )
    .includes(false);

export const getFieldLetter = (
  boardFields: IBoardFields,
  x: number,
  y: number,
) => (boardFields[y] && boardFields[y][x]?.letter) || '';

export const countWordPoints = (
  boardFields: IBoardFields,
  newMove: IBoardTile[],
  x0: number,
  y0: number,
  word: string,
  direction: WordDirection,
) => {
  let x = x0;
  let y = y0;
  let wordPoints = 0;
  let wordMultiplier = 1;
  const moveToNextLetter = direction === 'h' ? () => y++ : () => x++;

  range(word.length).map((i) => {
    const tilePoints = tilesPoints[word[i] as Letter];
    const fieldBonus =
      newMove.find((tile) => tile.x === x && tile.y === y) &&
      boardFields[y][x].bonus;

    switch (fieldBonus) {
      case 'dl':
        wordPoints += tilePoints * 2;
        break;
      case 'tl':
        wordPoints += tilePoints * 3;
        break;
      case 'dw':
        wordPoints += tilePoints;
        wordMultiplier *= 2;
        break;
      case 'tw':
        wordPoints += tilePoints;
        wordMultiplier *= 3;
        break;
      default:
        wordPoints += tilePoints;
    }

    moveToNextLetter();
  });

  return wordPoints * wordMultiplier;
};
