import { Letter } from 'src/modules/Dictionary/interfaces';
import { alphabet } from 'src/modules/Dictionary/data';

import {
  IBoardFields,
  INewMove,
  WordDirection,
  IBoardTile,
  IBoardField,
  ICoordinates,
} from '../../interfaces';
import i18n from 'src/services/i18n';

export const getFieldLetter = (
  boardFields: IBoardFields,
  x: number,
  y: number,
) => boardFields[y] && boardFields[y][x]?.letter;

export const isInLineWithNewMove = (
  { direction, tiles }: INewMove,
  x: number,
  y: number,
) => (direction === 'h' ? tiles[0].y === y : tiles[0].x === x);

export const isInNewMove = ({ tiles }: INewMove, x: number, y: number) =>
  tiles.find((tile) => tile.x === x && tile.y === y);

export const findNextFreeBoardField = (
  boardFields: IBoardFields,
  target: ICoordinates,
  direction: WordDirection,
) => {
  let { x, y } = target;
  let nextLetter: Letter | null | undefined = null;

  do {
    if (direction === 'h') {
      x++;
    } else {
      y++;
    }

    nextLetter = getFieldLetter(boardFields, x, y);
  } while (nextLetter);

  return nextLetter === null ? { x, y } : undefined;
};

export const isMoveThroughCenter = (newMoveTiles: IBoardTile[]) =>
  newMoveTiles.find((tile) => tile.x === 7 && tile.y === 7);

export const isAnyLetterLoose = (
  newMoveTiles: IBoardTile[],
  boardFields: IBoardFields,
) =>
  newMoveTiles
    .map(
      ({ x, y }) =>
        boardFields[y][x - 1]?.letter ||
        boardFields[y][x + 1]?.letter ||
        (boardFields[y - 1] && boardFields[y - 1][x]?.letter) ||
        (boardFields[y + 1] && boardFields[y + 1][x]?.letter),
    )
    .includes(null);

export const isNewMoveLoose = (
  newMoveTiles: IBoardTile[],
  boardFields: IBoardFields,
) =>
  !newMoveTiles.find(
    ({ x, y }) =>
      (!newMoveTiles.find((tile) => tile.x === x - 1 && tile.y === y) &&
        boardFields[y][x - 1]?.letter) ||
      (!newMoveTiles.find((tile) => tile.x === x + 1 && tile.y === y) &&
        boardFields[y][x + 1]?.letter) ||
      (!newMoveTiles.find((tile) => tile.x === x && tile.y === y - 1) &&
        boardFields[y - 1] &&
        boardFields[y - 1][x]?.letter) ||
      (!newMoveTiles.find((tile) => tile.x === x && tile.y === y + 1) &&
        boardFields[y + 1] &&
        boardFields[y + 1][x]?.letter),
  );

export const validateNewMove = (
  boardFields: IBoardFields,
  newMoveTiles: IBoardTile[],
  isFirstMove: boolean,
) => {
  if (isFirstMove && newMoveTiles.length === 1) {
    return i18n.t('game:errors.firstMoveCreateWord');
  }
  if (isFirstMove && !isMoveThroughCenter(newMoveTiles)) {
    return i18n.t('game:errors.firstMoveCenter');
  }
  if (isAnyLetterLoose(newMoveTiles, boardFields)) {
    return i18n.t('game:errors.looseLetters');
  }
  if (!isFirstMove && isNewMoveLoose(newMoveTiles, boardFields)) {
    return i18n.t('game:errors.newMoveLoose');
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
      (alphabet.includes(getFieldLetter(boardFields, x - 1, y) as Letter) ||
        alphabet.includes(getFieldLetter(boardFields, x + 1, y) as Letter))
    ) {
      //Letter to the left or right present, form a new word
      let leftX = x;
      let rightX = x;
      let wordBoardFields = [boardFields[y][x]];

      while (
        alphabet.includes(getFieldLetter(boardFields, leftX - 1, y) as Letter)
      ) {
        leftX--;
        wordBoardFields.unshift(boardFields[y][leftX]);
      }
      while (
        alphabet.includes(getFieldLetter(boardFields, rightX + 1, y) as Letter)
      ) {
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
      (alphabet.includes(getFieldLetter(boardFields, x, y - 1) as Letter) ||
        alphabet.includes(getFieldLetter(boardFields, x, y + 1) as Letter))
    ) {
      //Letter above or below present, form a new word
      let upY = y;
      let downY = y;
      let wordBoardFields = [boardFields[y][x]];

      while (
        alphabet.includes(getFieldLetter(boardFields, x, upY - 1) as Letter)
      ) {
        upY--;
        wordBoardFields.unshift(boardFields[upY][x]);
      }
      while (
        alphabet.includes(getFieldLetter(boardFields, x, downY + 1) as Letter)
      ) {
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
