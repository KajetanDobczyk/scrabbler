import React from 'react';
import { css } from '@emotion/native';

import * as S from './styles';

const Logo = () => (
  <S.LogoWrapper>
    <S.LogoImage
      style={css({ transform: [{ rotate: '7deg' }] })}
      source={require('assets/tile.png')}
    />
    <S.Title>Scrabbler</S.Title>
  </S.LogoWrapper>
);

export default Logo;
