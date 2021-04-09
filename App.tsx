import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { Provider } from 'react-redux';

import { initSocialLogin } from 'src/modules/Players/helpers';
import MainNavigation from 'src/layout/MainNavigation';
import store from 'src/redux/store';
import 'src/services/i18n';
import ThemeProvider from 'src/theme/ThemeProvider';

const App = () => {
  useEffect(() => {
    initSocialLogin();
  }, []);

  return (
    <Provider store={store}>
      <ThemeProvider>
        <MainNavigation />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
