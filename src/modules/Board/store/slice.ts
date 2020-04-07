import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Dimensions } from 'react-native';

import { initialState } from './data';
import { HighlightBoardFieldPayload } from './interfaces';
import { rowFieldsAmount } from '../data';
import { boardPadding } from '../containers/Board/styles';

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
      const { x, y } = action.payload;
      const { layout } = state;

      const tileX = Math.floor((x - layout.x) / layout.tileSize);
      const tileY = Math.floor((y - layout.y) / layout.tileSize);

      // Highlight board field
      if (tileX <= rowFieldsAmount - 1 && tileY <= rowFieldsAmount - 1) {
        state.boardFields[tileY][tileX].isHighlighted = true;

        // Clean highlights in fields around
        if (tileX > 0) {
          // Left
          state.boardFields[tileY][tileX - 1].isHighlighted = false;
        }
        if (tileX < rowFieldsAmount - 1) {
          // Right
          state.boardFields[tileY][tileX + 1].isHighlighted = false;
        }
        if (tileY > 0) {
          // Up
          state.boardFields[tileY - 1][tileX].isHighlighted = false;
        }
        if (tileY < rowFieldsAmount - 1) {
          // Down
          state.boardFields[tileY + 1][tileX].isHighlighted = false;
        }
      }
    },
  },
});

export const { initBoardLayout, higlightBoardField } = board.actions;

export * from './selectors';

export default board.reducer;
