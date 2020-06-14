import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'src/redux/rootReducer';

export const selectConfigState = (state: RootState) => state.game.config;

export const selectGameStatus = createSelector(
  selectConfigState,
  (configState) => configState.status,
);

export const selectGameView = createSelector(
  selectConfigState,
  (configState) => configState.view,
);
