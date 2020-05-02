import { IPlayers, PlayerId } from '../interfaces';

export type IPlayersState = {
  players: IPlayers;
  currentPlayerId: PlayerId;
};

export type IStartGamePayload = Partial<Record<PlayerId, string>>;
