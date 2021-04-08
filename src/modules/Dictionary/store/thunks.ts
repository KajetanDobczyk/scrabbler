import { AppThunk } from 'src/redux/store';
import { api } from 'src/api';

import { selectWordSearchQuery } from './selectors';
import {
  fetchWordDataSucceeded,
  fetchWordDataFailed,
  fetchWordDataStarted,
} from './slice';
import { parseWordPage } from './helpers';

export const fetchWordData = (): AppThunk => async (dispatch, getState) => {
  dispatch(fetchWordDataStarted());

  const query = selectWordSearchQuery(getState());

  try {
    const wordPage = await api.dictionary.getWordDictionaryPage(query);

    dispatch(
      fetchWordDataSucceeded({ word: query, ...parseWordPage(wordPage) }),
    );
  } catch (error) {
    dispatch(fetchWordDataFailed());
  }
};
