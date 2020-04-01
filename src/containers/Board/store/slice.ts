import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { emptyBoard } from 'src/config/board';
import { IBoard, IPlayedWord, IPlayerNumber, Letter } from 'src/interfaces';

type IBoardState = {
  board: IBoard;
  currentPlayer: IPlayerNumber;
  playedWords: IPlayedWord[];
};

const initialState: IBoardState = {
  board: emptyBoard,
  currentPlayer: 0,
  playedWords: [],
};

type InsertLetterPayload = {
  letter: Letter;
  x: number;
  y: number;
};

const board = createSlice({
  name: 'board',
  initialState,
  reducers: {
    changeCurrentPlayer(state, action: PayloadAction<IPlayerNumber>) {
      state.currentPlayer = action.payload;
    },
    insertLetter(state, action: PayloadAction<InsertLetterPayload>) {
      const { x, y, letter } = action.payload;

      state.board[y][x] = letter;
    },
    insertWord(state, action: PayloadAction<IPlayedWord>) {
      state.playedWords.push(action.payload);
    },
  },
});

export const { changeCurrentPlayer, insertLetter, insertWord } = board.actions;

export * from './selectors';

export default board.reducer;
