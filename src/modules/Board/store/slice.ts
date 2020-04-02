import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IPlayerId } from 'src/modules/Players/interfaces';
import { Letter } from 'src/modules/Dictionary/interfaces';

import { initialState, initialNewWord } from './data';
import {
  BoardLoadedPayload,
  InsertWordPreparedPayload,
  InsertWordStartedPayload,
} from './interfaces';

const board = createSlice({
  name: 'board',
  initialState,
  reducers: {
    boardLoaded(state, action: PayloadAction<BoardLoadedPayload>) {
      state.layout = action.payload;
    },
    insertWordPrepared(
      state,
      action: PayloadAction<InsertWordPreparedPayload>,
    ) {
      state.newWord = {
        ...state.newWord,
        ...action.payload,
      };
    },
    insertWordStarted(state, action: PayloadAction<InsertWordStartedPayload>) {
      state.newWord = {
        ...action.payload,
        word: '',
      };
    },
    insertWordLetter(state, action: PayloadAction<Letter>) {
      if (state.newWord.word !== '') {
        state.newWord[state.newWord.direction === 'horizontal' ? 'x' : 'y']++;
      }

      const { x, y } = state.newWord;

      state.boardFields[y][x].letter = action.payload;
      state.newWord.word += action.payload;
    },
    insertWordFinished(state, action: PayloadAction<IPlayerId>) {
      state.wordsHistory.push({
        ...state.newWord,
        player: action.payload,
      });
      state.newWord = initialNewWord;
    },
  },
});

export const {
  boardLoaded,
  insertWordPrepared,
  insertWordStarted,
  insertWordLetter,
  insertWordFinished,
} = board.actions;

export * from './selectors';

export default board.reducer;
