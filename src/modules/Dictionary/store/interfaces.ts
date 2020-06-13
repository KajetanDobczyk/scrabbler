import { FetchStatus } from 'src/api/interfaces';

import { IWordSearch } from '../interfaces';

export interface IDictionaryState {
  wordSearch: {
    query: string;
    status: FetchStatus;
    data: IWordSearch | null;
  };
}
