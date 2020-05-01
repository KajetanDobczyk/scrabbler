import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import isEmpty from 'lodash/isEmpty';

import { Letter } from 'src/modules/Dictionary/interfaces';

import { initialState } from './data';
import { ICoordinates, IAddNewMoveTilePayload } from './interfaces';
import { boardPadding } from '../containers/Board/styles';
import {
  IBoardLayout,
  IDraggedTile,
  SetTilesListMeasurementsPayload,
} from '../interfaces';

const board = createSlice({
  name: 'board',
  initialState,
  reducers: {
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
    setTilesListMeasurements(
      state,
      action: PayloadAction<SetTilesListMeasurementsPayload>,
    ) {
      const measurements = action.payload;

      (Object.keys(state.tilesList) as Letter[]).forEach((letter) => {
        if (isEmpty(measurements[letter])) {
          state.tilesList[letter].measurements = undefined;
        } else {
          state.tilesList[letter].measurements = measurements[letter];
        }
      });
    },
    setDraggedTile(state, action: PayloadAction<IDraggedTile | null>) {
      state.draggedTile = action.payload;
    },
    addNewMoveTile(state, action: PayloadAction<IAddNewMoveTilePayload>) {
      const { x, y, blankLetter } = action.payload;
      const { letter } = state.draggedTile!;

      state.newMove.push({
        x,
        y,
        letter,
      });

      state.boardFields[y][x].blankLetter = blankLetter;
      state.boardFields[y][x].letter = letter;
      state.tilesList[letter].amountLeft--;
    },
    removeNewMoveTile(state, action: PayloadAction<ICoordinates>) {
      const { x, y } = action.payload;
      const { letter } = state.boardFields[y][x];

      if (letter !== '') {
        state.tilesList[letter].amountLeft++;
      }

      state.boardFields[y][x].letter = '';
      state.newMove = state.newMove.filter(
        (tile) => tile.x !== x || tile.y !== y,
      );
    },
    resetNewMove(state) {
      state.newMove = [];
    },
    cancelNewMove(state) {
      state.newMove.forEach((move) => {
        state.boardFields[move.y][move.x].letter = '';
        state.tilesList[move.letter].amountLeft++;
      });

      state.newMove = [];
    },
  },
});

export const {
  initBoardLayout,
  setTilesListMeasurements,
  setDraggedTile,
  addNewMoveTile,
  removeNewMoveTile,
  resetNewMove,
  cancelNewMove,
} = board.actions;

export default board.reducer;
