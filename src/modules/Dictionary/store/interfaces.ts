import { FetchStatus } from 'src/interfaces';

export type IDictionaryState = {
  search: {
    query: string;
    status: FetchStatus;
    data: any | null;
  };
};
