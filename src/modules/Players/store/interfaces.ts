import { FetchStatus } from 'src/api/interfaces';

export interface IPlayersState {
  user: {
    status: FetchStatus;
    data: ILoggedPlayer | null;
    token: string | null;
  };
}

export interface ILoggedPlayer {
  name: string;
  id: string;
  photoUrl: string;
}

export interface ILoginSucceededPayload {
  data: ILoggedPlayer;
  token: string;
}
