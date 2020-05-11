import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import range from 'lodash/range';
import { IPlayer, PlayerId } from 'src/modules/Players/interfaces';

import { Letter } from 'src/modules/Dictionary/interfaces';
import { ITilesList } from 'src/modules/Tiles/interfaces';
import TilesList from 'src/modules/Tiles/components/TilesList';
import Tile from 'src/modules/Tiles/components/Tile';
import { tilesPoints } from 'src/modules/Tiles/data';

import { styles } from './styles';

type Props = {
  playerId: PlayerId;
  player: IPlayer;
  tilesLeft: ITilesList;
  playerTiles: Letter[];
  onListTilePressed: (playerId: PlayerId, letter: Letter) => void;
  onPlayerTilePressed: (playerId: PlayerId, index: number) => void;
};

const PlayerTilesLeft: React.FC<Props> = ({
  playerId,
  player,
  tilesLeft,
  playerTiles,
  onListTilePressed,
  onPlayerTilePressed,
}) => {
  const handleOnTilePressed = (letter: Letter) => {
    onListTilePressed(playerId, letter);
  };

  const handleOnBlankPressed = () => {
    onListTilePressed(playerId, '?');
  };

  const handleOnPlayerTilePressed = (index: number) => () => {
    onPlayerTilePressed(playerId, index);
  };

  const placeholdersAmount = 7 - playerTiles.length;
  const minusPoints = playerTiles.reduce(
    (acc, tile) => acc + tilesPoints[tile],
    0,
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.name}>{player.name}</Text>
        <View style={styles.tilesLeft}>
          {range(placeholdersAmount).map((i) => (
            <View key={i} style={styles.tilePlaceholder}></View>
          ))}
          {playerTiles.map((letter, i) => (
            <TouchableOpacity
              style={styles.tileLeftWrapper}
              onPress={handleOnPlayerTilePressed(i)}
            >
              <Tile letter={letter} />
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <TilesList
        tilesList={tilesLeft}
        onTilePressed={handleOnTilePressed}
        onBlankPressed={handleOnBlankPressed}
        hideNotLeft
      />
      <View style={styles.minusPointsWrapper}>
        <Text style={styles.minusPoints}>-{minusPoints}</Text>
      </View>
    </View>
  );
};

export default PlayerTilesLeft;
