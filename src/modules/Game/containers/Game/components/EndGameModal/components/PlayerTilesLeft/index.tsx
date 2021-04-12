import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import range from 'lodash/range';

import { PlayerId } from 'src/modules/Players/interfaces';
import { Letter } from 'src/modules/Dictionary/interfaces';
import Tile from 'src/modules/Game/components/Tile';
import { ITilesList } from 'src/modules/Game/interfaces';
import { tilesPoints } from 'src/modules/Dictionary/data';

import TilesList from './components/TilesList';
import * as S from './styles';

type Props = {
  playerId: PlayerId;
  playerName: string;
  tilesLeft: ITilesList;
  playerTilesLeft: Letter[];
  onListTilePressed: (playerId: PlayerId, letter: Letter) => void;
  onPlayerTilePressed: (
    playerId: PlayerId,
    letter: Letter,
    index: number,
  ) => void;
};

const PlayerTilesLeft: React.FC<Props> = ({
  playerId,
  playerName,
  tilesLeft,
  playerTilesLeft,
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

  const placeholdersAmount = 7 - playerTilesLeft.length;
  const minusPoints = playerTilesLeft.reduce(
    (acc, tile) => acc - tilesPoints[tile],
    0,
  );

  return (
    <S.PlayerTilesLeftWrapper>
      <S.Header>
        <S.Name>{playerName}</S.Name>
        <S.TilesLeft>
          {range(placeholdersAmount).map((i) => (
            <S.TilePlaceholder key={i}></S.TilePlaceholder>
          ))}
          {playerTilesLeft.map((letter, i) => (
            <S.TileLeftWrapper
              key={i}
              onPress={handleOnPlayerTilePressed(letter, i)}
            >
              <Tile letter={letter} />
            </S.TileLeftWrapper>
          ))}
        </S.TilesLeft>
      </S.Header>
      <TilesList
        tilesList={tilesLeft}
        onTilePressed={handleOnTilePressed}
        onBlankPressed={handleOnBlankPressed}
      />
      <S.MinusPointsWrapper>
        <S.MinusPoints>{minusPoints}</S.MinusPoints>
      </S.MinusPointsWrapper>
    </S.PlayerTilesLeftWrapper>
  );
};

export default PlayerTilesLeft;
