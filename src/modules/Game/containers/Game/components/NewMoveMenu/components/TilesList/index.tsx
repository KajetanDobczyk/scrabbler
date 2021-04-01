import React from 'react';
import { ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { Letter } from 'src/modules/Dictionary/interfaces';
import { ITilesList } from 'src/modules/Game/interfaces';
import IconButton from 'src/theme/components/IconButton';
import { selectTheme } from 'src/modules/Settings/store/selectors';
import {
  eraseLastTile,
  listBoardTilePressed,
} from 'src/modules/Game/store/board/thunks';

import { styles } from './styles';
import TilesListElement from './components/TilesListElement';

type Props = {
  tilesList: ITilesList;
  onBlankPressed: () => void;
};

const TilesList: React.FC<Props> = ({ tilesList, onBlankPressed }) => {
  const dispatch = useDispatch();

  const selectTile = (letter: Letter) => {
    if (letter === '?') {
      onBlankPressed();
    } else {
      dispatch(listBoardTilePressed(letter));
    }
  };

  const eraseTile = () => {
    dispatch(eraseLastTile());
  };

  const themedStyles = styles(useSelector(selectTheme));

  const availableTiles = Object.keys(tilesList) as Letter[];

  return (
    <ScrollView contentContainerStyle={themedStyles.container}>
      {availableTiles.map((letter) => (
        <TilesListElement
          key={letter}
          letter={letter}
          amountLeft={tilesList[letter].amountLeft}
          onPress={selectTile}
        />
      ))}
      <IconButton
        icon="ios-backspace"
        iconSet="Ionicons"
        size={25}
        onPress={eraseTile}
        iconStyle={themedStyles.eraseButton}
      />
    </ScrollView>
  );
};

export default TilesList;
