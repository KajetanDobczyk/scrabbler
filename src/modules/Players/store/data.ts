import { IPlayersState } from './interfaces';

export const initialState: IPlayersState = {
  // players: {},
  players: {
    '0': {
      name: 'qwe',
      moves: [
        {
          tiles: [
            {
              x: 7,
              y: 7,
              letter: 'c',
            },
            {
              x: 8,
              y: 7,
              letter: 'b',
            },
            {
              x: 9,
              y: 7,
              letter: 'ą',
            },
          ],
          words: [
            [
              {
                x: 0,
                y: 0,
                bonus: 'dw',
                letter: 'c',
              },
              {
                x: 0,
                y: 0,
                bonus: 0,
                letter: 'b',
              },
              {
                x: 0,
                y: 0,
                bonus: 0,
                letter: 'ą',
              },
            ],
          ],
        },
        {
          tiles: [
            {
              x: 8,
              y: 9,
              letter: 'c',
            },
            {
              x: 9,
              y: 9,
              letter: 'c',
            },
            {
              x: 10,
              y: 9,
              letter: 't',
            },
          ],
          words: [
            [
              {
                x: 0,
                y: 0,
                bonus: 0,
                letter: 'c',
              },
              {
                x: 0,
                y: 0,
                bonus: 'tl',
                letter: 'c',
              },
              {
                x: 0,
                y: 0,
                bonus: 0,
                letter: 't',
              },
            ],
            [
              {
                x: 0,
                y: 0,
                bonus: 0,
                letter: 'b',
              },
              {
                x: 0,
                y: 0,
                bonus: 'dl',
                letter: 'ł',
              },
              {
                x: 0,
                y: 0,
                bonus: 0,
                letter: 'c',
              },
            ],
            [
              {
                x: 0,
                y: 0,
                bonus: 0,
                letter: 'ą',
              },
              {
                x: 0,
                y: 0,
                bonus: 0,
                letter: 't',
              },
              {
                x: 0,
                y: 0,
                bonus: 'tl',
                letter: 'c',
              },
            ],
            [
              {
                x: 0,
                y: 0,
                bonus: 0,
                letter: 'k',
              },
              {
                x: 0,
                y: 0,
                bonus: 0,
                letter: 't',
              },
            ],
          ],
        },
      ],
      finalTiles: [],
    },
    '1': {
      name: 'asd',
      moves: [
        {
          tiles: [
            {
              x: 8,
              y: 8,
              letter: 'ł',
            },
            {
              x: 9,
              y: 8,
              letter: 't',
            },
            {
              x: 10,
              y: 8,
              letter: 'k',
            },
          ],
          words: [
            [
              {
                x: 0,
                y: 0,
                bonus: 'dl',
                letter: 'ł',
              },
              {
                x: 0,
                y: 0,
                bonus: 0,
                letter: 't',
              },
              {
                x: 0,
                y: 0,
                bonus: 0,
                letter: 'k',
              },
            ],
            [
              {
                x: 0,
                y: 0,
                bonus: 0,
                letter: 'b',
              },
              {
                x: 0,
                y: 0,
                bonus: 'dl',
                letter: 'ł',
              },
            ],
            [
              {
                x: 0,
                y: 0,
                bonus: 0,
                letter: 'ą',
              },
              {
                x: 0,
                y: 0,
                bonus: 0,
                letter: 't',
              },
            ],
          ],
        },
        {
          type: 'skipped',
          tiles: [],
          words: [],
        },
      ],
      finalTiles: [],
    },
  },
  currentPlayerId: '0',
};
