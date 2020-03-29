import React from 'react';
import { View } from 'react-native';

import { styles, StylesProps } from './styles';
import { FieldBonus } from 'src/interfaces';
import { boardFieldsColors } from 'src/config/board';

type Props = {
  x: number;
  y: number;
  bonus: FieldBonus;
};

const BoardField: React.FC<Props> = ({ x, y, bonus }) => {
  const stylesProps: StylesProps = {
    backgroundColor: boardFieldsColors[bonus],
  };

  return <View style={styles(stylesProps).container}></View>;
};

export default BoardField;
