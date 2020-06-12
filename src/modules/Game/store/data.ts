import { Letter } from 'src/modules/Dictionary/interfaces';
import { ITilesList } from 'src/modules/Tiles/interfaces';

import { IBoardFields, FieldBonus } from '../interfaces';
import { IGameState } from './interfaces';

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

export const initialTilesAmount: Record<Letter, number> = {
  ['?']: 2,
  ['a']: 9,
  ['ą']: 1,
  ['b']: 2,
  ['c']: 3,
  ['ć']: 1,
  ['d']: 3,
  ['e']: 7,
  ['ę']: 1,
  ['f']: 1,
  ['g']: 2,
  ['h']: 2,
  ['i']: 8,
  ['j']: 2,
  ['k']: 3,
  ['l']: 3,
  ['ł']: 2,
  ['m']: 3,
  ['n']: 5,
  ['ń']: 1,
  ['o']: 6,
  ['ó']: 1,
  ['p']: 3,
  ['r']: 4,
  ['s']: 4,
  ['ś']: 1,
  ['t']: 3,
  ['u']: 2,
  ['w']: 4,
  ['y']: 4,
  ['z']: 5,
  ['ż']: 1,
  ['ź']: 1,
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

export const initialState: IGameState = {
  status: 'idle',
  view: 'points',
  boardFields: getInitialBoardFields(),
  tilesList: getInitialTilesList(),
  newMove: {
    direction: 'h',
    tiles: [],
  },
};
