import React from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import FlatButton from 'src/components/FlatButton';
import {
  removeLastMove,
  skipTurn,
} from 'src/modules/Game/store/players/thunks';
import { selectIsFirstMove } from 'src/modules/Game/store/players/selectors';
import { setGameView } from 'src/modules/Game/store/config/slice';
import { selectTheme } from 'src/modules/Settings/store/selectors';

import { styles } from './styles';

const menuActions: Record<string, any> = {
  undo: removeLastMove,
  skip: skipTurn,
};

const CurrentPlayerMenu = () => {
  const { t } = useTranslation('game');
  const dispatch = useDispatch();

  const isFirstMove = useSelector(selectIsFirstMove);
  const themedStyles = styles(useSelector(selectTheme));

  const handleMenuAction = (actionLabel: string) => () => {
    const action = menuActions[actionLabel];

    if (action) {
      dispatch(action());
    }
  };

  const scrollToBoard = () => {
    dispatch(setGameView('board'));
  };

  return (
    <View style={themedStyles.container}>
      {!isFirstMove && (
        <View style={themedStyles.buttonWrapper}>
          <FlatButton
            label={t('actions.undo')}
            onPress={handleMenuAction('undo')}
          />
        </View>
      )}
      <View style={themedStyles.buttonWrapper}>
        <FlatButton
          label={t('actions.skip')}
          onPress={handleMenuAction('skip')}
        />
      </View>
      <View style={themedStyles.buttonWrapper}>
        <FlatButton label={t('actions.newWord')} onPress={scrollToBoard} />
      </View>
    </View>
  );
};

export default CurrentPlayerMenu;
