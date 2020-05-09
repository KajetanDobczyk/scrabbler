import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'src/redux/rootReducer';

export const selectBoardState = (state: RootState) => state.board;

export const selectGameStatus = createSelector(
  selectBoardState,
  (boardState) => boardState.gameStatus,
);

export const selectBoardFields = createSelector(
  selectBoardState,
  (boardState) => boardState.boardFields,
);

export const selectTilesList = createSelector(
  selectBoardState,
  (boardState) => boardState.tilesList,
);

export const selectNewMove = createSelector(
  selectBoardState,
  (boardState) => boardState.newMove,
);
