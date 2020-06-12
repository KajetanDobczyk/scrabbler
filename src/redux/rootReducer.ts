import { combineReducers } from '@reduxjs/toolkit';

import gameReducer from 'src/modules/Game/store/slice';
import playersReducer from 'src/modules/Players/store/slice';
import dictionaryReducer from 'src/modules/Dictionary/store/slice';
import settingsReducer from 'src/modules/Settings/store/slice';
import { IGameState } from 'src/modules/Game/store/interfaces';
import { IPlayersState } from 'src/modules/Players/store/interfaces';
import { IDictionaryState } from 'src/modules/Dictionary/store/interfaces';
import { ISettingsState } from 'src/modules/Settings/store/interfaces';

const rootReducer = combineReducers({
  game: gameReducer,
  players: playersReducer,
  dictionary: dictionaryReducer,
  settings: settingsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export type State = {
  game: IGameState;
  players: IPlayersState;
  dictionary: IDictionaryState;
  settings: ISettingsState;
};

export default rootReducer;
