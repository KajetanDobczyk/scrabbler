import React from 'react';
import { ScrollView } from 'react-native';
import { useSelector } from 'react-redux';

import { Letter } from 'src/modules/Dictionary/interfaces';
import { getAreAllLetterTilesUsed } from 'src/modules/Dictionary/helpers';
import { selectTilesList } from 'src/modules/Game/store/board/selectors';
import { initialTilesAmount } from 'src/modules/Dictionary/data';

import * as S from './styles';

const TilesAvailability = () => {
  const tilesList = useSelector(selectTilesList);

  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        paddingTop: 8,
        paddingHorizontal: 10,
      }}
    >
      {(Object.keys(tilesList) as Letter[]).map((letter) => (
        <S.TileInfoWrapper key={letter}>
          <S.Letter isUsed={getAreAllLetterTilesUsed(tilesList, letter)}>
            {letter}
          </S.Letter>
          <S.Amount isUsed={getAreAllLetterTilesUsed(tilesList, letter)}>
            {tilesList[letter].amountLeft}
          </S.Amount>
          <S.Amount isUsed={getAreAllLetterTilesUsed(tilesList, letter)}>
            {' '}
            / {initialTilesAmount[letter]}
          </S.Amount>
        </S.TileInfoWrapper>
      ))}
    </ScrollView>
  );
};

export default TilesAvailability;
