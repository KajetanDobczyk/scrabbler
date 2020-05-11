import { IPlayers, PlayerId, IPlayedMove } from '../interfaces';

export type IPlayersState = {
  players: IPlayers;
  currentPlayerId: PlayerId;
  endingPlayerId?: PlayerId;
};

export type IStartGamePayload = Partial<Record<PlayerId, string>>;

export interface IAddPlayerMove {
  playerId: PlayerId;
  move: IPlayedMove;
}
