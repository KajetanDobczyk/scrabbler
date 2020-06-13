import {
  IBoardTile,
  IBoardFields,
  IBoardField,
} from 'src/modules/Game/interfaces';
import { getFieldLetter } from 'src/modules/Game/store/helpers';
import { Letter } from 'src/modules/Dictionary/interfaces';
import { alphabet } from 'src/modules/Dictionary/data';

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
    return 'Pierwszy ruch musi tworzyć wyraz!';
  }
  if (isFirstMove && !isMoveThroughCenter(newMoveTiles)) {
    return 'Pierwszy ruch musi przechodzić przez środek!';
  }
  if (isAnyLetterLoose(newMoveTiles, boardFields)) {
    return 'Nie wszystkie litery przylegają do innych!';
  }
  if (!isFirstMove && isNewMoveLoose(newMoveTiles, boardFields)) {
    return 'Nowy wyraz nie przylega do obecnych!';
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
