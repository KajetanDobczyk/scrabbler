import { IDictionaryState } from './interfaces';

export const initialState: IDictionaryState = {
  search: {
    query: '',
    status: 'idle',
    data: null,
  },
};
