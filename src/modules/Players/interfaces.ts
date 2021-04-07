export enum PlayersScreen {
  Login = 'Login',
}

export type PlayersTabParamList = Record<PlayersScreen, any>;

export type PlayerId = '0' | '1' | '2' | '3';

export type IPlayersNames = Partial<Record<PlayerId, string>>;
