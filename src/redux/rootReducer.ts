import { combineReducers } from '@reduxjs/toolkit';

import gameReducer from 'src/modules/Game/store/slice';
import dictionaryReducer from 'src/modules/Dictionary/store/slice';
import playersReducer from 'src/modules/Players/store/slice';
import settingsReducer from 'src/modules/Settings/store/slice';
import { IDictionaryState } from 'src/modules/Dictionary/store/interfaces';
import { ISettingsState } from 'src/modules/Settings/store/interfaces';
import { IConfigState } from 'src/modules/Game/store/config/interfaces';
import { IBoardState } from 'src/modules/Game/store/board/interfaces';
import { ICurrentPlayersState } from 'src/modules/Game/store/players/interfaces';
import { IPlayersState } from 'src/modules/Players/store/interfaces';

const rootReducer = combineReducers({
  game: gameReducer,
  dictionary: dictionaryReducer,
  players: playersReducer,
  settings: settingsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export type State = {
  game: {
    config: IConfigState;
    board: IBoardState;
    players: ICurrentPlayersState;
  };
  dictionary: IDictionaryState;
  players: IPlayersState;
  settings: ISettingsState;
};

export default rootReducer;
