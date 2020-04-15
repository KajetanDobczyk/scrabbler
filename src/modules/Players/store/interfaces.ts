import { IPlayers, PlayerId } from '../interfaces';

export type IPlayersState = {
  players: IPlayers;
  currentPlayerId: PlayerId;
};
