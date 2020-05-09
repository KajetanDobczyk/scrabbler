import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { initialState } from './data';
import { ICoordinates, IAddNewMoveTilePayload } from './interfaces';
import { IBoardTile, WordDirection } from '../interfaces';

const board = createSlice({
  name: 'board',
  initialState,
  reducers: {
    startGame(state) {
      state.gameStatus = 'inProgress';
    },
    setNewMoveTarget(state, action: PayloadAction<ICoordinates>) {
      const { x, y } = action.payload;

      state.newMove.target = { x, y };
    },
    resetNewMoveTarget(state) {
      state.newMove.target = undefined;
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

      const oldLetter = state.boardFields[y][x].letter;

      if (oldLetter !== '') {
        state.tilesList[oldLetter].amountLeft++;
      }

      state.boardFields[y][x].letter = letter;
      state.boardFields[y][x].blankLetter = blankLetter;
      state.tilesList[letter].amountLeft--;
    },
    cancelNewMove(state) {
      state.newMove.tiles.forEach(({ x, y, letter }) => {
        state.boardFields[y][x].letter = '';
        state.tilesList[letter].amountLeft++;
      });

      state.newMove = {
        direction: 'h',
        tiles: [],
      };
    },
    resetNewMove(state) {
      state.newMove = {
        direction: 'h',
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
  setNewMoveTarget,
  resetNewMoveTarget,
  setNewMoveDirection,
  addNewMoveTile,
  cancelNewMove,
  resetNewMove,
  removeBoardTiles,
} = board.actions;

export default board.reducer;
