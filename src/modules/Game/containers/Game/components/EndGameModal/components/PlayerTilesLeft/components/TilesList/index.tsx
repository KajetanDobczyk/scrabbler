import React from 'react';
import { View } from 'react-native';

import { Letter } from 'src/modules/Dictionary/interfaces';
import { ITilesList } from 'src/modules/Game/interfaces';

import TilesListElement from './components/TilesListElement';
import { styles } from './styles';

type Props = {
  tilesList: ITilesList;
  onTilePressed: (letter: Letter) => void;
  onBlankPressed: () => void;
};

const TilesList: React.FC<Props> = ({
  tilesList,
  onTilePressed,
  onBlankPressed,
}) => {
  const selectTile = (letter: Letter) => {
    if (letter === '?') {
      onBlankPressed();
    } else {
      onTilePressed(letter);
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
