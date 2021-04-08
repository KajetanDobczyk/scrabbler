import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';

import { initSocialLogin } from 'src/modules/Players/helpers';
import MainNavigation from 'src/layout/MainNavigation';
import store from 'src/redux/store';
import 'src/services/i18n';

EStyleSheet.build();

const App = () => {
  useEffect(() => {
    initSocialLogin();
  }, []);

  return (
    <Provider store={store}>
      <MainNavigation />
    </Provider>
  );
};

export default App;
