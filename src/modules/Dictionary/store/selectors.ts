import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'src/redux/rootReducer';

export const selectDictionaryState = (state: RootState) => state.dictionary;

export const selectWordSearchFetchStatus = createSelector(
  selectDictionaryState,
  (dictionaryState) => dictionaryState.wordSearch.status,
);

export const selectWordSearchQuery = createSelector(
  selectDictionaryState,
  (dictionaryState) => dictionaryState.wordSearch.query,
);

export const selectWordSearch = createSelector(
  selectDictionaryState,
  (dictionaryState) => dictionaryState.wordSearch.data,
);

export const selectSearchedWord = createSelector(
  selectWordSearch,
  (wordSearch) => wordSearch?.word,
);

export const selectIsWordAllowed = createSelector(
  selectWordSearch,
  (wordSearch) => !!wordSearch?.isAllowed,
);

export const selectWordDescription = createSelector(
  selectWordSearch,
  (wordSearch) => wordSearch?.description,
);
