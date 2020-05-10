import { tilesPoints } from 'src/modules/Tiles/data';
import { Letter } from 'src/modules/Dictionary/interfaces';
import {
  IBoardTile,
  IBoardFields,
  IBoardField,
} from 'src/modules/Board/interfaces';
import { getFieldLetter } from 'src/modules/Board/store/helpers';

export const isMoveThroughCenter = (newMoveTiles: IBoardTile[]) =>
  newMoveTiles.find((tile) => tile.x === 7 && tile.y === 7);

export const isAnyLetterLoose = (
  newMoveTiles: IBoardTile[],
  boardFields: IBoardFields,
) =>
  newMoveTiles
    .map(
      ({ x, y }) =>
        boardFields[y][x - 1]?.letter !== '' ||
        boardFields[y][x + 1]?.letter !== '' ||
        (boardFields[y - 1] && boardFields[y - 1][x]?.letter !== '') ||
        (boardFields[y + 1] && boardFields[y + 1][x]?.letter !== ''),
    )
    .includes(false);

export const validateNewMove = (
  boardFields: IBoardFields,
  newMoveTiles: IBoardTile[],
  isFirstMove: boolean,
) => {
  if (isFirstMove && newMoveTiles.length === 1) {
    return 'Pierwszy ruch musi tworzyć wyraz!';
  }
  if (isFirstMove && !isMoveThroughCenter(newMoveTiles)) {
    return 'Pierwszy ruch musi przechodzić przez środek!';
  }
  if (isAnyLetterLoose(newMoveTiles, boardFields)) {
    return 'Nie wszystkie litery przylegają do innych!';
  }
};

export const getNewHorizontalMoves = (
  boardFields: IBoardFields,
  newMoveTiles: IBoardTile[],
): IBoardField[][] => {
  let alreadyUsedH = false;

  return newMoveTiles.reduce((acc, { x, y }) => {
    if (
      !alreadyUsedH &&
      (getFieldLetter(boardFields, x - 1, y) !== '' ||
        getFieldLetter(boardFields, x + 1, y) !== '')
    ) {
      //Letter to the left or right present, form a new word
      let leftX = x;
      let rightX = x;
      let wordBoardFields = [boardFields[y][x]];

      while (getFieldLetter(boardFields, leftX - 1, y) !== '') {
        leftX--;
        wordBoardFields.unshift(boardFields[y][leftX]);
      }
      while (getFieldLetter(boardFields, rightX + 1, y) !== '') {
        rightX++;
        wordBoardFields.push(boardFields[y][rightX]);
      }

      // Check if new move is horizontal, if so, don't check for new horizontal words
      alreadyUsedH = newMoveTiles.every((tile) => tile.y === newMoveTiles[0].y);

      return [...acc, wordBoardFields];
    } else {
      return acc;
    }
  }, [] as IBoardField[][]);
};

export const getNewVerticalMoves = (
  boardFields: IBoardFields,
  newMoveTiles: IBoardTile[],
): IBoardField[][] => {
  let alreadyUsedV = false;

  return newMoveTiles.reduce((acc, { x, y }) => {
    if (
      !alreadyUsedV &&
      (getFieldLetter(boardFields, x, y - 1) !== '' ||
        getFieldLetter(boardFields, x, y + 1) !== '')
    ) {
      //Letter above or below present, form a new word
      let upY = y;
      let downY = y;
      let wordBoardFields = [boardFields[y][x]];

      while (getFieldLetter(boardFields, x, upY - 1) !== '') {
        upY--;
        wordBoardFields.unshift(boardFields[upY][x]);
      }
      while (getFieldLetter(boardFields, x, downY + 1) !== '') {
        downY++;
        wordBoardFields.push(boardFields[downY][x]);
      }

      // Check if new move is vertical, if so, don't check for new vertical words
      alreadyUsedV = newMoveTiles.every((tile) => tile.x === newMoveTiles[0].x);

      return [...acc, wordBoardFields];
    } else {
      return acc;
    }
  }, [] as IBoardField[][]);
};
