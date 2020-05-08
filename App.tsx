import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';

import BottomTabNavigation from 'src/layout/BottomTabNavigation';
import store from 'src/redux/store';

EStyleSheet.build();

const App = () => (
  <Provider store={store}>
    <BottomTabNavigation />
  </Provider>
);

export default App;
