import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Letter } from 'src/modules/Dictionary/interfaces';

import { initialState } from './data';
import { ICoordinatesWithLetter, ICoordinates } from './interfaces';
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
    highlightBoardField(state, action: PayloadAction<ICoordinates>) {
      const { x, y } = action.payload;

      state.boardFields[y][x].isHighlighted = true;
    },
    resetBoardFieldsHighlights(state) {
      state.boardFields = state.boardFields.map((row) =>
        row.map((field) => ({
          ...field,
          isHighlighted: false,
        })),
      );
    },
    setTilesListMeasurements(
      state,
      action: PayloadAction<SetTilesListMeasurementsPayload>,
    ) {
      const measurements = action.payload;

      (Object.keys(action.payload) as Letter[]).forEach((letter) => {
        state.tilesList[letter].measurements = measurements[letter];
      });
    },
    setDraggedTile(state, action: PayloadAction<IDraggedTile | null>) {
      state.draggedTile = action.payload;
    },
    placeTile(state, action: PayloadAction<ICoordinatesWithLetter>) {
      const { x, y, letter } = action.payload;

      state.newMove.push(action.payload);
      state.boardFields[y][x].letter = letter;
      state.tilesList[letter].amountLeft--;
    },
    acceptNewMove(state) {
      state.movesHistory.push({
        playerId: 0,
        tiles: state.newMove,
      });

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
  highlightBoardField,
  resetBoardFieldsHighlights,
  setTilesListMeasurements,
  setDraggedTile,
  placeTile,
  acceptNewMove,
  cancelNewMove,
} = board.actions;

export default board.reducer;
