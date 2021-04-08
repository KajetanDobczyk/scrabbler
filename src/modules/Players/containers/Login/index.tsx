import React from 'react';
import { View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { selectTheme } from 'src/modules/Settings/store/selectors';
import TextButton from 'src/theme/components/TextButton';

import { styles } from './styles';
import { loginByFacebook } from '../../store/thunks';

const Login = () => {
  const { t } = useTranslation('players');
  const dispatch = useDispatch();

  const themedStyles = styles(useSelector(selectTheme));

  const login = () => {
    dispatch(loginByFacebook());
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={themedStyles.container}>
        <TextButton label={t('login')} onPress={login} />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Login;
