import parse5, { DefaultTreeNode } from 'parse5';

import { AppThunk } from 'src/redux/store';
import { api } from 'src/api';

import { selectWordSearchQuery } from './selectors';
import {
  fetchWordDataSucceeded,
  fetchWordDataFailed,
  fetchWordDataStarted,
} from './slice';

export const fetchWordData = (): AppThunk => async (dispatch, getState) => {
  dispatch(fetchWordDataStarted());

  const query = selectWordSearchQuery(getState());

  try {
    const wordPageString = await api.getWordDictionaryPage(query);

    const body = (parse5.parse(wordPageString) as any).childNodes[1]
      .childNodes[2];

    const isAllowed =
      body.childNodes
        .find((node: DefaultTreeNode) => node.nodeName === 'p')
        .childNodes[0].value.trim() === 'dopuszczalne w grach';

    dispatch(fetchWordDataSucceeded({ isAllowed, word: query }));
  } catch (error) {
    console.log(error);
    dispatch(fetchWordDataFailed());
  }
};
