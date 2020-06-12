import { Letter } from 'src/modules/Dictionary/interfaces';

import { IBoardFields, WordDirection, INewMove } from '../interfaces';
import { ICoordinates } from './interfaces';

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
