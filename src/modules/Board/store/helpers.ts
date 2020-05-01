import range from 'lodash/range';

import { tilesPoints } from 'src/modules/Tiles/data';
import { Letter } from 'src/modules/Dictionary/interfaces';

import {
  IBoardTile,
  IBoardFields,
  WordDirection,
  IPlayedWord,
} from '../interfaces';

export const getFieldLetter = (
  boardFields: IBoardFields,
  x: number,
  y: number,
) => (boardFields[y] && boardFields[y][x]?.letter) || '';

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

export const validateNewMove = (
  boardFields: IBoardFields,
  newMove: IBoardTile[],
  isFirstMove: boolean,
) => {
  if (isFirstMove && newMove.length === 1) {
    return 'Pierwszy ruch musi tworzyć wyraz!';
  }
  if (isFirstMove && !isMoveThroughCenter(newMove)) {
    return 'Pierwszy ruch musi przechodzić przez środek!';
  }
  if (isAnyLetterLoose(newMove, boardFields)) {
    return 'Nie wszystkie litery przylegają do innych!';
  }
  if (areLettersUnalligned(newMove)) {
    return 'Nowe litery nie są w jednej linii!';
  }
};

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

  const moveToNextLetter = direction === 'h' ? () => x++ : () => y++;

  range(word.length).map((i) => {
    const newMoveTile = newMove.find((tile) => tile.x === x && tile.y === y);

    const tilePoints =
      newMoveTile && newMoveTile.letter === '?'
        ? 0
        : tilesPoints[word[i] as Letter];
    const fieldBonus = !!newMoveTile && boardFields[y][x].bonus;

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

export const getNewHorizontalMoves = (
  boardFields: IBoardFields,
  newMove: IBoardTile[],
): IPlayedWord[] => {
  let alreadyUsedH = false;

  return newMove.reduce((acc, { x, y, letter, blankLetter }) => {
    if (
      !alreadyUsedH &&
      (getFieldLetter(boardFields, x - 1, y) !== '' ||
        getFieldLetter(boardFields, x + 1, y) !== '')
    ) {
      //Letter to the left or right present, form a new word
      let leftX = x;
      let rightX = x;
      let word: string = blankLetter || letter;

      while (getFieldLetter(boardFields, leftX - 1, y) !== '') {
        leftX--;
        word = `${
          boardFields[y][leftX].blankLetter || boardFields[y][leftX].letter
        }${word}`;
      }
      while (getFieldLetter(boardFields, rightX + 1, y) !== '') {
        rightX++;
        word = `${word}${
          boardFields[y][rightX].blankLetter || boardFields[y][rightX].letter
        }`;
      }

      // Check if new move is horizontal, if so, don't check for new horizontal words
      alreadyUsedH = newMove.every((tile) => tile.y === newMove[0].y);

      return [
        ...acc,
        {
          x: leftX,
          y,
          word,
          direction: 'h',
          points: countWordPoints(boardFields, newMove, leftX, y, word, 'h'),
        },
      ];
    } else {
      return acc;
    }
  }, [] as IPlayedWord[]);
};

export const getNewVerticalMoves = (
  boardFields: IBoardFields,
  newMove: IBoardTile[],
): IPlayedWord[] => {
  let alreadyUsedV = false;

  return newMove.reduce((acc, { x, y, letter, blankLetter }) => {
    if (
      !alreadyUsedV &&
      (getFieldLetter(boardFields, x, y - 1) !== '' ||
        getFieldLetter(boardFields, x, y + 1) !== '')
    ) {
      //Letter above or below present, form a new word
      let upY = y;
      let downY = y;
      let word: string = blankLetter || letter;

      while (getFieldLetter(boardFields, x, upY - 1) !== '') {
        upY--;
        word = `${
          boardFields[upY][x].blankLetter || boardFields[upY][x].letter
        }${word}`;
      }
      while (getFieldLetter(boardFields, x, downY + 1) !== '') {
        downY++;
        word = `${word}${
          boardFields[downY][x].blankLetter || boardFields[downY][x].letter
        }`;
      }

      // Check if new move is vertical, if so, don't check for new vertical words
      alreadyUsedV = newMove.every((tile) => tile.x === newMove[0].x);

      return [
        ...acc,
        {
          x,
          y: upY,
          word,
          direction: 'v',
          points: countWordPoints(boardFields, newMove, x, upY, word, 'v'),
        },
      ];
    } else {
      return acc;
    }
  }, [] as IPlayedWord[]);
};
