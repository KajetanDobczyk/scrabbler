import React from 'react';
import { View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import * as Facebook from 'expo-facebook';

import { selectTheme } from 'src/modules/Settings/store/selectors';
import TextButton from 'src/theme/components/TextButton';

import { styles } from './styles';

const fbLogin = async () => {
  try {
    const { token, type } = await Facebook.logInWithReadPermissionsAsync();

    // GET USER DATA FROM FB API
    const response = await fetch(
      `https://graph.facebook.com/me?access_token=${token}`,
    );
    const user = await response.json();

    // GET PROFILE IMAGE DATA FROM FB API
    // NOTE THAT I SET THE IMAGE WIDTH TO 500 WHICH IS OPTIONAL
    const pictureResponse = await fetch(
      `https://graph.facebook.com/v8.0/${user.id}/picture?width=500&redirect=false&access_token=${token}`,
    );
    const pictureOBject = await pictureResponse.json();
    const userObject = {
      ...user,
      photoUrl: pictureOBject.data.url,
    };

    return { type, token, user: userObject };
  } catch (e) {
    return { error: e };
  }
};

const Login = () => {
  const { t } = useTranslation('players');
  const dispatch = useDispatch();

  const themedStyles = styles(useSelector(selectTheme));

  const login = async () => {
    const { type, token, user, error } = await fbLogin();

    if (type && token) {
      if (type === 'success') {
        // DISPATCH TOKEN AND USER DATA
        // TO HANDLE NAVIGATION TO HOME AND DISPLAY USER INFOc
        console.log('login successful', token, user);
      }
    } else if (error) {
      console.log('The login attempt was cancelled');
    }
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
