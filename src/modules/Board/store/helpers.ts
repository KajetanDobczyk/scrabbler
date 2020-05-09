import { Letter } from 'src/modules/Dictionary/interfaces';

import { IBoardFields, WordDirection } from '../interfaces';
import { ICoordinates } from './interfaces';

export const getFieldLetter = (
  boardFields: IBoardFields,
  x: number,
  y: number,
) => boardFields[y] && boardFields[y][x]?.letter;

export const findNextFreeBoardField = (
  boardFields: IBoardFields,
  target: ICoordinates,
  direction: WordDirection,
) => {
  let { x, y } = target;
  let nextLetter: Letter | '' | undefined = '';

  do {
    if (direction === 'h') {
      x++;
    } else {
      y++;
    }

    nextLetter = getFieldLetter(boardFields, x, y);
  } while (nextLetter !== undefined && nextLetter !== '');

  return nextLetter === '' ? { x, y } : undefined;
};
