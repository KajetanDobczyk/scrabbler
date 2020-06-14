import { combineReducers } from '@reduxjs/toolkit';

import gameReducer from 'src/modules/Game/store/slice';
import dictionaryReducer from 'src/modules/Dictionary/store/slice';
import settingsReducer from 'src/modules/Settings/store/slice';
import { IDictionaryState } from 'src/modules/Dictionary/store/interfaces';
import { ISettingsState } from 'src/modules/Settings/store/interfaces';
import { IConfigState } from 'src/modules/Game/store/config/interfaces';
import { IBoardState } from 'src/modules/Game/store/board/interfaces';
import { IPlayersState } from 'src/modules/Game/store/players/interfaces';

const rootReducer = combineReducers({
  game: gameReducer,
  dictionary: dictionaryReducer,
  settings: settingsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export type State = {
  game: {
    config: IConfigState;
    board: IBoardState;
    players: IPlayersState;
  };
  dictionary: IDictionaryState;
  settings: ISettingsState;
};

export default rootReducer;
