import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { initialState } from './data';
import { HighlightBoardFieldPayload, PlaceTilePayload } from './interfaces';
import { rowFieldsAmount } from '../data';
import { boardPadding } from '../containers/Board/styles';
import { IBoardLayout } from '../interfaces';

const board = createSlice({
  name: 'board',
  initialState,
  reducers: {
    setLayout(state, action: PayloadAction<IBoardLayout>) {
      state.layout = action.payload;
    },
    setBoardFieldsCoordinates(state, action: PayloadAction<number>) {
      const tileSize = action.payload;

      state.boardFields = state.boardFields.map((row, fieldY) =>
        row.map((field, fieldX) => ({
          ...field,
          x: boardPadding + fieldX * tileSize,
          y: boardPadding + fieldY * tileSize,
        })),
      );
    },
    highlightBoardField(
      state,
      action: PayloadAction<HighlightBoardFieldPayload>,
    ) {
      const { x, y } = action.payload;

      state.boardFields[y][x].isHighlighted = true;
    },
    cleanBoardHighlights(state) {
      state.boardFields = state.boardFields.map((row) =>
        row.map((field) => ({
          ...field,
          isHighlighted: false,
        })),
      );
    },
    placeTile(state, action: PayloadAction<PlaceTilePayload>) {
      const { x, y, letter } = action.payload;
      const { layout } = state;

      if (state.newWord.word.length === 7) {
        return;
      }

      const tileX = Math.floor((x - layout.x) / layout.tileSize);
      const tileY = Math.floor((y - layout.y) / layout.tileSize);
      const boardField = state.boardFields[tileY][tileX];

      if (!boardField.isAllowed || boardField.letter !== '') {
        return;
      }

      // Place letter in correct place
      if (tileX <= rowFieldsAmount - 1 && tileY <= rowFieldsAmount - 1) {
        state.boardFields[tileY][tileX].letter = letter;
      }

      // Remove tile from tiles list
      state.tilesAmount[letter]--;

      //Handle new word being added
      const { newWord } = state;

      if (newWord.word === '') {
        state.newWord = {
          x: tileX,
          y: tileY,
          word: letter,
        };

        //Set isAllowed to true to column and line
        state.boardFields = state.boardFields.map((row, y) =>
          row.map((field, x) => ({
            ...field,
            isAllowed: y === tileY || x === tileX,
          })),
        );
      } else {
        const direction = tileY === newWord.y ? 'horizontal' : 'vertical';

        state.newWord = {
          ...state.newWord,
          direction,
          word: newWord.word + letter,
        };

        //Set isAllowed to true to direction
        state.boardFields = state.boardFields.map((row, y) =>
          row.map((field, x) => ({
            ...field,
            isAllowed: direction === 'horizontal' ? y === tileY : x === tileX,
          })),
        );
      }
    },
  },
});

export const {
  setLayout,
  setBoardFieldsCoordinates,
  highlightBoardField,
  cleanBoardHighlights,
  placeTile,
} = board.actions;

export * from './selectors';

export default board.reducer;
