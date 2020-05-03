import { IDictionaryState } from './interfaces';

export const initialState: IDictionaryState = {
  wordSearch: {
    query: '',
    status: 'idle',
    data: null,
  },
};
