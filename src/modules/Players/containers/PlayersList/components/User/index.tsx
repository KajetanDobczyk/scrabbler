import React from 'react';
import { useSelector } from 'react-redux';

import { selectUserData } from 'src/modules/User/store/selectors';

import * as S from './styles';

const User = () => {
  const userData = useSelector(selectUserData);

  return userData ? (
    <S.UserWrapper>
      <S.ProfilePic source={{ uri: userData.photoUrl }} />
      <S.Name>{userData.name}</S.Name>
    </S.UserWrapper>
  ) : null;
};

export default User;
