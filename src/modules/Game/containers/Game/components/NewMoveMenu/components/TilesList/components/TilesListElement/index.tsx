import React from 'react';

import Tile from 'src/modules/Game/components/Tile';
import { Letter } from 'src/modules/Dictionary/interfaces';

import * as S from './styles';

type Props = {
  letter: Letter;
  amountLeft: number;
  onPress: (letter: Letter) => void;
};

const TilesListElement: React.FC<Props> = ({ letter, amountLeft, onPress }) => (
  <S.TilesListElementWrapper
    noAmountLeft={Boolean(amountLeft)}
    onPress={() => onPress(letter)}
    disabled={!amountLeft}
  >
    <Tile letter={letter} />
  </S.TilesListElementWrapper>
);

export default TilesListElement;
