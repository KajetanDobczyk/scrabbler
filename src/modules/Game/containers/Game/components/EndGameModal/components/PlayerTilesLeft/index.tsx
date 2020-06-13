import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import range from 'lodash/range';

import { IPlayer, PlayerId } from 'src/modules/Players/interfaces';
import { Letter } from 'src/modules/Dictionary/interfaces';
import TilesList from 'src/modules/Game/components/TilesList';
import Tile from 'src/modules/Game/components/Tile';
import { ITilesList } from 'src/modules/Game/interfaces';
import { tilesPoints } from 'src/modules/Dictionary/data';

import { styles } from './styles';

type Props = {
  playerId: PlayerId;
  player: IPlayer;
  tilesLeft: ITilesList;
  finalPlayerTiles: Letter[];
  onListTilePressed: (playerId: PlayerId, letter: Letter) => void;
  onPlayerTilePressed: (
    playerId: PlayerId,
    letter: Letter,
    index: number,
  ) => void;
};

const PlayerTilesLeft: React.FC<Props> = ({
  playerId,
  player,
  tilesLeft,
  finalPlayerTiles,
  onListTilePressed,
  onPlayerTilePressed,
}) => {
  const handleOnTilePressed = (letter: Letter) => {
    onListTilePressed(playerId, letter);
  };

  const handleOnBlankPressed = () => {
    onListTilePressed(playerId, '?');
  };

  const handleOnPlayerTilePressed = (letter: Letter, index: number) => () => {
    onPlayerTilePressed(playerId, letter, index);
  };

  const placeholdersAmount = 7 - finalPlayerTiles.length;
  const minusPoints = finalPlayerTiles.reduce(
    (acc, tile) => acc - tilesPoints[tile],
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
          {finalPlayerTiles.map((letter, i) => (
            <TouchableOpacity
              key={i}
              style={styles.tileLeftWrapper}
              onPress={handleOnPlayerTilePressed(letter, i)}
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
      />
      <View style={styles.minusPointsWrapper}>
        <Text style={styles.minusPoints}>{minusPoints}</Text>
      </View>
    </View>
  );
};

export default PlayerTilesLeft;
