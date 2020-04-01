import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'src/redux/rootReducer';

export const selectBoardState = (state: RootState) => state.board;

export const selectBoard = createSelector(
  selectBoardState,
  boardState => boardState.board,
);

export const selectCurrentPlayer = createSelector(
  selectBoardState,
  boardState => boardState.currentPlayer,
);

export const selectPlayedWords = createSelector(
  selectBoardState,
  boardState => boardState.playedWords,
);
