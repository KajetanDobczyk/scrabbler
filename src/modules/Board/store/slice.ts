import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Dimensions } from 'react-native';

import { initialState } from './data';
import { HighlightBoardFieldPayload, PlaceTilePayload } from './interfaces';
import { rowFieldsAmount } from '../data';
import { boardPadding } from '../containers/Board/styles';
import { IBoardFields } from '../interfaces';

const _cleanBoardHighlights = (boardFields: IBoardFields) =>
  boardFields.map((row) =>
    row.map((field) => ({
      ...field,
      isHighlighted: false,
    })),
  );

const board = createSlice({
  name: 'board',
  initialState,
  reducers: {
    initBoardLayout(state) {
      const screenWidth = Dimensions.get('window').width;
      const size = screenWidth - 2 * boardPadding;

      const tileSize = Math.round((size / rowFieldsAmount) * 100) / 100;

      state.layout = {
        x: boardPadding,
        y: boardPadding,
        size: Math.round(size * 100) / 100,
        tileSize,
      };

      // Save tiles coordinates
      state.boardFields = state.boardFields.map((row, fieldY) =>
        row.map((field, fieldX) => ({
          ...field,
          x: boardPadding + fieldX * tileSize,
          y: boardPadding + fieldY * tileSize,
        })),
      );
    },
    higlightBoardField(
      state,
      action: PayloadAction<HighlightBoardFieldPayload>,
    ) {
      const { x, y, highlight } = action.payload;
      const { layout } = state;

      const tileX = Math.floor((x - layout.x) / layout.tileSize);
      const tileY = Math.floor((y - layout.y) / layout.tileSize);

      // Highlight board field
      if (tileX <= rowFieldsAmount - 1 && tileY <= rowFieldsAmount - 1) {
        // Clean the board highlights if new field is being highlighted
        if (!state.boardFields[tileY][tileX].isHighlighted) {
          state.boardFields = _cleanBoardHighlights(state.boardFields);
        }

        state.boardFields[tileY][tileX].isHighlighted = highlight;
      }
    },
    cleanBoardHighlights(state) {
      state.boardFields = _cleanBoardHighlights(state.boardFields);
    },
    placeTile(state, action: PayloadAction<PlaceTilePayload>) {
      const { x, y, letter } = action.payload;
      const { layout } = state;

      const tileX = Math.floor((x - layout.x) / layout.tileSize);
      const tileY = Math.floor((y - layout.y) / layout.tileSize);

      if (tileX <= rowFieldsAmount - 1 && tileY <= rowFieldsAmount - 1) {
        state.boardFields[tileY][tileX].letter = letter;
      }
    },
  },
});

export const {
  initBoardLayout,
  higlightBoardField,
  cleanBoardHighlights,
  placeTile,
} = board.actions;

export * from './selectors';

export default board.reducer;
