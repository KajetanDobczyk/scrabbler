import { createSlice } from '@reduxjs/toolkit';

import { emptyBoard } from 'src/config/board';
import { IBoard } from 'src/interfaces';

type IBoardState = {
  board: IBoard;
};

const initialState: IBoardState = {
  board: emptyBoard,
};

const board = createSlice({
  name: 'board',
  initialState,
  reducers: {},
});

export * from './selectors';

export default board.reducer;
