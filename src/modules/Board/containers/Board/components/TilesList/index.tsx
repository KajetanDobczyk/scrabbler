import React from 'react';
import { View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { selectTilesList } from 'src/modules/Board/store/selectors';
import { Letter } from 'src/modules/Dictionary/interfaces';
import { listBoardTilePressed } from 'src/modules/Board/store/thunks';

import { styles } from './styles';
import TilesListElement from './components/TilesListElement';

type Props = {
  onBlankPressed: () => void;
};

const TilesList: React.FC<Props> = ({ onBlankPressed }) => {
  const dispatch = useDispatch();
  const tilesList = useSelector(selectTilesList);

  const selectTile = (letter: Letter) => {
    if (letter === '?') {
      onBlankPressed();
    } else {
      dispatch(listBoardTilePressed(letter));
    }
  };

  const availableTiles = Object.keys(tilesList) as Letter[];

  return (
    <View style={styles.container}>
      {availableTiles.map((letter) => (
        <TilesListElement
          key={letter}
          letter={letter}
          amountLeft={tilesList[letter].amountLeft}
          onPress={selectTile}
        />
      ))}
    </View>
  );
};

export default TilesList;
