import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';
import * as Facebook from 'expo-facebook';

import BottomTabNavigation from 'src/layout/BottomTabNavigation';
import store from 'src/redux/store';
import 'src/services/i18n';
import { FB_APP_ID } from 'src/config';

EStyleSheet.build();

const initSocialLogin = async () => {
  try {
    await Facebook.initializeAsync({
      appId: FB_APP_ID,
      appName: 'Scrabbler',
    });
    console.log('init fb login');
  } catch (e) {
    console.log(e);
  }
};

const App = () => {
  useEffect(() => {
    initSocialLogin();
  }, []);

  return (
    <Provider store={store}>
      <BottomTabNavigation />
    </Provider>
  );
};

export default App;
