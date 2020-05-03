import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'src/redux/rootReducer';

export const selectDictionaryState = (state: RootState) => state.dictionary;

export const selectSearch = createSelector(
  selectDictionaryState,
  (dictionaryState) => dictionaryState.search,
);

export const selectSearchQuery = createSelector(
  selectSearch,
  (search) => search.query,
);
