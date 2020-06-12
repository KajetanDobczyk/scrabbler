import React from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { skipTurn, removeLastMove } from 'src/modules/Players/store/thunks';
import { selectIsFirstMove } from 'src/modules/Players/store/selectors';
import IconButton from 'src/theme/components/IconButton';

import { styles } from './styles';
import FlatButton from 'src/theme/components/FlatButton';

type Props = {
  onScrollToBoard: () => void;
};

const menuActions: Record<string, any> = {
  reverse: removeLastMove,
  skip: skipTurn,
};

const CurrentPlayerMenu: React.FC<Props> = ({ onScrollToBoard }) => {
  const dispatch = useDispatch();

  const isFirstMove = useSelector(selectIsFirstMove);

  const handleMenuAction = (actionLabel: string) => () => {
    const action = menuActions[actionLabel];

    if (action) {
      dispatch(action());
    }
  };

  return (
    <View style={styles.container}>
      {!isFirstMove && (
        <View style={styles.buttonWrapper}>
          <FlatButton label="Cofnij" onPress={handleMenuAction('reverse')} />
        </View>
      )}
      <View style={styles.buttonWrapper}>
        <FlatButton label="Wymiana / pas" onPress={handleMenuAction('skip')} />
      </View>
      <View style={styles.buttonWrapper}>
        <FlatButton label="Ułóż słowo" onPress={onScrollToBoard} />
      </View>
    </View>
  );
};

export default CurrentPlayerMenu;
