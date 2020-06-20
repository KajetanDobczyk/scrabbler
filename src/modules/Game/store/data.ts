import { Letter } from 'src/modules/Dictionary/interfaces';
import { initialTilesAmount } from 'src/modules/Dictionary/data';

import { IBoardFields, FieldBonus, ITilesList } from '../interfaces';

export const fieldsBonuses: FieldBonus[][] = [
  ['tw', 0, 0, 'dl', 0, 0, 0, 'tw', 0, 0, 0, 'dl', 0, 0, 'tw'],
  [0, 'dw', 0, 0, 0, 'tl', 0, 0, 0, 'tl', 0, 0, 0, 'dw', 0],
  [0, 0, 'dw', 0, 0, 0, 'dl', 0, 'dl', 0, 0, 0, 'dw', 0, 0],
  ['dl', 0, 0, 'dw', 0, 0, 0, 'dl', 0, 0, 0, 'dw', 0, 0, 'dl'],
  [0, 0, 0, 0, 'dw', 0, 0, 0, 0, 0, 'dw', 0, 0, 0, 0],
  [0, 'tl', 0, 0, 0, 'tl', 0, 0, 0, 'tl', 0, 0, 0, 'tl', 0],
  [0, 0, 'dl', 0, 0, 0, 'dl', 0, 'dl', 0, 0, 0, 'dl', 0, 0],
  ['tw', 0, 0, 'dl', 0, 0, 0, 'dw', 0, 0, 0, 'dl', 0, 0, 'tw'],
  [0, 0, 'dl', 0, 0, 0, 'dl', 0, 'dl', 0, 0, 0, 'dl', 0, 0],
  [0, 'tl', 0, 0, 0, 'tl', 0, 0, 0, 'tl', 0, 0, 0, 'tl', 0],
  [0, 0, 0, 0, 'dw', 0, 0, 0, 0, 0, 'dw', 0, 0, 0, 0],
  ['dl', 0, 0, 'dw', 0, 0, 0, 'dl', 0, 0, 0, 'dw', 0, 0, 'dl'],
  [0, 0, 'dw', 0, 0, 0, 'dl', 0, 'dl', 0, 0, 0, 'dw', 0, 0],
  [0, 'dw', 0, 0, 0, 'tl', 0, 0, 0, 'tl', 0, 0, 0, 'dw', 0],
  ['tw', 0, 0, 'dl', 0, 0, 0, 'tw', 0, 0, 0, 'dl', 0, 0, 'tw'],
];

export const getInitialBoardFields: () => IBoardFields = () =>
  fieldsBonuses.map((row) =>
    row.map((bonus) => ({
      x: 0,
      y: 0,
      bonus,
      letter: null,
    })),
  );

export const initialLayout = {
  x: 0,
  y: 0,
  size: 0,
  tileSize: 0,
};

const getInitialTilesList: () => ITilesList = () =>
  (Object.keys(initialTilesAmount) as Letter[]).reduce(
    (acc, letter) => ({
      ...acc,
      [letter]: {
        amountLeft: initialTilesAmount[letter],
      },
    }),
    {} as ITilesList,
  );

export const initialState: any = {
  //TODO: Add type
  status: 'idle',
  view: 'points',
  boardFields: getInitialBoardFields(),
  tilesList: getInitialTilesList(),
  newMove: {
    direction: 'h',
    tiles: [],
  },
};
