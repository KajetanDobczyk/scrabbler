import { PlayerId } from 'src/modules/Players/interfaces';

import { ICurrentPlayers, IPlayedMove } from '../../interfaces';

export type ICurrentPlayersState = {
  players: ICurrentPlayers;
  currentPlayerId: PlayerId;
  endingPlayerId?: PlayerId;
};

export type IStartGamePayload = Partial<Record<PlayerId, string>>;

export interface IAddPlayerMove {
  playerId: PlayerId;
  move: IPlayedMove;
}
