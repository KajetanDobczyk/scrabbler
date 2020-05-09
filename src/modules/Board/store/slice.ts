import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { initialState } from './data';
import { ICoordinates, IAddNewMoveTilePayload } from './interfaces';
import { boardPadding } from '../containers/Board/styles';
import { IBoardLayout, IBoardTile, WordDirection } from '../interfaces';

const board = createSlice({
  name: 'board',
  initialState,
  reducers: {
    startGame(state) {
      state.gameStatus = 'inProgress';
    },
    initBoardLayout(state, action: PayloadAction<IBoardLayout>) {
      state.layout = action.payload;

      const { tileSize } = action.payload;

      state.boardFields = state.boardFields.map((row, y) =>
        row.map((field, x) => ({
          ...field,
          x: boardPadding + x * tileSize,
          y: boardPadding + y * tileSize,
        })),
      );
    },
    setNewMoveTarget(state, action: PayloadAction<ICoordinates>) {
      const { x, y } = action.payload;
      const oldTarget = state.newMove.target;

      if (oldTarget) {
        state.boardFields[oldTarget.y][oldTarget.x].isHighlighted = false;
      }

      state.newMove.target = { x, y };
      state.boardFields[y][x].isHighlighted = true;
    },
    setNewMoveDirection(state, action: PayloadAction<WordDirection>) {
      state.newMove.direction = action.payload;
    },
    addNewMoveTile(state, action: PayloadAction<IAddNewMoveTilePayload>) {
      const { x, y, letter, blankLetter } = action.payload;

      state.newMove.tiles.push({
        x,
        y,
        letter,
        blankLetter,
      });

      state.boardFields[y][x].letter = letter;
      state.boardFields[y][x].blankLetter = blankLetter;
      state.tilesList[letter].amountLeft--;
    },
    removeNewMoveTile(state, action: PayloadAction<ICoordinates>) {
      const { x, y } = action.payload;
      const { letter } = state.boardFields[y][x];

      if (letter !== '') {
        state.tilesList[letter].amountLeft++;
      }

      state.boardFields[y][x].letter = '';
      state.boardFields[y][x].blankLetter = undefined;
      state.newMove.tiles = state.newMove.tiles.filter(
        (tile) => tile.x !== x || tile.y !== y,
      );
    },
    resetNewMove(state) {
      state.newMove = {
        tiles: [],
      };
    },
    cancelNewMove(state) {
      state.newMove.tiles.forEach(({ x, y, letter }) => {
        state.boardFields[y][x].letter = '';
        state.tilesList[letter].amountLeft++;
      });

      state.newMove = {
        tiles: [],
      };
    },
    removeBoardTiles(state, action: PayloadAction<IBoardTile[]>) {
      action.payload.forEach(({ x, y, letter }) => {
        state.boardFields[y][x].letter = '';
        state.tilesList[letter].amountLeft++;
      });
    },
  },
});

export const {
  startGame,
  initBoardLayout,
  setNewMoveTarget,
  setNewMoveDirection,
  addNewMoveTile,
  removeNewMoveTile,
  resetNewMove,
  cancelNewMove,
  removeBoardTiles,
} = board.actions;

export default board.reducer;
