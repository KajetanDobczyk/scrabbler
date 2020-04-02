import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { emptyBoard } from 'src/modules/Board/config';
import { IPlayerId } from 'src/modules/Players/interfaces';
import { Letter } from 'src/modules/Dictionary/interfaces';

import {
  IBoardLetters,
  INewWord,
  IPlayedWord,
  WordDirection,
} from '../interfaces';

type IBoardState = {
  letters: IBoardLetters;
  layout: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
  newWord: INewWord;
  wordsHistory: IPlayedWord[];
};

const initialNewWord: INewWord = {
  x: 0,
  y: 0,
  direction: 'horizontal',
  word: '',
  length: 0,
};

const initialState: IBoardState = {
  letters: emptyBoard,
  layout: {
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  },
  newWord: initialNewWord,
  wordsHistory: [],
};

type BoardLoadedPayload = {
  x: number;
  y: number;
  width: number;
  height: number;
};

type InsertWordPreparedPayload = {
  x: number;
  y: number;
};

type InsertWordStartedPayload = {
  x: number;
  y: number;
  direction: WordDirection;
  length: number;
};

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

      state.letters[y][x] = action.payload;
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
