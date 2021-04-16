import React from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

import TextButton from 'src/components/TextButton';
import { loginByFacebook } from 'src/modules/User/store/thunks';

import * as S from './styles';

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
