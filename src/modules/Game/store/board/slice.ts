import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IBoardTile, ICoordinates } from '../../interfaces';
import { IAddNewMoveTilePayload } from './interfaces';
import { initialState } from './data';

const board = createSlice({
  name: 'board',
  initialState,
  reducers: {
    removeBoardTiles(state, action: PayloadAction<IBoardTile[]>) {
      action.payload.forEach(({ x, y, letter }) => {
        state.boardFields[y][x].letter = null;
        state.tilesList[letter].amountLeft++;
      });
    },
    setNewMoveTarget(state, action: PayloadAction<ICoordinates>) {
      const { x, y } = action.payload;
      const oldTarget = state.newMove.target;

      state.newMove.target = { x, y };

      if (oldTarget?.x === x) {
        state.newMove.direction = 'v';
      }
    },
    resetNewMoveTarget(state) {
      state.newMove.target = undefined;
    },
    changeNewMoveDirection(state) {
      state.newMove.direction = state.newMove.direction === 'h' ? 'v' : 'h';
    },
    addNewMoveTile(state, action: PayloadAction<IAddNewMoveTilePayload>) {
      const { x, y, letter, blankLetter } = action.payload;

      const previousBoardFieldTile = state.newMove.tiles.find(
        (tile) => tile.x === x && tile.y === y,
      );

      if (previousBoardFieldTile) {
        // Tile already exists on this spot, swap it
        state.newMove.tiles = state.newMove.tiles.map((tile) =>
          tile.x === x && tile.y === y
            ? {
                x,
                y,
                letter,
                blankLetter,
              }
            : tile,
        );

        state.tilesList[previousBoardFieldTile.letter].amountLeft++;
      } else {
        state.newMove.tiles.push({
          x,
          y,
          letter,
          blankLetter,
        });
      }

      state.boardFields[y][x].letter = letter;
      state.boardFields[y][x].blankLetter = blankLetter;
      state.tilesList[letter].amountLeft--;
    },
    removeLastNewMoveTile(state) {
      const lastTile = state.newMove.tiles.pop();

      if (lastTile) {
        state.boardFields[lastTile.y][lastTile.x].letter = null;
        state.boardFields[lastTile.y][lastTile.x].blankLetter = undefined;

        state.tilesList[lastTile.letter].amountLeft++;
      }
    },
    cancelNewMove(state) {
      state.newMove.tiles.forEach(({ x, y, letter }) => {
        state.boardFields[y][x].letter = null;
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
  },
});

export const {
  removeBoardTiles,
  setNewMoveTarget,
  resetNewMoveTarget,
  changeNewMoveDirection,
  addNewMoveTile,
  removeLastNewMoveTile,
  cancelNewMove,
  resetNewMove,
} = board.actions;

export default board.reducer;
