import { combineReducers } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer } from 'redux-persist';

import gameReducer from 'src/modules/Game/store/slice';
import dictionaryReducer from 'src/modules/Dictionary/store/slice';
import settingsReducer from 'src/modules/Settings/store/slice';
import userReducer from 'src/modules/User/store/slice';
import { IDictionaryState } from 'src/modules/Dictionary/store/interfaces';
import { ISettingsState } from 'src/modules/Settings/store/interfaces';
import { IConfigState } from 'src/modules/Game/store/config/interfaces';
import { IBoardState } from 'src/modules/Game/store/board/interfaces';
import { ICurrentPlayersState } from 'src/modules/Game/store/players/interfaces';
import { IUserState } from 'src/modules/User/store/interfaces';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  game: gameReducer,
  dictionary: dictionaryReducer,
  settings: persistReducer(persistConfig, settingsReducer),
  user: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export type State = {
  game: {
    config: IConfigState;
    board: IBoardState;
    players: ICurrentPlayersState;
  };
  dictionary: IDictionaryState;
  settings: ISettingsState;
  user: IUserState;
};

export default rootReducer;
