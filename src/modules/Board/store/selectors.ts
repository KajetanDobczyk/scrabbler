import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'src/redux/rootReducer';

export const selectBoardState = (state: RootState) => state.board;

export const selectBoardFields = createSelector(
  selectBoardState,
  (boardState) => boardState.boardFields,
);

export const selectTilesAmount = createSelector(
  selectBoardState,
  (boardState) => boardState.tilesAmount,
);

export const selectBoardLayout = createSelector(
  selectBoardState,
  (boardState) => boardState.layout,
);

export const selectNewWord = createSelector(
  selectBoardState,
  (boardState) => boardState.newWord,
);

export const selectBoardLayout = createSelector(
  selectBoardState,
  boardState => boardState.layout,
);

export const selectNewWord = createSelector(
  selectBoardState,
  boardState => boardState.newWord,
);

export const selectWordsHistory = createSelector(
  selectBoardState,
  (boardState) => boardState.wordsHistory,
);
