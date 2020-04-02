import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { initialState, initialNewWord } from './data';
import {
  BoardLoadedPayload,
  InsertWordPayload,
  InsertWordLetterPayload,
} from './interfaces';
import { rowFieldsAmount } from '../data';

const board = createSlice({
  name: 'board',
  initialState,
  reducers: {
    boardLayoutLoaded(state, action: PayloadAction<BoardLoadedPayload>) {
      const { x, y, size } = action.payload;

      state.layout = {
        x,
        y,
        size: Math.round(size * 100) / 100,
        tileSize: Math.round((size / rowFieldsAmount) * 100) / 100,
      };
    },
    insertWordPrepared(state, action: PayloadAction<InsertWordPayload>) {
      state.newWord = {
        ...state.newWord,
        ...action.payload,
      };
    },
    insertWordStarted(state, action: PayloadAction<InsertWordPayload>) {
      const { x, y } = action.payload;
      const { newWord } = state;

      const direction = x > newWord.x ? 'horizontal' : 'vertical';

      state.newWord = {
        ...newWord,
        direction,
        targetLength:
          direction === 'horizontal' ? x - newWord.x + 1 : y - newWord.y + 1,
      };
    },
    insertWordLetter(state, action: PayloadAction<InsertWordLetterPayload>) {
      const { letter, playerId } = action.payload;
      const { x, y, direction, targetLength } = state.newWord;

      state.newWord.word += letter;

      const wordLength = state.newWord.word.length;

      const letterCoordinates = {
        x: direction === 'horizontal' ? x + wordLength - 1 : x,
        y: direction === 'vertical' ? y + wordLength - 1 : y,
      };

      state.boardFields[letterCoordinates.y][
        letterCoordinates.x
      ].letter = letter;

      if (wordLength === targetLength) {
        state.wordsHistory.push({
          playerId,
          x,
          y,
          direction,
          word: state.newWord.word,
        });
        state.newWord = initialNewWord;
      }
    },
  },
});

export const {
  boardLayoutLoaded,
  insertWordPrepared,
  insertWordStarted,
  insertWordLetter,
} = board.actions;

export * from './selectors';

export default board.reducer;
