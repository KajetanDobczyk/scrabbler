import React from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

import TextButton from 'src/components/TextButton';

import * as S from './styles';
import { loginByFacebook } from '../../../User/store/thunks';

const Login = () => {
  const { t } = useTranslation('players');
  const dispatch = useDispatch();

  const login = async () => {
    dispatch(loginByFacebook());
  };

  return (
    <S.LoginWrapper>
      <TextButton label={t('login')} onPress={login} />
    </S.LoginWrapper>
  );
};

export default Login;
