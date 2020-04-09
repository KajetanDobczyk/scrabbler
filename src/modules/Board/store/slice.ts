import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { initialState } from './data';
import { ICoordinates, ICoordinatesWithLetter } from './interfaces';
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
    highlightBoardField(state, action: PayloadAction<ICoordinates>) {
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
    placeTile(state, action: PayloadAction<ICoordinatesWithLetter>) {
      const { x, y, letter } = action.payload;

      state.boardFields[y][x].letter = letter;
      state.tilesAmount[letter]--;
    },
    initNewWord(state, action: PayloadAction<ICoordinatesWithLetter>) {
      const { x, y, letter } = action.payload;

      state.newWord = {
        x,
        y,
        word: letter,
      };
    },
    addNewWordLetter(state, action: PayloadAction<ICoordinatesWithLetter>) {
      const { y, letter } = action.payload;
      const { newWord } = state;
      const direction =
        newWord.direction || y === newWord.y ? 'horizontal' : 'vertical';

      state.newWord = {
        ...newWord,
        direction,
        word: newWord.word + letter,
      };
    },
    setAllowedBoardFields(state, action: PayloadAction<ICoordinates>) {
      const { x, y } = action.payload;
      const { direction } = state.newWord;

      state.boardFields = direction
        ? state.boardFields.map((row, tileY) =>
            row.map((field, tileX) => ({
              ...field,
              isAllowed: direction === 'horizontal' ? y === tileY : x === tileX,
            })),
          )
        : state.boardFields.map((row, tileY) =>
            row.map((field, tileX) => ({
              ...field,
              isAllowed: y === tileY || x === tileX,
            })),
          );
    },
  },
});

export const {
  setLayout,
  setBoardFieldsCoordinates,
  highlightBoardField,
  cleanBoardHighlights,
  placeTile,
  initNewWord,
  addNewWordLetter,
  setAllowedBoardFields,
} = board.actions;

export * from './selectors';

export default board.reducer;
